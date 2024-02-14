import { cookies } from "next/headers";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest){
    console.log(`COOOOKIE::: ${cookies().get('session')}`);
    const session = cookies().get('session');
    if(!session)
        return NextResponse.redirect(`${process.env.SERVER_URL}/login`)

    return NextResponse.redirect(process.env.SERVER_URL!)
}

export const config = {
    matcher: '/'
}