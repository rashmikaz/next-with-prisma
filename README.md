# 📘 Prisma with Next.js

Foobar is a Python library for dealing with word pluralization.

## 🚀 What is Prisma?

Prisma is an open-source ORM (Object-Relational Mapping) tool that makes working with databases in JavaScript/TypeScript applications easier.

Instead of writing raw SQL queries, you define your database schema using the Prisma Schema Language (PSL), and Prisma generates a type-safe client for you to interact with your database.

✅ Benefits of Prisma:

Type-safe queries → catch errors at compile time

Auto-completion with full IntelliSense in VS Code

Supports multiple databases (PostgreSQL, MySQL, SQLite, MongoDB, SQL Server, CockroachDB)

Easy migrations using prisma migrate

Great for Next.js (API routes, server actions, or middleware)




## 🛠️ Installation & Setup

```python

npm install @prisma/client prisma

npx prisma init

```
This will create a prisma/schema.prisma file and a .env file.


## ⚙️ Configure Database

In your .env file, set the database connection string:
```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mydb?schema=public"
```
Change according to your DB (Postgres, MySQL, SQLite, etc.).
##  📄 Define Schema

```bash
datasource db {
  provider = "sqlite" // use "postgresql" or "mysql" if needed
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  createdAt DateTime @default(now())
}

```
## 📦 Run Migration
After defining your database schema in prisma/schema.prisma and creating your MySQL database, you need to apply the schema to the database using Prisma Migrate. This will create the necessary tables and relations automatically.


```bash
npx prisma migrate dev --name init
```


