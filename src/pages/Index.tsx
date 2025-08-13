import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Zap, Headphones } from "lucide-react";

const Index = () => {
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  };

  return (
    <div>
      <header>
        <nav className="container py-6 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 font-semibold">
            <span className="gradient-text">PrimeTimeOTT</span>
          </a>
          <div className="hidden md:flex items-center gap-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#trust" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trust</a>
            <a href="#order" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Order</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          aria-label="Best OTT Deals Hero"
          onMouseMove={onMouseMove}
          className="relative"
          style={{
            backgroundImage: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, hsl(var(--brand) / 0.15), transparent 60%)`,
          }}
        >
          <div className="container min-h-[70vh] md:min-h-[72vh] flex items-center">
            <div className="w-full py-12 md:py-20">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs md:text-sm text-secondary-foreground">
                🚀 Fast delivery • 💯 Trusted • 📞 24/7 Support
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text">
                Best OTT Deals – Netflix, Prime, Disney+ & more
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
                Top platforms ka access, 100% safe & verified service. Pocket-friendly prices, instant delivery. Ab binge hoga non-stop! 🍿📺 @reseller_deeproy
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <li className="flex items-center gap-2"><Zap className="text-[hsl(var(--brand))]" /> Instant Activation</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-[hsl(var(--brand))]" /> 100% Trusted</li>
                <li className="flex items-center gap-2"><Headphones className="text-[hsl(var(--brand))]" /> 24/7 Support</li>
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href="#order" aria-label="Order Now">Order Now</a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#features" aria-label="See Plans">Start Binge-Watching</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-16 md:py-20">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">All your favorite OTTs, ek hi jagah</h2>
            <p className="mt-2 text-muted-foreground">Netflix, Prime Video, Disney+ Hotstar, Zee5, SonyLIV — sabka access ab pocket-friendly price me.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              "Netflix",
              "Prime Video",
              "Disney+ Hotstar",
              "Zee5",
              "SonyLIV",
            ].map((name) => (
              <div key={name} className="rounded-md border bg-card px-4 py-3 text-center text-sm shadow-sm">
                {name}
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="font-medium">Transparent Pricing</h3>
              <p className="mt-2 text-sm text-muted-foreground">No hidden charges. Jo dikhega wahi pay karoge. 💯</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="font-medium">Easy Renewal</h3>
              <p className="mt-2 text-sm text-muted-foreground">Renew karna simple — bina kisi jhanjhat ke. 🔄</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="font-medium">Multiple Devices Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">Family & friends ke saath share karo, enjoy on multiple devices. 🧑‍🤝‍🧑</p>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section id="trust" className="bg-muted/50 py-16 md:py-20">
          <div className="container">
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">Why Choose Us</h2>
              <p className="mt-2 text-muted-foreground">Hamari priority hai aapka trust and quick service.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-[hsl(var(--brand))]" />
                  <h3 className="font-medium">Verified Seller</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">100% safe & verified. Zero-risk experience. ✅</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Headphones className="text-[hsl(var(--brand))]" />
                  <h3 className="font-medium">24/7 Customer Support</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Kabhi bhi help chahiye? Hum hamesha yahan hai. ☎️</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[hsl(var(--brand))]" />
                  <h3 className="font-medium">Secure Payment</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Trusted methods only. Aapka data hamare liye secure. 🔒</p>
              </div>
            </div>
          </div>
        </section>

        {/* Order CTA Section */}
        <section id="order" className="container py-16 md:py-20">
          <div className="rounded-2xl border bg-card p-8 md:p-12 text-center shadow-sm">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">Limited time offer – grab it now!</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Ready to binge? Best prices, instant delivery!</h2>
            <p className="mt-2 text-muted-foreground">Order karo aur binge shuru karo — aaj hi. Fast delivery ✅ 100% trusted ✅ Unlimited entertainment ✅</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg">Order Now</Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#features">See Platforms</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} PrimeTimeOTT • All rights reserved.</p>
          <p>Built with ❤️ • Safe • Fast • Trusted</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
