import axios from "axios";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { MoonDataSchema, MoonData, MoonIllumination, MoonIlluminationSchema } from "../schemas";
import { z } from "zod";

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

      const response = await axios.get<MoonData>('https://moon-api1.p.rapidapi.com/phase', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!
        },
        params: {
          'date-time': formattedNow,
          timezone: '-4',
          'angle-units': 'deg'
        },
      });
      response.data.dateTime = response.data.dateTime.slice(0, 9);
      return response.data;
    }),

    getIlluminationData: publicProcedure
    .output(MoonIlluminationSchema)
    .query(async () => {
      const now = new Date();
      const formattedNow = now.toISOString().replace(/[:T]/g, '-').slice(0, 19);

      const response = await axios.get<MoonIllumination>('https://moon-api1.p.rapidapi.com/illumination', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!
        },
        params: {
          'date-time': formattedNow,
          timezone: '-4',
        },
      });
      return response.data;
    }),
});
