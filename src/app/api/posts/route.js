import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET all posts
export async function GET() {
  const posts = await prisma.post.findMany();
  return Response.json(posts);
}
