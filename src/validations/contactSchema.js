import * as yup from "yup";

export const contactSchema = yup.object({
  nome: yup
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .required("O nome é obrigatório"),

  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),

  assunto: yup
    .string()
    .min(3, "Assunto muito curto")
    .required("O assunto é obrigatório"),

  msg: yup
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .required("A mensagem é obrigatória")
});
