import { z } from "zod";

const configSchema = z.object({
  PORT: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.coerce.number(),
  ),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export function parseConfig(env: unknown) {
  const result = configSchema.safeParse(env);

  if (!result.success) {
    throw result.error;
  }

  return result.data;
}
