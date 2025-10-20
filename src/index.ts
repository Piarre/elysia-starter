import { Elysia } from "elysia";
import debugRoutes from "./routes/debug";

const PORT = parseInt(process.env.PORT || "2025", 10);

const app = new Elysia()
  .use(debugRoutes)
  .listen(PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

process.on("SIGINT", () => {
  console.log("\n👋 Shutting down gracefully...");
  app.stop();
  process.exit(0);
});
