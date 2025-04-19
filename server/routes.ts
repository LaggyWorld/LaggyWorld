import type { Express } from "express";
import { Router } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express) {
  const router = Router();

  router.get("/api/status", async (_req, res) => {
    const status = await storage.getServerStatus();
    res.json(status);
  });

  router.get("/api/news", async (_req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  // Mount the router on the app
  app.use(router);

  const httpServer = createServer(app);
  return httpServer;
}