import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, User, MessageCircle, BookOpen, Lightbulb, Heart, Sparkles, Camera } from "lucide-react";
import PhotoUpload from "@/components/PhotoUpload";

const Tips = () => {
  const tips = [
    {
      id: 1,
      title: "The Perfect Morning Skincare Routine for Busy Days",
      readTime: "5 min read",
      author: "vmuse",
      comments: 24,
      excerpt: "A streamlined 5-step morning routine that takes less than 10 minutes but gives maximum glow...",
      featured: true,
    },
    {
      id: 2,
      title: "Niacinamide vs Retinol: When and How to Use Each",
      readTime: "8 min read",
      author: "vmuse",
      comments: 18,
      excerpt: "Understanding these powerhouse ingredients and how to incorporate them safely into your routine...",
      featured: true,
    },
    {
      id: 3,
      title: "Makeup Application Tips for Long-Lasting Wear",
      readTime: "6 min read",
      author: "vmuse",
      comments: 31,
      excerpt: "Pro techniques to make your makeup last from morning to night without touch-ups...",
      featured: false,
    },
    {
      id: 4,
      title: "Double Cleansing: Why Your Skin Needs This Step",
      readTime: "4 min read",
      author: "vmuse",
      comments: 15,
      excerpt: "The Korean beauty secret that transformed my skin and how to do it right...",
      featured: false,
    },
    {
      id: 5,
      title: "Drugstore vs High-End: Where to Splurge and Save",
      readTime: "7 min read",
      author: "vmuse",
      comments: 42,
      excerpt: "My honest comparison of budget and luxury products to help you make smart choices...",
      featured: false,
    },
    {
      id: 6,
      title: "Color Theory for Makeup: Finding Your Perfect Shades",
      readTime: "9 min read",
      author: "vmuse",
      comments: 28,
      excerpt: "Understanding undertones and color theory to choose makeup that enhances your natural beauty...",
      featured: false,
    }
  ];

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
          </div>
        </div>
      </section>

      {/* Main Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Sparkles className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Beauty Tips & Tutorials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip) => (
              <Card key={tip.id} className={`overflow-hidden hover:shadow-xl transition-shadow ${tip.featured ? 'border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5' : ''}`}>
                <PhotoUpload 
                  className="h-40"
                  placeholder="Add article image"
                  defaultIcon={<Camera className="h-6 w-6 text-primary" />}
                />
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between mb-2">
                    {tip.featured && (
                      <div className="flex items-center mb-2">
                        <BookOpen className="h-4 w-4 text-primary mr-1" />
                        <span className="text-xs font-medium text-primary">Featured</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight line-clamp-2">{tip.title}</CardTitle>
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
                      {tip.comments}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{tip.excerpt}</p>
                  <Button className={`w-full ${tip.featured ? 'bg-primary hover:bg-primary/90' : ''}`} variant={tip.featured ? 'default' : 'outline'}>
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-muted/30">
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