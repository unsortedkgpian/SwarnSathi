import { NextResponse, NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = [
    '/login',
    '/api',
    '/',
    '/schemes',
    '/contact-swarn-sathi',
    '/about-swarn-sathi',
    '/swarn-sathi-branch-locator',
    '/swarnsathi-champion',
    '/assets',
    '/images',
    '/favicon.ico',
  ].some(publicPath => 
    path === publicPath || 
    path.startsWith(publicPath + '/') || 
    path.startsWith(publicPath + '?')
  );

  // Check for protected paths
  const isProtectedPath = path === '/dashboard' || path.startsWith('/dashboard/');

  // Check for authentication token
  const token = request.cookies.get('token')?.value;
  const isAuthenticated = !!token;

  // Redirect logic
  if (isProtectedPath && !isAuthenticated) {
    // Redirect to login if trying to access protected path without authentication
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Proceed with the request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*', // Apply this middleware to dashboard routes
    '/login' // Also apply to login for future login-when-authenticated redirects
  ],
}; 