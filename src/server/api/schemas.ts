import { z } from "zod";

export const MoonDataSchema = z.object({
  lengthUnits: z.string(),
  angleUnits: z.string(),
  orbitPerigee: z.number(),
  orbitApogee: z.number(),
  orbitSemimajorAxis: z.number(),
  orbitEccentricity: z.number(),
  orbitInclination: z.number(),
  radius: z.number(),
  circumference: z.number(),
  surfaceArea: z.number(),
  mass: z.number(),
  surfaceGravity: z.number(),
  escapeVelocity: z.number(),
  synodicMonth: z.number(),
});
