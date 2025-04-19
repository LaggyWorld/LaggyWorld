import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import ServerStatusBadge from "./ServerStatus";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/rules", label: "Rules" },
    { href: "/how-to-join", label: "How to Join" },
    { href: "/news", label: "News" },
    { href: "/staff-guide", label: "Staff Guide" },
    { href: "/suggestions", label: "Suggestions" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">LaggyWorld</span>
          </Link>
          <NavigationMenu>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    location === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </NavigationMenu>
        </div>
        <div className="ml-auto">
          <ServerStatusBadge />
        </div>
      </div>
    </header>
  );
}