import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string(),
  SESSION_SECRET: z.string(),
  STRIPE_SECRET_KEY: z.string(),
  STRIPE_PRICE_ID: z.string(),
  STRIPE_WEBHOOK_SECRET: z.string(),
  STRIPE_CUSTOMER_PORTAL_LINK: z.string(),
  HOST_URL: z.string(),
  RESEND_API_KEY: z.string(),
  RESEND_NO_REPLY_EMAIL_SENDER: z.string(),
  PASSWORD_RESET_JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
