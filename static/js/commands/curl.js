export async function curl(url) {
  const res = await fetch(url);
  return `<pre>${await res.text()}</pre>`;
}