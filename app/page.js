import Image from "next/image";
import Head from "next/head";
import {
  FaRocket,
  FaUsers,
  FaFileAlt,
  FaLock,
  FaGamepad,
  FaMusic,
  FaFilm,
  FaBook,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";

const HomePage = () => {
  const features = [
    {
      icon: <FaRocket className="text-blue-500 text-3xl mb-4" />,
      title: "Real-time Messaging",
      description:
        "Experience instant communication with lightning-fast message delivery.",
    },
    {
      icon: <FaUsers className="text-green-500 text-3xl mb-4" />,
      title: "Group Chats",
      description: "Create groups for teams, projects, or communities.",
    },
    {
      icon: <FaFileAlt className="text-yellow-500 text-3xl mb-4" />,
      title: "File Sharing",
      description: "Easily share files of any type within your chats.",
    },
    {
      icon: <FaLock className="text-red-500 text-3xl mb-4" />,
      title: "End-to-End Encryption",
      description:
        "Your messages are secured with end-to-end encryption for maximum privacy.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      features: ["Limited messages", "Basic support", "Up to 5 users"],
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "Unlimited messages",
        "Priority support",
        "Up to 50 users",
        "File Sharing",
      ],
    },
    {
      name: "Enterprise",
      price: "$49.99/month",
      features: [
        "Unlimited messages",
        "24/7 Premium support",
        "Unlimited users",
        "Advanced analytics",
        "Custom branding",
      ],
    },
  ];
  const topics = [
    {
      text: "Gaming",
      description: "Discuss the latest games, strategies, and esports events.",
      icon: <FaGamepad className="w-8 h-8 text-blue-500 mx-auto mb-2" />,
    },
    {
      text: "Music",
      description: "Share your favorite songs, artists, and music news.",
      icon: <FaMusic className="w-8 h-8 text-green-500 mx-auto mb-2" />,
    },
    {
      text: "Movies & TV",
      description:
        "Talk about the latest movies, TV shows, and streaming trends.",
      icon: <FaFilm className="w-8 h-8 text-yellow-500 mx-auto mb-2" />,
    },
    {
      text: "Books",
      description: "Discuss your favorite books, authors, and literary genres.",
      icon: <FaBook className="w-8 h-8 text-red-500 mx-auto mb-2" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Home - ChatTogether</title>
        <meta
          name="description"
          content="ChatTogether is a chat application that allows you to chat with your friends and family."
        />
      </Head>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen flex flex-col">
        <main className="flex-grow py-20 px-6 md:px-24 lg:px-32">
          {/* Hero Section */}
          <section className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
                  Connect. Chat. Collaborate.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">
                  ChatTogether: The ultimate platform for seamless communication
                  and teamwork.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                    Get Started
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                {/* <Image
                  src="/chat/app/chat-illustration.svg"
                  alt="Chat Illustration"
                  width={600}
                  height={400}
                  className="mx-auto"
                  priority
                /> */}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-white py-12 px-6 md:px-24 lg:px-32">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg p-6 hover:scale-105 transition duration-300 flex flex-col items-center"
                  >
                    {feature.icon}
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Topics Section */}
          <section className="bg-white py-12 px-6 md:px-24 lg:px-32">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Popular Topics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {topics.map((topic) => (
                  <div
                    key={topic.text}
                    className="bg-gray-100 rounded-lg p-6 hover:scale-105 transition duration-300 flex flex-col items-center"
                  >
                    {/* {topic.icon} */}
                    {/* <Image
                      src={topic.img}
                      alt={topic.text}
                      width={100}
                      height={100}
                      className="mx-auto"
                    /> */}
                    <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                      {topic.text}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <PricingSection pricingPlans={pricingPlans} />
        </main>
        <footer className="bg-gray-800 text-white py-6 px-6 md:px-24 lg:px-32 text-center">
          <p>
            &copy; {new Date().getFullYear()} ChatTogether. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
