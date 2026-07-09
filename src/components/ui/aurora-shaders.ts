export const AURORA_VERTEX = /* glsl */ `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

export const AURORA_FRAGMENT = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;

  // Soft value noise — no hard edges
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = m * p;
      a *= 0.5;
    }
    return v;
  }

  // Soft vertical curtain band — exponential falloff, never striped
  float curtain(vec2 uv, float t, float phase, float scale) {
    float n = fbm(vec2(uv.x * scale + phase, t * 0.18 + phase * 0.4));
    float warp = fbm(vec2(uv.x * (scale * 0.55) - t * 0.08, uv.y * 1.4 + phase));
    float ridge = uv.y + (n - 0.5) * 0.55 + warp * 0.22;

    // Soft glow around a drifting horizontal band
    float band = exp(-pow(abs(ridge - 0.42) * 3.2, 1.65));
    // Vertical fade so light hangs from the sky, not the ground
    float sky = smoothstep(1.05, 0.15, uv.y) * smoothstep(-0.05, 0.35, uv.y);
    // Soft lateral variation (organic, not repeating lines)
    float lateral = 0.55 + 0.45 * fbm(vec2(uv.x * 1.8 + t * 0.05 + phase, t * 0.1));

    return band * sky * lateral;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    // Keep aspect so curtains don't stretch oddly
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vec2(uv.x * aspect, uv.y);
    float t = uTime * 0.35;

    float a1 = curtain(p, t, 0.0, 2.4);
    float a2 = curtain(p, t * 1.15 + 1.7, 2.1, 1.9);
    float a3 = curtain(p, t * 0.85 + 3.4, 4.3, 2.8);

    // Northern lights palette: mint / cyan / soft violet
    vec3 c1 = vec3(0.22, 0.95, 0.72);
    vec3 c2 = vec3(0.28, 0.62, 1.0);
    vec3 c3 = vec3(0.55, 0.35, 0.95);

    vec3 col = vec3(0.0);
    col += c1 * a1 * 0.85;
    col += c2 * a2 * 0.7;
    col += c3 * a3 * 0.55;

    // Soft bloom / haze so bands melt together
    float haze = fbm(vec2(p.x * 0.8 - t * 0.04, p.y * 1.2 + t * 0.06));
    col += vec3(0.15, 0.35, 0.55) * haze * 0.12 * smoothstep(1.0, 0.2, uv.y);

    // Gentle overall pulse
    col *= 0.85 + 0.15 * sin(t * 0.4);

    float alpha = clamp(length(col) * 1.15, 0.0, 0.92);
    // Fade into page at the bottom
    alpha *= smoothstep(1.0, 0.55, uv.y);

    gl_FragColor = vec4(col, alpha);
  }
`;
