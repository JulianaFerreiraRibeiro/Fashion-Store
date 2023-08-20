import { z } from "zod"

export const schema = z.object({
    name: z.string().nonempty("O nome é obrigatório").min(2, "O nome precisa conter pelo menos 2 caracteres"),
    email: z.string().nonempty("O e-mail é obrigatório").email("O e-mail fornecido é inválido"),
    password: z.string().nonempty("A senha é obrigatória").min(8, "A senha precisa conter pelo menos 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*/, "É necessário pelo menos um caractere especial"),
    confirm: z.string().nonempty("A confirmação de senha é obrigatória"),
}).refine(({password, confirm}) => password === confirm, {
    message: "As senhas precisam ser correspondentes",
    path: ["confirm"],
})

export type IRegisterFormValues = z.infer<typeof schema>;