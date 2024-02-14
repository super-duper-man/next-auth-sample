import { cookies } from "next/headers";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as bcrypt from 'bcrypt';
import * as JWT from 'jsonwebtoken'

export function middleware(request: NextRequest){
    console.log(`COOOOKIE::: ${cookies().get('session')?.value}`);
    const jwtPayload = JWT.decode(cookies().get('session')?.value!) as {username: string, sub: string}
    console.log(`username: ${jwtPayload.username}`);

    const session = cookies().get('session');
    if(!session)
        return NextResponse.rewrite(`${process.env.SERVER_URL}/login`)

    return NextResponse.rewrite(process.env.SERVER_URL!)
}

export const config = {
    matcher: '/'
}