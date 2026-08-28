import { NextRequest, NextResponse } from "next/server";

// HTTP Basic Auth: the browser prompts for a username/password, then
// resends them (base64-encoded, not encrypted — this is fine because
// Vercel terminates TLS, so the connection itself is already encrypted)
// on every request via the `Authorization` header. No cookie involved.
export function proxy(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const expectedUser = process.env.ANALYTICS_DASHBOARD_USER;
  const expectedPass = process.env.ANALYTICS_DASHBOARD_PASSWORD;

  if (!expectedUser || !expectedPass) {
    return new NextResponse("Dashboard credentials are not configured.", { status: 500 });
  }

  if (auth?.startsWith("Basic ")) {
    const decoded = atob(auth.slice(6));
    const [user, pass] = decoded.split(":");
    if (user === expectedUser && pass === expectedPass) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="analytics"' },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
