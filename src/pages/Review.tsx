import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Search, Filter, Heart, TrendingUp, Award, Camera } from "lucide-react";
import PhotoUpload from "@/components/PhotoUpload";

const Review = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Reviews" },
    { id: "skincare", name: "Skincare" },
    { id: "makeup", name: "Makeup" },
    { id: "tools", name: "Beauty Tools" },
    { id: "trending", name: "Trending" }
  ];

  const reviews = [
    {
      id: 1,
      title: "The Ordinary Niacinamide 10% + Zinc 1%",
      category: "skincare",
      rating: 4.5,
      price: "$7.90",
      image: "/api/placeholder/300/300",
      excerpt: "A budget-friendly serum that actually works for oil control and pore refinement...",
      pros: ["Affordable", "Effective for oily skin", "Minimal ingredients"],
      cons: ["Can pill under makeup", "Strong for sensitive skin"],
      featured: true,
      trending: false
    },
    {
      id: 2,
      title: "Rare Beauty Soft Pinch Liquid Blush",
      category: "makeup",
      rating: 5.0,
      price: "$23.00",
      image: "/api/placeholder/300/300",
      excerpt: "The perfect liquid blush that gives the most natural flush and lasts all day...",
      pros: ["Long-lasting", "Natural finish", "Buildable"],
      cons: ["Expensive", "Hard to blend if you use too much"],
      featured: false,
      trending: true
    },
    {
      id: 3,
      title: "CeraVe Hydrating Facial Cleanser",
      category: "skincare",
      rating: 4.8,
      price: "$16.99",
      image: "/api/placeholder/300/300",
      excerpt: "A gentle, hydrating cleanser that doesn't strip your skin barrier...",
      pros: ["Gentle", "Hydrating", "Good for all skin types"],
      cons: ["Doesn't remove heavy makeup well"],
      featured: false,
      trending: false
    },
    {
      id: 4,
      title: "Beauty Blender Original Makeup Sponge",
      category: "tools",
      rating: 4.3,
      price: "$20.00",
      image: "/api/placeholder/300/300",
      excerpt: "The iconic makeup sponge that changed the beauty game forever...",
      pros: ["Great for blending", "Versatile", "Damp application"],
      cons: ["Expensive for a sponge", "Needs frequent replacement"],
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
      category: "makeup",
      rating: 4.7,
      price: "$21.00",
      image: "/api/placeholder/300/300",
      excerpt: "A universally flattering gloss that adds the perfect amount of shine...",
      pros: ["Universal shade", "Non-sticky", "Beautiful packaging"],
      cons: ["Pricey", "Not long-lasting"],
      featured: true,
      trending: true
    },
    {
      id: 6,
      title: "Paula's Choice 2% BHA Liquid Exfoliant",
      category: "skincare",
      rating: 4.6,
      price: "$32.00",
      image: "/api/placeholder/300/300",
      excerpt: "A gentle yet effective chemical exfoliant for clearer, smoother skin...",
      pros: ["Effective for blackheads", "Gentle formula", "Proven ingredients"],
      cons: ["Expensive", "Takes time to see results"],
      featured: false,
      trending: true
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || review.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-2">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-coral/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Honest Beauty Reviews
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real experiences with skincare and makeup products. No sponsorships, just honest opinions to help you make informed choices.
            </p>
            
            {/* Search and Filter */}
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

      {/* Categories */}
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

      {/* Featured Reviews */}
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
            {filteredReviews.filter(review => review.featured).map((review) => (
              <Card key={review.id} className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
                <div className="relative">
                  <PhotoUpload 
                    className="h-48"
                    placeholder="Add product image"
                    defaultIcon={<Camera className="h-8 w-8 text-primary" />}
                  />
                  {review.trending && (
                    <Badge className="absolute top-2 right-2 bg-coral text-coral-foreground">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
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
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-green-600">Pros: </span>
                      <span className="text-xs text-muted-foreground">{review.pros.join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-red-500">Cons: </span>
                      <span className="text-xs text-muted-foreground">{review.cons.join(", ")}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    Read Full Review
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <PhotoUpload 
                    className="h-40"
                    placeholder="Add product image"
                    defaultIcon={<Camera className="h-6 w-6 text-primary" />}
                  />
                  {review.trending && (
                    <Badge className="absolute top-2 right-2 bg-coral text-coral-foreground text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Hot
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
                  <Button variant="outline" className="w-full text-sm">
                    Read Review
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-coral/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Never Miss a Review
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get notified when I post new reviews and beauty discoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-xl"
            />
            <Button className="h-12 px-8 bg-primary hover:bg-primary/90 rounded-xl">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;