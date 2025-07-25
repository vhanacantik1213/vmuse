import { Heart, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">vmuse</h3>
            <p className="text-muted-foreground">
            Where beauty meets truth reviews rooted in real experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Explore Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">Meet the Creator</a></li>
              <li><a href="/review" className="text-muted-foreground hover:text-primary transition-colors">Honest Reviews</a></li>
              <li><a href="/tips" className="text-muted-foreground hover:text-primary transition-colors">Beauty Tips & Talk</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Skincare Picks</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Makeup Must-Haves</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tools I Trust</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beauty Wisdom</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
            Join the glow gang get honest reviews, tips, and beauty inspo straight to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Send Me Updates
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 vmuse. Made with <Heart className="h-4 w-4 inline text-primary" /> for all beauty lovers
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy & Cookies</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;