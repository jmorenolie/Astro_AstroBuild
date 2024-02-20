// 1. Importa las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';

export const collections = {
    prueba: defineCollection({
        schema: z.object({
            title: z.string(),
            pubDate: z.string(),
            pubDate2: z.number(),
            text: z.number(),
            read: z.number(),
            img: z.number(),
            slug: z.string()
        }),
    }),
}