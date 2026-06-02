import { z } from 'zod'

export const factSchema = z.object({
    text: z
        .string()
        .min(1, 'Insira um fato.')
        .max(200, 'O fato não pode conter mais que 200 caracteres.'),
    source: z
        .url('Insira uma url válida'),
    category: z
        .string()
        .min(1, 'Selecione uma categoria.')

})

export type factFormData = z.infer<typeof factSchema>

