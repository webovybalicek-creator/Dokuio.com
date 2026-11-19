/** Články poradny: src/content/poradna/<země>/<slug>.md (struktura kategorií v src/obsah/<země>/_poradna.ts) */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const poradna = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/poradna' }),
  schema: z.object({
    title: z.string(),
    /** Krátký název do karet a drobečků (výchozí title) */
    nazev: z.string().optional(),
    description: z.string().max(170),
    perex: z.string(),
    kategorie: z.string(),
    tema: z.string(),
    /** Slugy dokumentů téže země, na které článek odkazuje */
    dokumenty: z.array(z.string()).default([]),
    datum: z.string(),
    aktualizovano: z.string().optional(),
    zdroje: z.array(z.object({ nazev: z.string(), url: z.string().url() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    slova: z.array(z.string()).default([]),
    koncept: z.boolean().default(false),
  }),
});

export const collections = { poradna };
