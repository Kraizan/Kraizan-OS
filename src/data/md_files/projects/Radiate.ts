export default `
# Radiate

Radiate is a dynamic, all-in-one live streaming platform designed to enhance the streaming experience for both creators and viewers. With a focus on user engagement and ease of use, Radiate provides a seamless interface and robust features that empower streamers to connect with their audience in real-time. Below is a detailed overview of the platform's key features alongside its technological stack.

## GitHub Repository

Explore the Radiate project and its codebase on GitHub: [Radiate GitHub Repository](https://github.com/kraizan/radiate)

---

## Key Features

- **Seamless Streaming Integration**: Start streaming effortlessly by connecting your OBS Studio (Open Broadcaster Software) to our web application. Radiate supports easy setup, allowing streamers to go live with just a few clicks.

- **Live Viewers Count**: Track your audience in real-time with an accurate live viewers count. This feature helps streamers gauge their reach and engagement during broadcasts.

- **Real-Time Chat with LiveKit**: Engage with your audience instantly through a real-time chat feature powered by LiveKit. Streamers can interact with viewers, answer questions, and foster a community atmosphere while streaming.

- **Follow Your Favorite Streamers**: Users can follow their favorite streamers, receiving notifications about their streams and updates. This feature helps enhance viewer loyalty and keeps fans connected.

- **User Management**: With Clerk integration, Radiate offers comprehensive user management capabilities. This includes user authentication, profile management, and account security features, ensuring a safe and user-friendly experience.

- **Moderation Tools**: Streamers can maintain a positive chat environment by blocking users who engage in offensive behavior. This moderation feature helps keep discussions respectful and enjoyable for all viewers.

- **Chat Customization Options**: Enhance viewer interaction with customizable chat settings, including slow chat mode and followers-only chat. Streamers can enable or disable chat based on their preferences to manage audience engagement effectively.

- **Search Functionality**: Easily find content and streamers with the implemented search functionality. Viewers can discover new streams, browse by categories, and connect with other users quickly.

---

## Technology Stack

Radiate is built using a modern technology stack that ensures performance, scalability, and ease of development:

- **Next.js**: A React framework that enables fast and efficient server-rendered web applications, providing excellent performance and SEO capabilities.
- **Shadcn-UI**: A component library that offers beautifully designed UI components for rapid development and a consistent user experience.
- **Prisma**: An ORM (Object-Relational Mapping) tool that simplifies database access and management while providing type safety and auto-completion.
- **CockroachDB**: A distributed SQL database designed for resilience and scalability, ensuring data integrity and availability across regions.
- **LiveKit**: A real-time communications platform that powers the chat feature, enabling low-latency communication between streamers and viewers.
- **Zustand**: A state management library for React, providing a simple and efficient way to manage application state.
`