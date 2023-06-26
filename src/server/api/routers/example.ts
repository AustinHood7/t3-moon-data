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
    goodbye: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Goodbye ${input.text}`,
      };
    }),
    getMoonData: publicProcedure
    .output(MoonDataSchema)
    .query(async () => {
      const response = await axios.get('https://moon-api1.p.rapidapi.com/general-data', {
        headers: {
          'X-RapidAPI-Key': '000ab2eadbmshdb5e264cda6750ap1ec88djsn2fd937e60c56',
          'X-RapidAPI-Host': 'moon-api1.p.rapidapi.com'
        },
        params: {
          'length-units': 'km',
          'angle-units': 'deg'
        },
      });
      return response.data;
    }),
});
