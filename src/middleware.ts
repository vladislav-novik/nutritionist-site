import { NextRequest, NextResponse } from "next/server";
import { getLocale, langs } from "./utils/locales";

const DEFINED_URLS: string[] = ['/articles/'];
const ADMIN_URL: string = '/admin';


export function middleware(request: NextRequest) {
  // Get the pathname of the URL
  let pathname = request.nextUrl.pathname

  if (pathname === ADMIN_URL) {
    return;
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = langs.every(
    (lang) => {
      // Get the locale path (e.g. '/en/')
      const localePath = `/${lang}/`
      // Check if the pathname starts with the locale path
      const isLocalePath = pathname.startsWith(localePath)
      // Return true if the pathname is missing a locale
      return !isLocalePath && pathname !== `/${lang}`
    }
  )

  // If the pathname is missing a locale
  if (pathnameIsMissingLocale) {
    // Get the locale for the request
    const locale = getLocale(request.headers.get('Accept-Language') || '')
    // Create a new URL with the locale
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    // Add a trailing slash if needed
    if (!newUrl.pathname.endsWith('/')) {
      newUrl.pathname += '/'
    }
    return NextResponse.redirect(newUrl)
  }

  // Add a trailing slash if needed
  if (!pathname.endsWith('/')) {
    request.nextUrl.pathname += '/'
    return NextResponse.redirect(`${request.nextUrl.origin}${request.nextUrl.pathname}`)
  }
}

export const config = {
  // do not localize next.js paths
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};