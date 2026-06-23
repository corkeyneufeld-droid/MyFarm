export const config = { runtime: 'edge' };

export default async function handler(req) {
  if(req.method !== 'POST') return new Response('Method not allowed', {status:405});
  
  try {
    const body = await req.json();
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch(e) {
    return new Response(JSON.stringify({error: e.message}), {status:500});
  }
}
