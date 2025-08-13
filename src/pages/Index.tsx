import React from "react";
import { Button } from "@/components/ui/button";
import { Send, Zap, Flame } from "lucide-react";

// NFT Landing Page - Dark Theme
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800">
      {/* Hero Section */}
      <main className="relative">
        <section className="container mx-auto px-6 py-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* PrimeTime OTT Logo with 3D Effect */}
            <div className="relative mb-16">
              {/* Main Logo Container */}
              <div className="relative inline-block transform perspective-1000">
                {/* Main Logo Image */}
                <div className="relative">
                  <img 
                    src="/primetime-ott-logo.png" 
                    alt="PrimeTime OTT Logo" 
                    className="w-96 md:w-[500px] h-auto drop-shadow-2xl animate-pulse"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.innerHTML = `
                        <h1 class="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text mb-4">PrimeTime</h1>
                        <h2 class="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text">OTT</h2>
                      `;
                      fallback.className = 'text-center';
                      e.currentTarget.parentNode.appendChild(fallback);
                    }}
                  />
                  
                  {/* 3D Depth Effect - Multiple layers for depth */}
                  <div className="absolute inset-0 transform translate-z-4 opacity-30">
                    <img 
                      src="/primetime-ott-logo.png" 
                      alt="PrimeTime OTT Logo Depth" 
                      className="w-96 md:w-[500px] h-auto"
                    />
                  </div>
                  
                  <div className="absolute inset-0 transform translate-z-8 opacity-20">
                    <img 
                      src="/primetime-ott-logo.png" 
                      alt="PrimeTime OTT Logo Depth" 
                      className="w-96 md:w-[500px] h-auto"
                    />
                  </div>
                  
                  <div className="absolute inset-0 transform translate-z-12 opacity-10">
                    <img 
                      src="/primetime-ott-logo.png" 
                      alt="PrimeTime OTT Logo Depth" 
                      className="w-96 md:w-[500px] h-auto"
                    />
                  </div>
                </div>
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-300/20 to-yellow-500/20 blur-3xl rounded-full animate-pulse"></div>
                
                {/* Floating Service Logos around the main logo */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Netflix */}
                  <div className="absolute -bottom-8 -left-16 transform rotate-12 animate-float">
                    <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">NETFLIX</div>
                  </div>
                  
                  {/* Disney+ */}
                  <div className="absolute -bottom-6 -right-20 transform -rotate-12 animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg">DISNEY+</div>
                  </div>
                  
                  {/* HBO Max */}
                  <div className="absolute top-8 right-8 transform rotate-6 animate-float" style={{animationDelay: '1s'}}>
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg">HBO</div>
                  </div>
                  
                  {/* Tubi */}
                  <div className="absolute top-4 left-12 transform -rotate-6 animate-float" style={{animationDelay: '1.5s'}}>
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg">TUBI</div>
                  </div>
                  
                  {/* Battlegrounds */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 animate-float" style={{animationDelay: '0.8s'}}>
                    <div className="w-20 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-black font-bold text-xs shadow-lg border border-yellow-300 hover:scale-110 transition-transform duration-300">
                      BATTLEGROUNDS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center mb-16">
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 group animate-pulse"
                onClick={() => window.open('https://t.me/primetimeott', '_blank')}
              >
                <span className="relative z-10">Join Now</span>
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                {/* Floating particles */}
                <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full opacity-50 animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </Button>
            </div>

            {/* OTT Service Logos Display */}
            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {/* Netflix */}
                <div className="group relative transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-110">
                  <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-400/30 rounded-xl p-6 backdrop-blur-sm hover:bg-red-500/30 transition-colors">
                    <div className="w-full h-20 bg-red-600 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">NETFLIX</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">N</span>
                      </div>
                      <p className="text-white/90 text-sm">Streaming</p>
                    </div>
                  </div>
                </div>

                {/* Disney+ */}
                <div className="group relative transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-110">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-xl p-6 backdrop-blur-sm hover:bg-blue-500/30 transition-colors">
                    <div className="w-full h-20 bg-blue-600 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">DISNEY+</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">D</span>
                      </div>
                      <p className="text-white/90 text-sm">Family</p>
                    </div>
                  </div>
                </div>

                {/* Prime Video */}
                <div className="group relative transform rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-110">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-xl p-6 backdrop-blur-sm hover:bg-cyan-500/30 transition-colors">
                    <div className="w-full h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">PRIME</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <p className="text-white/90 text-sm">Movies</p>
                    </div>
                  </div>
                </div>

                {/* HBO Max */}
                <div className="group relative transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-110">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 rounded-xl p-6 backdrop-blur-sm hover:bg-purple-500/30 transition-colors">
                    <div className="w-full h-20 bg-purple-600 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">HBO MAX</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">H</span>
                      </div>
                      <p className="text-white/90 text-sm">Premium</p>
                    </div>
                  </div>
                </div>

                {/* Hulu */}
                <div className="group relative transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/30 rounded-xl p-6 backdrop-blur-sm hover:bg-green-500/30 transition-colors">
                    <div className="w-full h-20 bg-green-600 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">HULU</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">H</span>
                      </div>
                      <p className="text-white/90 text-sm">TV Shows</p>
                    </div>
                  </div>
                </div>

                {/* Apple TV+ */}
                <div className="group relative transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-110">
                  <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 border border-gray-400/30 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-500/30 transition-colors">
                    <div className="w-full h-20 bg-gray-600 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">APPLE TV+</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <p className="text-white/90 text-sm">Originals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Elements */}
        <div className="absolute bottom-20 left-10 opacity-60">
          <div className="w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-40 right-20 opacity-40">
          <div className="w-12 h-12 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-40 right-32 opacity-30">
          <div className="w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
      </main>
    </div>
  );
};

export default Index;
