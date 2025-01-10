// export const dynamic = 'auto';
// //opt out of caching: dynamic mode in segment config option
export const dynamic = 'force-dynamic';
//using request object with the GEt methd
// emplying dynamic functions like headers() and cookies()
//using any HTTP methid other than GET

export async function GET() {
 return Response.json({
  time: new Date().toLocaleTimeString(),
 });
}
