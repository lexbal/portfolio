import { NextResponse } from 'next/server';
import { z } from 'zod';
import { resend, CONTACT_FROM, CONTACT_TO } from '@/lib/email';

export const runtime = 'nodejs';

const ContactSchema = z.object({
    name: z.string().min(2).max(80),
    email: z.string().email().max(120),
    message: z.string().min(10).max(5000),
    website: z.string().optional().default(''),
});

async function readBody(req: Request) {
    const ctype = req.headers.get('content-type') ?? '';
    if (ctype.includes('application/json')) return await req.json();
    const fd = await req.formData();
    return Object.fromEntries(fd.entries());
}

export async function POST(req: Request) {
    try {
        const raw = await readBody(req);
        const parsed = ContactSchema.safeParse(raw);
        if (!parsed.success) {
            return NextResponse.json({ ok: false, errors: parsed.error.format() }, { status: 400 });
        }
        const { name, email, message, website } = parsed.data;

        if (website && website.trim()) return NextResponse.json({ ok: true });

        const subject = `📨 Message portfolio — ${name}`;
        const html = `
            <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
                <h2>Message du portfolio</h2>
                <p><b>Nom:</b> ${escapeHtml(name)}</p>
                <p><b>Email:</b> ${escapeHtml(email)}</p>
                <p><b>Message:</b></p>
                <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
            </div>
        `;

        const { error } = await resend.emails.send({
            from: CONTACT_FROM,
            to: CONTACT_TO,
            replyTo: email,
            subject,
            html,
        });
        if (error) return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
    }
}

function escapeHtml(s: string) {
    return s.replace(
        /[&<>"']/g,
        (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]!,
    );
}
