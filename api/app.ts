// * Import for OAK for api http

import { Application } from "https://deno.land/x/oak/mod.ts";

// * Import for user .env
import { config } from "https://deno.land/x/dotenv/mod.ts";

// * Import for router

import router  from "./routes/routes.ts";

const HOST = config().HOST; 
const PORT = config().PORT;


const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Deno is running: ${HOST}:${PORT}`)
await app.listen(`${HOST}:${PORT}`)