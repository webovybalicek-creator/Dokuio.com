/**
 * Odkaz pro druhou stranu: rozpracovaná data jsou zabalená přímo v odkazu (část za #),
 * která se na server nikdy neposílá. Komprese deflate + base64url.
 */
const b64url = (b: Uint8Array) => {
  let s = '';
  for (const x of b) s += String.fromCharCode(x);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const zB64url = (t: string) => {
  const s = atob(t.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((t.length + 3) % 4));
  return Uint8Array.from(s, (c) => c.charCodeAt(0));
};
const proud = async (data: Uint8Array, s: CompressionStream | DecompressionStream) =>
  new Uint8Array(await new Response(new Blob([data]).stream().pipeThrough(s)).arrayBuffer());

export async function zabal(obsah: unknown): Promise<string> {
  const json = new TextEncoder().encode(JSON.stringify(obsah));
  return b64url(await proud(json, new CompressionStream('deflate-raw')));
}

export async function rozbal(t: string): Promise<unknown> {
  const json = await proud(zB64url(t), new DecompressionStream('deflate-raw'));
  return JSON.parse(new TextDecoder().decode(json));
}
