import { NextResponse } from 'next/server';

// pretend async call
const checkAuthenticated = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(false);
  }, 2000);
})

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

  // below we can get auth/session state.
  const isAuthenticated = await checkAuthenticated();

  // redirect page based on the auth/session state.
  if(isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url))
  } else {
    return NextResponse.next()
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/blog/:path*'],
};