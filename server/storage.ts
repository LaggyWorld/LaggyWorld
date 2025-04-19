import { type ServerStatus, type InsertServerStatus, type News, type InsertNews } from "@shared/schema";
import * as mcutil from 'minecraft-server-util';

export interface IStorage {
  getServerStatus(): Promise<ServerStatus>;
  updateServerStatus(status: InsertServerStatus): Promise<ServerStatus>;
  getNews(): Promise<News[]>;
  createNews(news: InsertNews): Promise<News>;
}

export class MemStorage implements IStorage {
  private serverStatus: ServerStatus;
  private news: Map<number, News>;
  private currentNewsId: number;

  constructor() {
    // Initialize with server offline status
    this.serverStatus = {
      id: 1,
      onlinePlayers: 0,
      maxPlayers: 100,
      isOnline: false,
      lastUpdated: new Date()
    };
    this.news = new Map();
    this.currentNewsId = 1;

    // Add some initial news
    const initialNews: InsertNews[] = [
      {
        title: "Server Launch!",
        content: "Welcome to LaggyWorld - where fun meets lag!",
        date: new Date()
      }
    ];

    initialNews.forEach(news => this.createNews(news));

    // Start periodic server status checks
    this.startServerStatusChecks();
  }

  private async updateServerStatusFromPing() {
    try {
      const result = await mcutil.status('97.157.68.129');
      this.serverStatus = {
        ...this.serverStatus,
        onlinePlayers: result.players.online,
        maxPlayers: result.players.max,
        isOnline: true,
        lastUpdated: new Date()
      };
    } catch (error) {
      this.serverStatus = {
        ...this.serverStatus,
        onlinePlayers: 0,
        isOnline: false,
        lastUpdated: new Date()
      };
    }
  }

  private startServerStatusChecks() {
    // Initial check
    this.updateServerStatusFromPing();

    // Check every 30 seconds
    setInterval(() => {
      this.updateServerStatusFromPing();
    }, 30000);
  }

  async getServerStatus(): Promise<ServerStatus> {
    return this.serverStatus;
  }

  async updateServerStatus(status: InsertServerStatus): Promise<ServerStatus> {
    this.serverStatus = { ...status, id: 1 };
    return this.serverStatus;
  }

  async getNews(): Promise<News[]> {
    return Array.from(this.news.values()).sort((a, b) =>
      b.date.getTime() - a.date.getTime()
    );
  }

  async createNews(news: InsertNews): Promise<News> {
    const id = this.currentNewsId++;
    const newNews = { ...news, id };
    this.news.set(id, newNews);
    return newNews;
  }
}

export const storage = new MemStorage();