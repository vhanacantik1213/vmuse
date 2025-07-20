import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";
import sidebarImage from "@/assets/sidebar-beauty.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Beauty Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Hey, gorgeous! 
                  <span className="block text-primary">Welcome to Vmuse</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Let's find what works best for your skin, 
                  <span className="block font-medium text-foreground">
                    one honest review at a time.
                  </span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-coral-foreground">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  Latest Reviews
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Products Reviewed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Beauty Lovers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5★</div>
                  <div className="text-sm text-muted-foreground">Trusted Reviews</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative z-10 bg-card rounded-3xl p-8 shadow-2xl border border-border">
                <img
                  src={sidebarImage}
                  alt="Beauty Products"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  New Reviews ✨
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-coral/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-muted-foreground">
              Honest reviews, real results, genuine recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Honest Reviews</h3>
              <p className="text-muted-foreground">
                Real experiences with skincare and makeup products. No sponsored content, just truth.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-coral" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Skin-First Approach</h3>
              <p className="text-muted-foreground">
                We believe healthy skin is beautiful skin. Every recommendation prioritizes skin health.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Trending Insights</h3>
              <p className="text-muted-foreground">
                Stay ahead with the latest beauty trends and ingredients that actually work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-coral/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Beauty Routine?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of beauty lovers who trust our reviews for their skincare journey.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Reviews
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;