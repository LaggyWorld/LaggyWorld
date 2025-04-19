import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const rules = [
  {
    title: "1. No Griefing",
    description: "Respect other players' builds and property."
  },
  {
    title: "2. No Hacks or Cheats",
    description: "Use of unauthorized modifications will result in a ban."
  },
  {
    title: "3. Be Respectful",
    description: "Treat all players with respect. No harassment or bullying."
  },
  {
    title: "4. No Spamming",
    description: "Keep chat clean and avoid repetitive messages."
  }
];

export default function Rules() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Server Rules</h1>
        <p className="text-muted-foreground">
          Follow these rules to ensure a fun and fair experience for everyone.
        </p>
      </motion.div>

      <div className="space-y-4">
        {rules.map((rule, i) => (
          <motion.div
            key={rule.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
                <p className="text-muted-foreground">{rule.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
