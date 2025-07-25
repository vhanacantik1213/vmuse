import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-coral/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
          Whether it’s feedback, questions, or a brilliant idea. I’m all ears!
          </p>
          <p className="text-lg text-muted-foreground">
          Drop me a message and let’s make beauty talk!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Leave Me a Note</h2>
                <p className="text-muted-foreground">
                Short and personal, like sending a letter to a friend.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-border bg-coral/10 placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-border bg-coral/10 placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-border bg-coral/10 placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 rounded-xl border border-border bg-coral/10 placeholder:text-muted-foreground focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Join the Conversation</h2>
                <p className="text-muted-foreground leading-relaxed">
                If you have a beauty question, product recommendation, or just want to connect, I’m always excited to hear from fellow beauty lovers.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">vmuse@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Social Media</h3>
                    <p className="text-muted-foreground">@vmuse.id</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Follow for daily beauty tips and updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Based in Indonesia</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available for virtual collaborations worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-muted/30 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Frequently Asked Topics</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Product review requests:</p>
                    <p className="text-muted-foreground">Excited to discover new favorites! Feel free to share your product details, key ingredients, and the heart behind your brand — I love knowing the story behind the beauty.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Collaboration inquiries:</p>
                    <p className="text-muted-foreground">I'm open to working with brands that value honesty, quality, and empower people through beauty. Let’s create something meaningful together.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Personal skincare advice:</p>
                    <p className="text-muted-foreground">While I’m not a dermatologist, I’m happy to offer general skincare suggestions based on my experiences and what’s worked for me!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;