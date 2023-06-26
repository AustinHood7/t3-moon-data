import axios from "axios";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { MoonDataSchema } from "../schemas";

export const exampleRouter = createTRPCRouter({
  
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

    getMoonData: publicProcedure
    .output(MoonDataSchema)
    .query(async () => {
      const now = new Date();
      const formattedNow = now.toISOString().replace(/[:T]/g, '-').slice(0, 19);

      const response = await axios.get('https://moon-api1.p.rapidapi.com/phase', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        },
        params: {
          'date-time': formattedNow,
          timezone: '-4',
          'angle-units': 'deg'
        },
      });
      return response.data;
    }),
});