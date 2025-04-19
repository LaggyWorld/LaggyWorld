import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ServerStatus as ServerStatusType } from "@shared/schema";

export default function ServerStatusBadge() {
  const { data: status, isLoading } = useQuery<ServerStatusType>({
    queryKey: ["/api/status"],
    refetchInterval: 10000, // Refetch every 10 seconds
  });

  if (isLoading) {
    return <Skeleton className="h-6 w-32" />;
  }

  if (!status) {
    return null;
  }

  return (
    <Badge
      variant={status.isOnline ? "default" : "destructive"}
      className="transition-colors"
    >
      {status.isOnline ? (
        <>Online: {status.onlinePlayers}/{status.maxPlayers}</>
      ) : (
        "Offline"
      )}
    </Badge>
  );
}