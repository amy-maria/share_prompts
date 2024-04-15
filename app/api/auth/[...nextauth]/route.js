import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

{
  /* //console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}); */
}
//OAuth authenticaltion providers array
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        // store the user id from MongoDB to session, added try/catch//
        if (session && session.user && session.user.email) {
          const sessionUser = await User.findOne({ email: session.user.email });
          if (sessionUser) {
            session.user.id = sessionUser._id.toString();
            return session;
          }
        }
      } catch (error) {
        console.error('Error handling session:', error);
      }
      return session;
    },

    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/\s/g, '').toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error('Error signing in: ', error);
        return false;
      }
    },
  },
});
{
  /*see Next documentation for providers*/
}
export { handler as GET, handler as POST };

{
  /* connectToDB from database.js Mongoose settings */
}
{
  /* reviewed code */
}
