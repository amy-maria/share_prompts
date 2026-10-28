import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';
import { getServerSession } from '@node_modules/next-auth';
import { authOptions } from '@utils/authOptions';

export const POST = async (request) => {
  const { prompt, tag } = await request.json();

  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 }); // not signed in
    }
    await connectToDB();
    const newPrompt = new Prompt({ creator: session.user.id, prompt, tag });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 });
  }
};
