// src/lib/getBaseUrl.ts
export function getBaseUrl() {
  let url = "";

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    url = process.env.NEXT_PUBLIC_SITE_URL;
  } else if (process.env.VERCEL_URL) {
    url = `https://${process.env.VERCEL_URL}`;
  } else {
    url = "http://localhost:3000";
  }

  return url.replace(/\/$/, ""); // remove trailing slash safely
}