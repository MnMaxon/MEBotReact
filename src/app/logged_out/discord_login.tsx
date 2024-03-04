import Link from "next/link";
import Image from "next/image";
import React from "react";
import {getSessionId} from "@/app/utils";



export default async function DiscordLogin() {
    // if (cookies.sessionId == null) {
    //     setCookie('sessionId', randomString())
    //     console.log("Generated Session ID")
    // }
    const oauthLink = getOauthLink()
    return (
        // TODO URL ONLY USING SERVER sessionId (undefined) instead of client's sessionId
        <Link suppressHydrationWarning
              href={oauthLink}
        >
            <Image
                src="/resources/discord-logo-blue.png"
                width={2473}
                height={469}
                alt="Discord Login"
                //className="block dark:hidden"
            />
        </Link>
    )
}

function getOauthLink(){
    console.log("Session ID: " + getSessionId()) //TODO remove log
    return "https://discord.com/api/oauth2/authorize?client_id=1172965871988244630&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Foauth%2Fcallback&response_type=code&scope=identify&state=" + getSessionId()
}