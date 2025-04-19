import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Rules from "@/pages/Rules";
import HowToJoin from "@/pages/HowToJoin";
import News from "@/pages/News";
import Suggestions from "@/pages/Suggestions";
import StaffGuide from "@/pages/StaffGuide";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/rules" component={Rules} />
          <Route path="/how-to-join" component={HowToJoin} />
          <Route path="/news" component={News} />
          <Route path="/staff-guide" component={StaffGuide} />
          <Route path="/suggestions" component={Suggestions} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;