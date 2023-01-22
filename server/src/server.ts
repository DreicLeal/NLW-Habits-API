import Fastify from "fastify";
import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client";

const app = Fastify();

const prisma = new PrismaClient();

app.register(cors)

app.get("/habits", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Estudar",
      },
    },
  });

  return habits;
});

const PORT: number = 3333;
app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server running on port: ${PORT}`);
  });
