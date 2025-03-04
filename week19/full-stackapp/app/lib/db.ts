// singleton prisma client

import { PrismaClient } from "@prisma/client";


// Check for Existing Global Instance: The code checks if a Prisma Client instance already exists in the globalThis object. 
// If it does, it uses the existing instance; otherwise, it creates a new instance using the prismaClientSingleton function.
//@ts-ignore
const prisma = globalThis.prisma ?? prismaClientSingleton();
// Set Global Instance in Development: To ensure that the Prisma Client instance is reused during hot-reloading in development mode,
//  the code sets the Prisma Client instance to the globalThis object if the NODE_ENV environment variable is not set to "production".
//@ts-ignore
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
export default prisma;
// if hm singleton prisma client use nii krege then bhut sare connection ho jaege datdabase se so to avoid this we use singleton prisma client
// The Singleton Design Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to it. 
// This pattern is particularly useful when managing global states, such as database connections, WebSocket clients, or configuration managers.

// When it comes to Prisma Client, using the Singleton pattern can help you avoid creating multiple instances of the Prisma Client,
//  which can lead to issues like "too many clients already" errors. Here's a simple example of how you can implement a Singleton Prisma Client in TypeScript:
