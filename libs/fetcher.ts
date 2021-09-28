const WP_API = process.env.WP_URL;
const EB_WP_API = process.env.EB_WP_URL;

export async function fetcher(query: Object, { variables }: any = {}) {
  const res: Response = await fetch(WP_API!, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const jsondata = await res.json();
  return jsondata;
}

export async function EBfetcher(query: Object, { variables }: any = {}) {
  const res: Response = await fetch(EB_WP_API!, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const jsondata = await res.json();
  return jsondata;
}
