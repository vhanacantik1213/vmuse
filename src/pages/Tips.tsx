import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, User, MessageCircle, Search, BookOpen, Lightbulb, Heart, Sparkles } from "lucide-react";

const Tips = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Tips" },
    { id: "skincare", name: "Skincare" },
    { id: "makeup", name: "Makeup" },
    { id: "routine", name: "Routines" },
    { id: "ingredients", name: "Ingredients" }
  ];

  const tips = [
    {
      id: 1,
      title: "The Perfect Morning Skincare Routine for Busy Days",
      category: "routine",
      readTime: "5 min read",
      author: "vmuse",
      comments: 24,
      image: "/api/placeholder/400/250",
      excerpt: "A streamlined 5-step morning routine that takes less than 10 minutes but gives maximum glow...",
      tags: ["Morning Routine", "Quick Tips", "Beginner Friendly"],
      featured: true,
      publishDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Niacinamide vs Retinol: When and How to Use Each",
      category: "ingredients",
      readTime: "8 min read",
      author: "vmuse",
      comments: 18,
      image: "/api/placeholder/400/250",
      excerpt: "Understanding these powerhouse ingredients and how to incorporate them safely into your routine...",
      tags: ["Niacinamide", "Retinol", "Active Ingredients"],
      featured: true,
      publishDate: "2024-01-12"
    },
    {
      id: 3,
      title: "Makeup Application Tips for Long-Lasting Wear",
      category: "makeup",
      readTime: "6 min read",
      author: "vmuse",
      comments: 31,
      image: "/api/placeholder/400/250",
      excerpt: "Pro techniques to make your makeup last from morning to night without touch-ups...",
      tags: ["Makeup Tips", "Long-lasting", "Pro Techniques"],
      featured: false,
      publishDate: "2024-01-10"
    },
    {
      id: 4,
      title: "Double Cleansing: Why Your Skin Needs This Step",
      category: "skincare",
      readTime: "4 min read",
      author: "vmuse",
      comments: 15,
      image: "/api/placeholder/400/250",
      excerpt: "The Korean beauty secret that transformed my skin and how to do it right...",
      tags: ["Double Cleansing", "Korean Beauty", "Cleansing"],
      featured: false,
      publishDate: "2024-01-08"
    },
    {
      id: 5,
      title: "Drugstore vs High-End: Where to Splurge and Save",
      category: "skincare",
      readTime: "7 min read",
      author: "vmuse",
      comments: 42,
      image: "/api/placeholder/400/250",
      excerpt: "My honest comparison of budget and luxury products to help you make smart choices...",
      tags: ["Budget Beauty", "Product Comparison", "Smart Shopping"],
      featured: true,
      publishDate: "2024-01-05"
    },
    {
      id: 6,
      title: "Color Theory for Makeup: Finding Your Perfect Shades",
      category: "makeup",
      readTime: "9 min read",
      author: "vmuse",
      comments: 28,
      image: "/api/placeholder/400/250",
      excerpt: "Understanding undertones and color theory to choose makeup that enhances your natural beauty...",
      tags: ["Color Theory", "Makeup Theory", "Shade Matching"],
      featured: false,
      publishDate: "2024-01-03"
    }
  ];

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredTips = filteredTips.filter(tip => tip.featured);
  const regularTips = filteredTips.filter(tip => !tip.featured);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-coral/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Tips & Talk
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Your go-to resource for beauty tips, tutorials, and honest conversations about skincare and makeup.
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tips and tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 rounded-xl border-border bg-card"
              />
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

      {/* Featured Tips */}
      {featuredTips.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Sparkles className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Featured Tips</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredTips.map((tip) => (
                <Card key={tip.id} className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-coral/20 flex items-center justify-center">
                    <span className="text-muted-foreground">Featured Image</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary mb-2">
                        <BookOpen className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-xl leading-tight mb-3">{tip.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tip.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {tip.author}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {tip.comments} comments
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tip.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tip.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tips */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Tips & Tutorials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTips.map((tip) => (
              <Card key={tip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Article Image</span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base leading-tight line-clamp-2">{tip.title}</CardTitle>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {tip.readTime}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {tip.comments}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tip.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tip.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full text-sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Beauty Tips</h2>
            <p className="text-xl text-muted-foreground">
              Bite-sized tips you can use right now
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "SPF Every Day",
                tip: "Even indoors, UV rays can damage your skin. Make SPF your non-negotiable step."
              },
              {
                icon: Heart,
                title: "Less is More",
                tip: "Start with one new product at a time. Your skin needs time to adjust."
              },
              {
                icon: Sparkles,
                title: "Clean Brushes",
                tip: "Wash your makeup brushes weekly to prevent breakouts and ensure better application."
              },
              {
                icon: BookOpen,
                title: "Read Ingredients",
                tip: "The first 5 ingredients make up most of the product. Choose wisely."
              }
            ].map((quickTip, index) => (
              <Card key={index} className="text-center p-6 bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <quickTip.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{quickTip.title}</h3>
                <p className="text-sm text-muted-foreground">{quickTip.tip}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-coral/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Get Weekly Beauty Tips
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to receive my latest tips, tutorials, and beauty discoveries directly in your inbox.
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

export default Tips;