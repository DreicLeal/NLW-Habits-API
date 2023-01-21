import Fastify from "fastify";

const app = Fastify()

app.get("/", () => {
return "oi"
})

app.listen({
    port: 3333,
})