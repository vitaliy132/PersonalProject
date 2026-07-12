export type FormState = {
  date: string;
  time: string;
  partySize: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const emptyForm: FormState = {
  date: "",
  time: "",
  partySize: "2",
  name: "",
  email: "",
  phone: "",
  notes: "",
};
