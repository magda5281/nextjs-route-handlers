import { type NextRequest } from 'next/server';
import { headers } from 'next/headers';
export async function GET(request: NextRequest) {
 const requestHeaders = new Headers(request.headers);
 console.log(requestHeaders.get('Authorization'));
 const headerList = await headers();
 console.log(headerList.get('Authorization'));

 //to change headers return a new resopnse with the new headers
 return new Response('<h1>Profile api data</h1>', {
  headers: { 'Content-Type': 'text/html' },
 });
}
