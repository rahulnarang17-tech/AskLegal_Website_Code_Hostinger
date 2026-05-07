import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Shield, Scale, Briefcase, Building2, Landmark, 
  FileText, Leaf, Calculator, CheckCircle2, Globe, 
  Users, Zap, Award, MapPin, Phone, Mail, Server, Network
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { useToast } from '@/hooks/use-toast.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ClientLogos from '@/components/ClientLogos.jsx';
import pb from '@/lib/pocketbaseClient.js';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const HomePage = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await pb.collection('contact_submissions').create(data, { $autoCancel: false });
      toast({
        title: "Message Sent",
        description: "We have received your inquiry and will contact you shortly.",
      });
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const services = [
    { icon: Shield, title: "Intellectual Property Laws", desc: "Comprehensive protection and enforcement of trademarks, patents, and copyrights." },
    { icon: Scale, title: "Arbitration & Dispute Resolution", desc: "Strategic alternative dispute resolution for complex commercial conflicts." },
    { icon: Briefcase, title: "Civil/Criminal/Commercial Litigation", desc: "Robust representation across all judicial forums and tribunals." },
    { icon: Building2, title: "Banking & Insurance Laws", desc: "Expert advisory on regulatory compliance and financial disputes." },
    { icon: Landmark, title: "Debt Recovery & Financial Litigation", desc: "Efficient recovery strategies and representation in DRT/NCLT." },
    { icon: FileText, title: "Infrastructure & Real Estate Law", desc: "End-to-end legal support for real estate projects and infrastructure development." },
    { icon: Leaf, title: "Environmental Laws", desc: "Guidance on environmental compliance and representation before NGT." },
    { icon: Calculator, title: "Taxation & Finance Laws", desc: "Strategic tax planning and litigation support for direct and indirect taxes." }
  ];

  const differentiators = [
    { icon: Award, title: "20+ Years of Expertise", desc: "Decades of proven success in complex legal matters." },
    { icon: Globe, title: "Pan-India Legal Network", desc: "Seamless legal representation across all major Indian jurisdictions." },
    { icon: Users, title: "Strong Corporate Client Base", desc: "Trusted by industry leaders and multinational corporations." },
    { icon: CheckCircle2, title: "Out-of-Court Resolution Focus", desc: "Prioritizing efficient, cost-effective settlements when advantageous." },
    { icon: Zap, title: "Technology-Enabled Practice", desc: "Leveraging modern tools for secure, transparent, and swift legal services." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[100dvh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1566063447939-9bcbcea295dd?auto=format&fit=crop&q=80" 
              alt="Modern law office" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6 text-sm font-medium">
                  <Award className="w-4 h-4" />
                  20+ Years of Excellence
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Strategic Legal Solutions for Complex Business Challenges
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
                  A modern law firm delivering intelligent, results-driven legal care across India. Trusted by leading corporations to navigate the most intricate legal landscapes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base h-12 px-8" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    Book a Consultation
                  </Button>
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-base h-12 px-8 transition-colors" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                    Explore Services
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About ASK Legal</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    ASK Legal is a premier law firm dedicated to providing strategic, practical, and comprehensive legal solutions. With over two decades of leadership in the legal domain, we have established ourselves as a trusted partner for corporations and individuals alike.
                  </p>
                  <p>
                    Founded by Ankur Katyal, our firm operates on a client-centric approach, ensuring that every legal strategy is aligned with our clients' broader business objectives. We don't just practice law; we engineer solutions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "20+ Years", desc: "Of legal leadership and excellence" },
                    { title: "Practical Solutions", desc: "Business-aligned legal strategies" },
                    { title: "Client-Centric", desc: "Dedicated attention to every case" },
                    { title: "Proven Track Record", desc: "High success rate in complex litigation" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-muted border border-border">
                      <h3 className="text-2xl font-bold text-primary mb-2">{stat.title}</h3>
                      <p className="text-muted-foreground">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Practice Areas</h2>
                <p className="text-lg text-muted-foreground">Comprehensive legal expertise tailored to protect your interests and drive your business forward.</p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-card text-card-foreground p-6 rounded-2xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-us" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Choose ASK Legal</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((diff, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                    <diff.icon className="w-10 h-10 text-secondary mb-6" />
                    <h3 className="text-xl font-semibold mb-3 text-white">{diff.title}</h3>
                    <p className="text-white/70 leading-relaxed">{diff.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section id="founder" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src="https://horizons-cdn.hostinger.com/ed87e36e-c597-4ee2-8aa9-d310d55b56b4/fecc8bd79fa345ede684166676d6a0e6.jpg" 
                    alt="Ankur Katyal - Founder of ASK Legal" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-1">Ankur Katyal</h3>
                    <p className="text-secondary font-medium">Founder & Managing Partner</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Founder</h2>
                <h4 className="text-xl text-primary font-medium mb-6">Legal Strategist with 20+ Years of Excellence</h4>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Ankur Katyal brings over two decades of profound legal expertise, having served as the Former Deputy General Manager – Legal at Paytm, with distinguished prior tenures at Kotak Mahindra Bank, GE Money, and CitiFinancial.
                  </p>
                  <p>
                    His extensive corporate background provides ASK Legal with a unique advantage: a deep understanding of internal corporate mechanics combined with formidable litigation prowess. He is a recognized expert in litigation, compliance, arbitration, and strategic legal advisory.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CLIENTS SECTION (Full Width Stacked) */}
        <section className="py-20 bg-background border-t border-border overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Leading Corporations</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Providing strategic legal solutions to industry leaders across diverse sectors.
                </p>
              </div>
              <div className="-mx-4 sm:mx-0">
                <ClientLogos />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* INFRASTRUCTURE SECTION (Full Width Stacked) */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Infrastructure & Capabilities</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A modern firm equipped with state-of-the-art resources and nationwide reach.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: MapPin, title: "Strategic Location", text: "Proximity to Supreme Court & Delhi High Court ensures swift legal action." },
                  { icon: Users, title: "Expert Legal Team", text: "A dedicated group of specialized lawyers and subject-matter experts." },
                  { icon: Server, title: "Modern Tech Stack", text: "Secure data systems and legal tech tools for efficient case management." },
                  { icon: Network, title: "Pan-India Reach", text: "An extensive associate network enabling seamless representation nationwide." }
                ].map((item, i) => (
                  <div key={i} className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Ready to discuss your legal needs? Schedule a consultation with our experts today.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Office Address</h4>
                      <p className="text-muted-foreground mt-1">15, LGF, Sadhana Enclave, Panchsheel Park, New Delhi – 110017</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Phone</h4>
                      <p className="text-muted-foreground mt-1">+91 9811809439</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Email</h4>
                      <p className="text-muted-foreground mt-1">ankurkatyal@asklegal.co.in</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted rounded-2xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    Recognition & Awards
                  </h4>
                  <p className="text-muted-foreground">Business Support Excellence Award – 2017 for Excellence in Legal Services</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Schedule Your Consultation Today</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        {...register("name", { required: "Name is required" })}
                        className="bg-background text-foreground"
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          {...register("email", { 
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                          })}
                          className="bg-background text-foreground"
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          placeholder="+91 98765 43210" 
                          {...register("phone", { required: "Phone number is required" })}
                          className="bg-background text-foreground"
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Briefly describe your legal requirements..." 
                        className="min-h-[120px] bg-background text-foreground"
                        {...register("message", { required: "Message is required" })}
                      />
                      {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;