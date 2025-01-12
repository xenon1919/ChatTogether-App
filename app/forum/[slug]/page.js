import ChatForum from "@/app/components/ChatForum";
import { Chat, useCreateChatClient } from "stream-chat-react";

export default async function Page({ params }) {
  const slug = (await params).slug;
  return <ChatForum></ChatForum>;
}
