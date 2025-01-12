import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
const api_key = "USE YOUR API KEY";
const api_secret = "USE YOUR SECRET API KEY";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const user = await request.json();
  const token = serverClient.createToken(user.data.id);
  console.log("A NEW USER HAS BEEN CREATED WITH TOKEN: ", token);
  const client = await clerkClient();

  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: { token },
  });
  //Give access to the user to all the channels
  const slugs = [
    "gaming-chat-new",
    "music-chat-new",
    "movie-chat-new",
    "book-chat-new",
    "travel-chat-new",
    "food-chat-new",
    "tech-chat-new",
  ];

  for (const slug of slugs) {
    const channel = serverClient.channel("messaging", slug, {
      image: `https://getstream.io/random_png/?name=${slug}`,
      name: capitalize(slug) + "Discussions",
      members: [user.data.id],
    });
    await channel.create();
  }
  return Response.json({ message: "Hello World" });
}
