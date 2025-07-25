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
                <img 
                  src="/v.jpg"
                  alt="Beauty blogger portrait"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-coral/20 to-accent/20 rounded-full blur-3xl"></div>
            </div>

           {/* About Content */}
           <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Hi, I'm 
                  <span className="block text-primary">Ivhana Julia Andila</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                I created this space out of a simple truth: finding the right skincare or makeup isn’t always easy, especially with so many products and so little honest feedback out there.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground">
                That’s where vmuse comes in.
                Here, I share real reviews, personal routines, and helpful beauty tips based on experience, not just hype. Whether you're struggling with oily skin, searching for the perfect lipstick, or simply curious about what works, I’m here to be your guide and your beauty muse.
                </p>
                <p className="text-xl text-muted-foreground">
                So, welcome! I hope this blog feels like your cozy space to learn, explore, and celebrate your glow. 
                Let’s glow together!
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Products Tested</div>
                </div>
              </div>
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
              className="inline-flex items-center justify-center px-6 py-3 border border-primary bg-white text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/review" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary bg-white text-primary rounded-lg hover:bg-primary/10 transition-colors"
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