import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Survival",
    description: "Build, explore, and survive in our vast world",
    image: "https://i.imgur.com/tqGG28m.png"
  }
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to LaggyWorld
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our Minecraft community where lag is a feature, not a bug! Experience unique gameplay, friendly community, and endless possibilities.
        </p>
      </section>

      <section className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card>
            <img
              src={features[0].image}
              alt={features[0].title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">{features[0].title}</h3>
              <p className="text-muted-foreground">{features[0].description}</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}