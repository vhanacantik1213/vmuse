import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, User, MessageCircle } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "Skincare Myths Busted: What Actually Works?",
    time: "5 min read",
    comments: 24,
    excerpt:
      "Lemon juice for brightening? Toothpaste for acne? Let's separate myth from fact with real skincare science...",
    fullText:
      "Lemon juice might cause irritation due to its acidity and toothpaste contains ingredients not meant for skin. Instead, use products with vitamin C or salicylic acid that are formulated for facial care.",
    featured: true,
    image: "/tips1.jpg"
  },
  {
    id: 2,
    title: "Build a Capsule Makeup Collection for Daily Use",
    time: "6 min read",
    comments: 18,
    excerpt:
      "Simplify your makeup routine with a few versatile products that do it all. Here's how to start...",
    fullText:
      "A capsule makeup collection focuses on multi-use products like tinted moisturizer, cream blush, and neutral eyeshadow that can be worn every day with ease and less clutter.",
    featured: true,
    image: "/tips2.jpg"
  },
  {
    id: 3,
    title: "Night Routine Rituals Inspired by Korean Beauty Habits",
    time: "8 min read",
    comments: 31,
    excerpt:
      "Discover soothing night skincare steps based on time-tested Korean rituals for glowing skin. You'll love the transformation and how it helps you wind down every evening...",
    fullText:
      "Korean beauty night routines focus on double cleansing, hydrating toners, and layering essence, serum, and night cream to deeply nourish skin overnight.",
    featured: false,
    image: "/tips3.jpg"
  },
  {
    id: 4,
    title: "Makeup Storage Hacks: Aesthetic + Functional",
    time: "4 min read",
    comments: 15,
    excerpt:
      "Keep your beauty space tidy and cute with these clever storage ideas using simple items...",
    fullText:
      "Use clear acrylic drawers, magnetic boards, and repurposed candle jars to keep makeup organized and visible while still looking stylish.",
    featured: false,
    image: "/tips4.jpg"
  },
  {
    id: 5,
    title: "Skincare Ingredients You Should Never Mix",
    time: "7 min read",
    comments: 42,
    excerpt:
      "Mixing the wrong ingredients can irritate your skin. Here's what you should avoid and why...",
    fullText:
      "Avoid mixing retinol with AHAs/BHAs, or vitamin C with niacinamide, as these combinations may reduce effectiveness or cause irritation.",
    featured: false,
    image: "/tips5.jpg"
  },
  {
    id: 6,
    title: "How to Read a Skincare Label Like a Pro",
    time: "9 min read",
    comments: 28,
    excerpt:
      "Decode confusing ingredients and spot the good, the bad, and the comedogenic in your skincare products. Understanding labels can save your skin and your wallet...",
    fullText:
      "Look for active ingredients near the top of the list, avoid alcohols and fragrance if you have sensitive skin, and check for expiration or PAO symbols.",
    featured: false,
    image: "/tips6.jpg"
  }
];

export default function TipsTalk() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Beauty Tips & Talk
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip) => (
              <Card
                key={tip.id}
                className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <img
                  src={tip.image}
                  alt={`Image for article: ${tip.title}`}
                  className="h-48 w-full object-cover"
                />

                <div className="flex flex-col flex-1 p-6 justify-between">
                  <div>
                    {tip.featured && (
                      <Badge className="text-pink-500 bg-pink-100 mb-2 flex items-center w-fit">
                        <BookOpen className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    )}

                    <CardTitle className="text-lg font-bold mb-2">
                      {tip.title}
                    </CardTitle>

                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      {tip.time}
                      <User className="w-4 h-4 mx-3" />
                      vmuse
                      <MessageCircle className="w-4 h-4 mx-3" />
                      {tip.comments}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {tip.excerpt}
                    </p>

                    {expandedId === tip.id && (
                      <p className="text-sm text-foreground mb-4 whitespace-pre-line">
                        {tip.fullText}
                      </p>
                    )}
                  </div>

                  <Button
                    onClick={() => toggleExpand(tip.id)}
                    className="w-full mt-auto bg-pink-500 hover:bg-pink-600 text-white rounded-lg"
                  >
                    {expandedId === tip.id ? "Hide Article" : "Read Full Article"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
