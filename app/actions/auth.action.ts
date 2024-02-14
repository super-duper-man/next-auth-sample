'use server'
import * as JWT from "jsonwebtoken";
import * as bcrypt from 'bcrypt';
import { cookies } from "next/headers";

export const handleSubmit = async (formData: FormData) => {
    const hash = await bcrypt.hash(String(formData.get('password')), 10);
    const token = JWT.sign({username: String(formData.get('username')), sub: hash}, 'auth_secret')
    console.log(token);
    cookies().set('session', token)
  };