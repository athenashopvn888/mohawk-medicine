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

    // Post to Apps Script to log in Google Sheet
    const appsScriptUrl = process.env.APPS_SCRIPT_URL;
    if (appsScriptUrl) {
      try {
        await fetch(appsScriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'deliverySignup',
            email: cleanEmail,
            timestamp,
            store: 'mohawk-medicine',
          }),
        });
      } catch (err) {
        // Apps Script logging is best-effort — don't fail the user request
        console.warn('[DELIVERY SIGNUP] Apps Script log failed:', err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[DELIVERY SIGNUP] Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
