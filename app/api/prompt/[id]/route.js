import Prompt from '@models/prompt';
import { getServerSession } from 'next-auth';
import { authOptions } from '@utils/authOptions';
import { connectToDB } from '@utils/database';


export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const { id } = await params;
    const prompt = await Prompt.findById(id).populate('creator');

    if (!prompt) {
      return new Response('Prompt Not Found', { status: 404 });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.error('Error fetching prompt:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};


export const PATCH = async (request, { params }) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 });
    }
    const { prompt, tag } = await request.json();
    await connectToDB();
    const { id } = await params;

    //Does the post exist?
    // Find the existing prompt by ID
    const existingPrompt = await Prompt.findById(id);
    if (!existingPrompt) {
      return new Response('Prompt not found', { status: 404 });
    }
    //3. Is the editor the person who created the post
    if (existingPrompt.creator.toString() !== session.user.id) {
      return new Response('Forbidden', { status: 403 });
    }

    // Update the prompt with new data
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response('Successfully updated the Prompts', { status: 200 });
  } catch (error) {
    console.error('Error updating prompt:', error);
    return new Response('Error Updating Prompt', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    //1.Who is asking?
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 }); //not signed in and can't delete
    }
    await connectToDB();
    const { id } = await params;

    //2. Does the post exist?
    const existingPrompt = await Prompt.findById(id);
    if (!existingPrompt) {
      return new Response('Prompt not found', { status: 404 });
    }
    //3. Is the editor the person who created the post?
    if (existingPrompt.creator.toString() !== session.user.id) {
      return new Response('Forbidden', { status: 403 });
    }
    //4. Now delete it.
    await existingPrompt.deleteOne();
    return new Response('Prompt deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting prompt:', error);
    return new Response('Error deleting prompt', { status: 500 });
  }
};

