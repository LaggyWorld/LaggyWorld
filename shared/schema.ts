import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const serverStatus = pgTable("server_status", {
  id: serial("id").primaryKey(),
  onlinePlayers: integer("online_players").notNull(),
  maxPlayers: integer("max_players").notNull(),
  isOnline: boolean("is_online").notNull(),
  lastUpdated: timestamp("last_updated").notNull()
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").notNull()
});

// New schema for player locations
export const playerLocations = {
  username: z.string(),
  x: z.number(),
  y: z.number(),
  z: z.number(),
  dimension: z.enum(["overworld", "nether", "end"]),
};

export const playerLocationType = z.object(playerLocations);

export const insertServerStatusSchema = createInsertSchema(serverStatus).omit({
  id: true
});

export const insertNewsSchema = createInsertSchema(news).omit({
  id: true
});

export type InsertServerStatus = z.infer<typeof insertServerStatusSchema>;
export type ServerStatus = typeof serverStatus.$inferSelect;
export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;
export type PlayerLocation = z.infer<typeof playerLocationType>;