# Chat Application

This is a chat application built with Next.js, React.js, Clerk for authentication, ShadCN/UI, Tailwind CSS, dynamic routes, GetStream.io, and ngrok.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Keys](#api-keys)
- [Running Locally](#running-locally)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication with Clerk
- Real-time messaging with GetStream.io
- Dynamic Routes
- Responsive UI with ShadCN/UI and Tailwind CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- A Clerk account for authentication
- A GetStream.io account for messaging
- An ngrok account for tunneling


## Usage

### API Keys

Replace the placeholders for API keys in your code with your actual API keys.

- `STREAM_API_KEY`: Your GetStream.io API key
- `STREAM_API_SECRET`: Your GetStream.io API secret
- `CLERK_API_KEY`: Your Clerk API key

### Running Locally

To run the application locally, follow these steps:

1. Start the Next.js development server:
    ```bash
    npm run dev
    ```

2. Start ngrok for tunneling:
    ```bash
    ngrok http 3000
    ```

3. Access your application at the provided ngrok URL.

## Deployment

To deploy the application, follow these steps:

1. Set up your environment variables in your hosting service:
    - `STREAM_API_KEY`
    - `STREAM_API_SECRET`
    - `CLERK_API_KEY`

2. Deploy the application using your preferred hosting service (Vercel, Netlify, etc.).

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
