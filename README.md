This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





import React from 'react';

const MenuDetails = () => {
  return (
    <div>
      <div className="relative w-full h-[600px] mt-[-310px] bg-[#000000]">
        {/* Background image with black overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-80"
          style={{
            backgroundImage: "url('/images/menudetailbg.png')",
            backgroundSize: "cover", // Full width, maintain aspect ratio
          }}
        ></div>

        {/* Rectangular border - Responsive and Centered */}
        <div className="relative z-10 text-white flex justify-center items-center h-full">
          <div className="border border-white px-4 py-2 flex justify-center items-center w-[80%] max-w-[1100px] h-[450px] max-h-[1000px] mt-10">
            <h1 className="text-4xl font-bold text-center">
              Your Hero Section Text
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;