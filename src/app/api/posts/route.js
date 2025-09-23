import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET all posts
export async function GET() {
  const posts = await prisma.post.findMany();
  return Response.json(posts);
}

// POST create new post
export async function POST(req) {
  const body = await req.json();
  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return Response.json(newPost);
}
