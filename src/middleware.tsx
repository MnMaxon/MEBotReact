"use server"

import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {fetchApi, getSessionId} from "@/app/utils";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {RequestCookies} from "next/dist/compiled/@edge-runtime/cookies";
import type {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {NextURL} from "next/dist/server/web/next-url";

const SESSION_ID = 'sessionId'

function randomString(length = 16) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"; //from where to create
    let result = "";
    for (let i = 0; i < length; i++)
        result += charset[Math.floor(Math.random() * charset.length)];
    return result
}

// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
    if (!request.cookies.has(SESSION_ID)) {
        const response = NextResponse.redirect(request.url);
        response.cookies.set(SESSION_ID, randomString());
        return response;
    }
    // await updateSessionId(request.cookies, request.nextUrl.pathname.startsWith('/logout'))
    const rsp = await fetchApi('logged-in/?session_id=' + getSessionId())
    const loggedIn = await rsp.json()
    console.log("Logged in " + getSessionId() + " : " + loggedIn)
    if (request.nextUrl.pathname.startsWith('/logged_out')) {
        if (loggedIn)
            return NextResponse.redirect(new URL("/", request.url))
    } else if (request.nextUrl.pathname.startsWith('/logout')) {
        const response = NextResponse.redirect(new URL("/logged_out", request.url));
        response.cookies.delete(SESSION_ID);
        return response
    } else if (!loggedIn) {
        return NextResponse.redirect(new URL("/logged_out", request.url));
    }

    return NextResponse.next()
    // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: '/((?!api|_next/static|resources|_next/image|favicon.ico).*)',
            missing: [
                {type: 'header', key: 'next-router-prefetch'},
                {type: 'header', key: 'purpose', value: 'prefetch'},
            ],
        },
    ],
}

