import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);
export const CONTACT_TO = process.env.CONTACT_TO!;
export const CONTACT_FROM = process.env.CONTACT_FROM ?? 'Portfolio <onboarding@resend.dev>';
