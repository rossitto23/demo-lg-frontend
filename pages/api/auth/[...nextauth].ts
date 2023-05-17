import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export const authOptions: NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "text", placeholder: "john.doe@example.com" },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials) => {

                const user = { id: uuidv4(), email: credentials?.email, password: credentials?.password};
                if (user) {
                    try {
                        const response = await axios.post('http://localhost:5000/user', user);

                        console.log(response.data);
                        return Promise.resolve(user);
                    }catch(error){
                        console.error(error);
                        return Promise.resolve(null);
                    }
                } else {
                    return Promise.resolve(null);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

    ],
};

export default NextAuth(authOptions)
