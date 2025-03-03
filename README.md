# Movie-Short - Film Database Application

## Deployed Link 🚀

[Movie-short](https://movie-short.vercel.app)

## Project Overview

Movie-Short is a comprehensive film database application built with Next.js. The application provides a platform for managing and browsing movies, categories, actors, and billboards. It features both an admin panel for content management and a user-facing interface for browsing the movie collection.

## Key Features

- **Admin Dashboard**: Manage billboards, categories, actors, and movies
- **User Interface**: Browse movies by category, view featured films
- **Authentication**: Secure login using Clerk authentication
- **Responsive Design**: Optimized for various screen sizes
- **Cloud Image Storage**: Integration with Cloudinary for image uploads

## Tech Stack

- **Frontend**: Next.js 13, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MySQL with Prisma ORM
- **Authentication**: Clerk
- **UI Components**: Radix UI, Shadcn UI
- **Image Hosting**: Cloudinary
- **Deployment**: Vercel

## Database Schema

The application uses a relational database with the following main entities:

- **Billboard**: Featured promotional banners
- **Category**: Movie categories (genres, types)
- **Actor**: Film cast information
- **Movie**: Detailed movie information including metadata

## Getting Started 👇

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to automatically optimize and load Inter, a custom Google Font.

## Environment Setup

To run this project locally, you'll need to set up the following environment variables:

- `DATABASE_URL`: Your MySQL database connection string
- Clerk authentication credentials
- Cloudinary configuration

## Project Structure

- `/app`: Next.js app directory structure
- `/(admin)`: Admin panel routes and components
- `/(auth)`: Authentication routes
- `/(root)`: User-facing routes
- `/api`: Backend API routes
- `/components`: Reusable UI components
- `/lib`: Utility functions and shared code
- `/prisma`: Database schema and migrations

## Admin Features

- Create, edit, and delete billboards
- Manage movie categories
- Add and update actor information
- Comprehensive movie management with metadata

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

© 2023 Sampath Kumara. All rights reserved.
