import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Zap, Headphones } from "lucide-react";

// Home landing page for PrimeTimeOTT – OTT deals platform
const Index = () => {
  return (
    <div>
      <header>
        <nav className="container py-6 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 font-semibold">
            <span className="gradient-text">PrimeTimeOTT</span>
          </a>
          <div className="hidden md:flex items-center gap-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link">Features</a>
            <a href="#trust" className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link">Trust</a>
            <a href="#order" className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link">Order</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section aria-label="Best OTT Deals Hero" className="hero-bg">
          <div className="hero-pattern" aria-hidden="true" />
          <div className="container min-h-[78vh] flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto py-10 md:py-14 text-center glass neon rounded-3xl md:rounded-[28px] p-6 md:p-12 animate-enter">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs md:text-sm text-secondary-foreground">
                🚀 Fast delivery • 💯 Trusted • 📞 24/7 Support
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                <span className="block">UNIQUE COLLECTION OF</span>
                <span className="neon-title"> OTT DEALS</span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Top platforms ka access, 100% safe & verified service. Pocket-friendly prices, instant delivery. Ab binge hoga non-stop! 🍿📺 @reseller_deeproy
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="hero" size="lg" className="hover-scale">
                  <a href="https://t.me/primetimeott" target="_blank" rel="noopener noreferrer">Order Now</a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="hover-scale">
                  <a href="#features">See Platforms</a>
                </Button>
              </div>

              {/* Platform strip */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {["Netflix", "Prime Video", "Disney+ Hotstar", "Zee5", "SonyLIV"].map((name) => (
                  <div key={name} className="platform-card rounded-xl py-4 px-5 text-sm font-medium hover-float">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">All your favorite OTTs, ek hi jagah</h2>
            <p className="mt-2 text-muted-foreground">Netflix, Prime Video, Disney+ Hotstar, Zee5, SonyLIV — sabka access ab pocket-friendly price me.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {["Netflix", "Prime Video", "Disney+ Hotstar", "Zee5", "SonyLIV"].map((name) => (
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
              <Button asChild variant="hero" size="lg" className="hover-scale">
                <a href="https://t.me/primetimeott" target="_blank" rel="noopener noreferrer">Order Now</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="hover-scale">
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
