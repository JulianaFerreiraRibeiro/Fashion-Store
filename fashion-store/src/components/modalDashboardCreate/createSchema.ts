import { z } from "zod"

export const schema = z.object({
    name: z.string().nonempty("O nome do produto é obrigatório"),
    price: z.string().nonempty("O preço é obrigatório"),
    image: z.string().nonempty("A imagem do produto é obrigatória"),
    description: z.string().nonempty("A descrição do produto é obrigatória")
   
})

export type ICreateProductsValues = z.infer<typeof schema>;