
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Suggestions() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace this URL with your Discord webhook URL
    const webhookUrl = "https://discord.com/api/webhooks/1338694523588706388/fPtAJgbly67SXMlRVKXfTEdBfRM9uIKqTxKSXbzF0hJsdAL6xMmHENPUfu0Hu7AVJRON";
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [{
            title: subject,
            description: message,
            color: 5814783, // Blue color
          }],
        }),
      });
      
      // Clear form after successful submission
      setSubject("");
      setMessage("");
      alert("Suggestion sent successfully!");
    } catch (error) {
      console.error("Error sending suggestion:", error);
      alert("Failed to send suggestion. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Suggestions</h1>
        <p className="text-muted-foreground">
          Have ideas to improve the server? Share your suggestions with us!
        </p>
      </motion.div>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's your suggestion about?"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Suggestion</label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your suggestion in detail..."
                className="min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full">Send Suggestion</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
