import { Heart, Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-coral/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Personal Photo */}
            <div className="relative">
              <div className="relative z-10 bg-card rounded-3xl p-8 shadow-2xl border border-border">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-coral/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <Heart className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Add your beautiful photo here!</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-coral/20 to-accent/20 rounded-full blur-3xl"></div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Hi, I'm 
                  <span className="block text-primary">Your Beauty Guide</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Welcome to my little corner of the beauty world! I'm passionate about helping you discover products that truly work for your unique skin.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  My journey with skincare and makeup started when I struggled to find honest reviews that matched my experience. That's when I decided to create a space where authenticity meets beauty.
                </p>
                <p className="text-foreground leading-relaxed">
                  Every review you'll find here comes from personal testing, research, and genuine care for your skin's health. I believe beauty should enhance who you are, not change you.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Products Tested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Values & Mission
            </h2>
            <p className="text-xl text-muted-foreground">
              What drives everything I do in the beauty space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Authenticity</h3>
              <p className="text-muted-foreground text-sm">
                Real experiences, honest opinions, no sugar-coating.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-coral" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Quality</h3>
              <p className="text-muted-foreground text-sm">
                Thorough testing and research before every recommendation.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Community</h3>
              <p className="text-muted-foreground text-sm">
                Building a supportive space for all beauty lovers.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Consistency</h3>
              <p className="text-muted-foreground text-sm">
                Regular updates and fresh content for your beauty journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              My Beauty Journey
            </h2>
          </div>
          
          <div className="space-y-8 bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">The Beginning</h3>
              <p className="text-foreground leading-relaxed">
                Like many of you, I started my beauty journey feeling overwhelmed by endless product options and conflicting reviews. I spent countless hours researching, testing, and sometimes failing with products that didn't work for my skin.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">The Turning Point</h3>
              <p className="text-foreground leading-relaxed">
                After years of trial and error, I realized that what my skin needed wasn't the most expensive or trendy products, but the right products. This insight led me to document my journey and share what truly works.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Today</h3>
              <p className="text-foreground leading-relaxed">
                Now, I'm here to guide you through the beautiful but sometimes confusing world of skincare and makeup. My goal is to save you time, money, and frustration by sharing honest, detailed reviews based on real experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-coral/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Let's Connect!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'd love to hear about your beauty journey and answer any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/review" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              Read My Reviews
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;