import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Search, Filter, Heart, TrendingUp, Award } from "lucide-react";

const Review = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedReviewId, setExpandedReviewId] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Reviews" },
    { id: "skincare", name: "Skincare" },
    { id: "makeup", name: "Makeup" },
    { id: "tools", name: "Beauty Tools" },
    { id: "trending", name: "Trending" },
  ];

  const reviews = [
    {
      id: 1,
      title: "Hada Labo Gokujyun Moisturizer",
      category: "skincare",
      rating: 4.5,
      price: "Rp.56.000,00",
      image: "/id1.png",
      excerpt:
        "A lightweight moisturizer that deeply hydrates the skin and restores moisture balance without feeling greasy...",
      pros: ["Fragrance-free", "Good for sensitive skin", "Deep hydration", "Lightweight texture"],
      cons: ["Might not be hydrating enough for very dry skin", "Not ideal under heavy makeup"],
      featured: true,
      trending: false,
    },
    {
      id: 2,
      title: "Wonder Crush Serum Liquid Blush - Spring Fling",
      category: "makeup",
      rating: 5.0,
      price: "Rp.99.000,00",
      image: "/id2.png",
      excerpt:
        "A dewy liquid blush that blends seamlessly into the skin, giving a natural flush with a radiant glow...",
      pros: ["Buildable color", "Blends easily", "Hydrating serum formula", "Fresh dewy finish"],
      cons: ["May fade faster on oily skin", "Not transfer-proof"],
      featured: false,
      trending: true,
    },
    {
      id: 3,
      title: "Hada Labo Gokujyun Face Wash",
      category: "skincare",
      rating: 4.8,
      price: "Rp.43.000,00",
      image: "/id3.png",
      excerpt:
        "A gentle foaming cleanser that effectively removes dirt and oil without stripping the skin's natural moisture...",
      pros: ["Gentle on skin", "Fragrance-free", "Doesn't dry out skin", "Suitable for sensitive skin"],
      cons: ["Less effective at removing heavy makeup"],
      featured: false,
      trending: false,
    },
    {
      id: 4,
      title: "Aeris Beaute Cloud Conceal Puff",
      category: "tools",
      rating: 4.3,
      price: "Rp.50.000,00",
      image: "/id4.png",
      excerpt:
        "A mini precision puff designed to seamlessly blend concealer into hard-to-reach areas with a smooth, flawless finish...",
      pros: [
        "Perfect for under eyes and corners",
        "Soft and bouncy texture",
        "Great control for detail areas",
        "Doesn’t absorb too much product",
      ],
      cons: ["Small size may not be ideal for full-face use", "Needs gentle handling to maintain shape"],
      featured: false,
      trending: false,
    },
    {
      id: 5,
      title: "OMG Matte Lipcream",
      category: "makeup",
      rating: 4.7,
      price: "Rp.22.000,00",
      image: "/id5.png",
      excerpt:
        "An affordable matte lip cream with vibrant pigmentation and a lightweight feel for everyday wear...",
      pros: ["Highly pigmented", "Lightweight texture", "Wide shade range", "Budget-friendly"],
      cons: ["Can be drying over time", "Not long-lasting after eating or drinking"],
      featured: true,
      trending: true,
    },
    {
      id: 6,
      title: "Elformula Peeling Serum",
      category: "skincare",
      rating: 4.6,
      price: "Rp.125.000,00",
      image: "/id6.png",
      excerpt:
        "An effective exfoliating serum that promotes smoother, brighter skin by gently removing dead skin cells...",
      pros: ["Visible brightening effect", "Smooths skin texture", "Gentle exfoliation", "Suitable for beginners"],
      cons: ["May cause slight tingling on sensitive skin", "Requires consistent sunscreen use"],
      featured: false,
      trending: true,
    },
  ];

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || review.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
        />
      ))}
      <span className="text-sm text-muted-foreground ml-2">{rating}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-coral/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Unfiltered Beauty Reviews
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
            Skincare and makeup reviews based on real results, not paid promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-border bg-card"
                />
              </div>
              <Button variant="outline" className="h-12 px-6 rounded-xl border-border">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Reviews</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              <Award className="h-3 w-3 mr-1" />
              Editor's Choice
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredReviews
              .filter((review) => review.featured)
              .map((review) => (
                <Card key={review.id} className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
                  <div className="relative">
                    <img src={review.image} alt={review.title} className="h-48 w-full object-cover" />
                    {review.trending && (
                      <Badge className="absolute top-2 right-2 bg-coral text-coral-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" /> Trending
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{review.title}</CardTitle>
                        <div className="flex items-center space-x-4 mb-2">
                          {renderStars(review.rating)}
                          <Badge variant="outline" className="text-xs">
                            {review.price}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{review.excerpt}</p>
                    {expandedReviewId === review.id && (
                      <div className="space-y-2">
                        <p><strong>Pros:</strong> {review.pros.join(", ")}</p>
                        <p><strong>Cons:</strong> {review.cons.join(", ")}</p>
                      </div>
                    )}
                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => setExpandedReviewId(prev => (prev === review.id ? null : review.id))}
                    >
                      {expandedReviewId === review.id ? "Hide Review" : "Read Full Review"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={review.image} alt={review.title} className="h-40 w-full object-cover" />
                  {review.trending && (
                    <Badge className="absolute top-2 right-2 bg-coral text-coral-foreground text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" /> Hot
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-tight">{review.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    {renderStars(review.rating)}
                    <Badge variant="outline" className="text-xs">
                      {review.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{review.excerpt}</p>
                  {expandedReviewId === review.id && (
                    <div className="space-y-2">
                      <p><strong>Pros:</strong> {review.pros.join(", ")}</p>
                      <p><strong>Cons:</strong> {review.cons.join(", ")}</p>
                    </div>
                  )}
                  <Button
                    variant="outline"
                    className="w-full text-sm mt-2"
                    onClick={() => setExpandedReviewId(prev => (prev === review.id ? null : review.id))}
                  >
                    {expandedReviewId === review.id ? "Hide Review" : "Read Review"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
