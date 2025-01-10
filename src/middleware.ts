import { redirect } from 'next/dist/server/api-utils';
import { matchesMiddleware } from 'next/dist/shared/lib/router/router';
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
 const response = NextResponse.next();

 const themePreference = request.cookies.get('theme');
 if (!themePreference) {
  return response.cookies.set('theme', 'dark');
 }
 response.headers.set('custom-header', 'custom-value');
 return response;
 //conditional approach
 //  if (request.nextUrl.pathname === '/profile') {
 // return NextResponse.redirect(new URL('/', request.url));

 //redirects but url stays the same; useful for SEO
 // return NextResponse.rewrite(new URL('/', request.url));
 //  }

 //matcher approach
 //  return NextResponse.redirect(new URL('/', request.url));
}

//matcher approach
// export const config = {
//  matcher: '/profile',
// };
