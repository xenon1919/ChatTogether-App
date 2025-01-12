import React from "react";
import Link from "next/link";
import {
  FaGamepad,
  FaMusic,
  FaFilm,
  FaBook,
  FaPlane,
  FaUtensils,
  FaLaptop,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const topics = [
  {
    text: "Gaming",
    icon: <FaGamepad className="text-blue-500 w-10 h-10 mb-4" />, // Added icon
    description: "Discuss the latest games, strategies, and esports events.",
    slug: "gaming-chat-new",
  },
  {
    text: "Music",
    icon: <FaMusic className="text-green-500 w-10 h-10 mb-4" />, // Added icon
    description: "Share your favorite songs, artists, and music news.",
    slug: "music-chat-new",
  },
  {
    text: "Movies & TV",
    icon: <FaFilm className="text-yellow-500 w-10 h-10 mb-4" />, // Added icon
    description:
      "Talk about the latest movies, TV shows, and streaming trends.",
    slug: "movies-chat-new",
  },
  {
    text: "Books",
    icon: <FaBook className="text-red-500 w-10 h-10 mb-4" />, // Added icon
    description: "Discuss your favorite books, authors, and literary genres.",
    slug: "books-chat-new",
  },
  {
    text: "Travel",
    icon: <FaPlane className="text-indigo-500 w-10 h-10 mb-4" />, // Added icon
    description: "Share your travel experiences, tips, and dream destinations.",
    slug: "travel-chat-new",
  },
  {
    text: "Food & Cooking",
    icon: <FaUtensils className="text-orange-500 w-10 h-10 mb-4" />, // Added icon
    description: "Share recipes, cooking tips, and food experiences.",
    slug: "food-chat-new",
  },
  {
    text: "Technology",
    icon: <FaLaptop className="text-gray-800 w-10 h-10 mb-4" />, // Added icon
    description: "Discuss the latest tech news, gadgets, and innovations.",
    slug: "technology-chat-new",
  },
];

const Forums = () => {
  return (
    <div className="container mx-auto my-28">
      <h1 className="text-5xl text-center font-bold">Discussion Forums</h1>
      <div className="flex flex-wrap justify-center">
        {topics.map((topic) => (
          <div
            key={topic.text}
            className="shadow-lg p-4 my-4 flex items-center w-1/4 m-4 flex justify-center flex-col items-center py-10"
          >
            {topic.icon} {/* Added icon directly */}
            <h2 className="text-2xl">{topic.text}</h2>
            <p className="text-gray-600 text-center">{topic.description}</p>
            <Link href={`/forum/${topic.slug}`}>
              <Button className="px-4 border border-slate-300 py-2">
                Discuss Now
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
