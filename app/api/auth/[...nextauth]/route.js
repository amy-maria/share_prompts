import NextAuth from 'next-auth';
import { authOptions } from '@utils/authOptions';

{
  /* //console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}); */
}
//OAuth authenticaltion providers array
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
  