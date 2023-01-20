import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors)
app.register(appRoutes)

app.get('/', (req, res) => {
    
})

app.listen({
    port: 3333,
}).then(() => {
    console.log("App is running!");
})