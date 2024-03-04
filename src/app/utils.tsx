import {cookies} from 'next/headers'

const SESSION_ID = 'sessionId'

export function getSessionId() {
    let cookieStore = cookies()
    console.log(cookieStore.get(SESSION_ID))
    return cookieStore.get(SESSION_ID)?.value
}

export async function fetchApi(path: string, initArgs: RequestInit = {}, cache = false) {
    if (!cache)
        initArgs["cache"] = "no-cache"
    return await fetch('http://127.0.0.1:8000/' + path, initArgs)
}
