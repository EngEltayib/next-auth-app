import GoogleProvidor from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
export const authOptions: AuthOptions = {
  providers: [
    GoogleProvidor({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // for one day,
  },
};
