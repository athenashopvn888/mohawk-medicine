import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const timestamp = new Date().toISOString();

    // Log to console (visible in Vercel function logs)
    console.log(`[DELIVERY SIGNUP] ${timestamp} | ${cleanEmail}`);

    // Log the signup to the fleet delivery waitlist sheet (Apps Script action=delivery_email,
    // the same endpoint the other store sites use). Grok 2026-10-08: this used to POST to
    // APPS_SCRIPT_URL, which never had a doPost handler, so signups were not being saved.
    // DELIVERY_SIGNUP_URL can override the endpoint; it is separate from the menu feed URL.
    const signupUrl = (process.env.DELIVERY_SIGNUP_URL || "").trim() || "https://script.google.com/macros/s/AKfycbySrZYxI-NNnXfxY1jXOqHgT2HQi4zst2Fgte6FXTeymat_W_r0o1E3P83EfnVCjEk0/exec";
    try {
      const url = new URL(signupUrl);
      url.searchParams.set('action', 'delivery_email');
      url.searchParams.set('email', cleanEmail);
      url.searchParams.set('store', 'MEB01');
      await fetch(url, { method: 'GET', signal: AbortSignal.timeout(10000) });
    } catch (err) {
      // Waitlist logging is best-effort — don't fail the user request
      console.warn('[DELIVERY SIGNUP] waitlist log failed:', err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[DELIVERY SIGNUP] Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
