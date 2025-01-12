"use client";
import { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { useUser } from "@clerk/nextjs";
import "stream-chat-react/dist/css/v2/index.css";

const apiKey = "y7hr723x8cau";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yclRKc1lvRGJQazdGQU91czU5QmlBUmlFeHkifQ.fQzgWzvl97nNGOH85PHxxDMewtf3XFsJJyAhlDvksq4";

const ChatForum = ({ slug }) => {
  const { isLoaded, user: clerkUser } = useUser();
  const [userState, setUserState] = useState(null);
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    if (isLoaded && clerkUser) {
      const userObj = {
        id: clerkUser.id,
        name: clerkUser.firstName,
        image: `https://getstream.io/random_png/?name=${clerkUser.firstName}`,
      };
      setUserState(userObj);

      const chatClient = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: userObj,
      });
      setClient(chatClient);
    }
  }, [isLoaded, clerkUser]);

  useEffect(() => {
    if (client) {
      const channel = client.channel("messaging", slug, {
        image: "https://getstream.io/random_png/?name=react",
        name: `${slug
          .replace(/-/g, " ")
          .replace(/\b[a-z]/g, (char) => char.toUpperCase())} Discussion`,
        members: [clerkUser.id],
      });
      setChannel(channel);
    }
  }, [client, slug, clerkUser]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
