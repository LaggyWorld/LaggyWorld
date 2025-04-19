import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Launch Minecraft",
    description: "Make sure you have Minecraft Java Edition installed"
  },
  {
    title: "2. Go to Multiplayer",
    description: "Click 'Multiplayer' from the main menu"
  },
  {
    title: "3. Add Server",
    description: "Click 'Add Server' and enter our IP: 97.157.68.129"
  },
  {
    title: "4. Join & Play",
    description: "Click 'Join Server' and start playing!"
  }
];

export default function HowToJoin() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">How to Join</h1>
        <p className="text-muted-foreground">
          Follow these simple steps to start playing on LaggyWorld
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}