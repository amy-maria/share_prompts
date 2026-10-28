import GoogleProvider from 'next-auth/providers/google';
import User from '@models/user';
import { connectToDB } from '@utils/database';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: { prompt: 'consent', access_type: 'offline', response_type: 'code' },
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        await connectToDB();                       // new: make sure we're connected
        const sessionUser = await User.findOne({ email: session.user.email });
        if (sessionUser) session.user.id = sessionUser._id.toString();
      } catch (error) {
        console.error('Error handling session:', error);
      }
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile.email });
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
};
