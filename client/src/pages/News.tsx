import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { format } from "date-fns";
import type { News } from "@shared/schema";

export default function NewsPage() {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ["/api/news"],
  });

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
        <p className="text-muted-foreground">
          Stay up to date with the latest happenings on LaggyWorld
        </p>
      </motion.div>

      <div className="space-y-6">
        {isLoading ? (
          Array(3).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-40" />
          ))
        ) : (
          news?.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <time className="text-sm text-muted-foreground">
                      {format(new Date(item.date), 'MMM d, yyyy')}
                    </time>
                  </div>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
