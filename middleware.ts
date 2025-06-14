import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const isBiodataPage = req.nextUrl.pathname.startsWith('/biodata');
  const hasCookie = req.cookies.get('biodata_access')?.value;

  if (isBiodataPage && !hasCookie) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/biodata/:path*'],
};
