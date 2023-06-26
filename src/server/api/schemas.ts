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
