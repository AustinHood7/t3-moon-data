import { z } from "zod";

export const MoonDataSchema = z.object({
  angleUnits: z.string(),
  dateTime: z.string(),
  phase: z.number(),
  phaseAge: z.number(),
  phaseAngle: z.number(),
  phaseName: z.string(),
});

export type MoonData = z.infer<typeof MoonDataSchema>;

export const MoonIlluminationSchema = z.object({
  dateTime: z.string(),
  illumination: z.number(),
});

export type MoonIllumination = z.infer<typeof MoonIlluminationSchema>;
