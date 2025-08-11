import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLangs = ["ar", "en", "fr", "de", "tr"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  // البحث عن language code في أي مكان في الـ URL
  const langIndex = segments.findIndex(segment => supportedLangs.includes(segment));
  
  if (langIndex !== -1) {
    const lang = segments[langIndex];
    
    // إنشاء URL جديد مع الـ language code في المكان الصحيح
    const newUrl = new URL(request.url);
    newUrl.pathname = `/${lang}`;
    
    // إضافة معلومات إضافية للـ headers عشان نقدر نوصل للمسار الأصلي
    const response = NextResponse.rewrite(newUrl);
    response.headers.set('x-original-path', pathname);
    
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};