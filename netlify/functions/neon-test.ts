import { neon } from '@netlify/neon';

const sql = neon();

export default async () => {
  try {
    const [result] = await sql`SELECT NOW() AS now`;

    return new Response(
      JSON.stringify({ ok: true, now: result?.now ?? null }),
      {
        status: 200,
        headers: { 'content-type': 'application/json' },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'content-type': 'application/json' },
      },
    );
  }
};
