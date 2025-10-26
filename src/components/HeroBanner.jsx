export default function HeroBanner({ blok }) {
    return (
        <section className="hero-banner relative min-h-screen flex items-center overflow-hidden">
            {/* Circuit Board Background Pattern */}
            <div className="absolute inset-0 circuit-pattern opacity-20"></div>
            
            {/* Main Content Container */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Text Content */}
                    <div className="text-left">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-pink-500">The Digital Hub</span>
                            <br />
                            <span className="text-white">for the Swiss Insurance, Pension, and Broker Market</span>
            </h1>
                        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                            {blok.hero_details || "EcoHub is the central platform in the insurance, pension, and broker market. Our innovative service offerings enable simple and secure data exchange according to market standards and facilitate digital communication among participants."}
                        </p>
                    </div>
                    
                    {/* Right Section - 3D Network Graphic */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg">
                            <svg viewBox="0 0 400 300" className="w-full h-auto">
                                {/* Background Elements */}
                                <defs>
                                    <linearGradient id="serverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                    <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#2563eb" />
                                    </linearGradient>
                                </defs>
                                
                                {/* Central Server Hub */}
                                <g transform="translate(200, 150)">
                                    {/* Main Cylinder */}
                                    <ellipse cx="0" cy="20" rx="30" ry="8" fill="#3b82f6" opacity="0.3" />
                                    <rect x="-30" y="-40" width="60" height="80" fill="url(#serverGradient)" />
                                    <rect x="-25" y="-35" width="50" height="70" fill="#60a5fa" />
                                    
                                    {/* Logo 'e' */}
                                    <text x="0" y="10" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">e</text>
                                </g>
                                
                                {/* Server Nodes */}
                                {/* Top Left */}
                                <g transform="translate(100, 80)">
                                    <rect x="-15" y="-25" width="30" height="50" fill="white" />
                                    <rect x="-12" y="-22" width="24" height="44" fill="#f0f9ff" />
                                    <rect x="-10" y="-20" width="20" height="8" fill="#60a5fa" />
                                    <rect x="-10" y="-8" width="20" height="8" fill="#60a5fa" />
                                    <rect x="-10" y="4" width="20" height="8" fill="#60a5fa" />
                                    
                                    {/* Cube with A icon */}
                                    <g transform="translate(25, 0)">
                                        <polygon points="0,0 15,8 15,23 0,15" fill="url(#cubeGradient)" />
                                        <polygon points="15,8 30,0 30,15 15,23" fill="#2563eb" />
                                        <polygon points="0,0 15,8 30,0" fill="#60a5fa" />
                                        <text x="15" y="12" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">A</text>
                                    </g>
                                </g>
                                
                                {/* Top Right */}
                                <g transform="translate(300, 80)">
                                    <rect x="-15" y="-25" width="30" height="50" fill="white" />
                                    <rect x="-12" y="-22" width="24" height="44" fill="#f0f9ff" />
                                    <rect x="-10" y="-20" width="20" height="8" fill="#60a5fa" />
                                    <rect x="-10" y="-8" width="20" height="8" fill="#60a5fa" />
                                    <rect x="-10" y="4" width="20" height="8" fill="#60a5fa" />
                                    
                                    {/* Cube with B icon */}
                                    <g transform="translate(-25, 0)">
                                        <polygon points="0,0 15,8 15,23 0,15" fill="url(#cubeGradient)" />
                                        <polygon points="15,8 30,0 30,15 15,23" fill="#2563eb" />
                                        <polygon points="0,0 15,8 30,0" fill="#60a5fa" />
                                        <text x="15" y="12" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">B</text>
                                    </g>
                                </g>
                                
                                {/* Bottom Left */}
                                <g transform="translate(100, 220)">
                                    <rect x="-15" y="-25" width="30" height="50" fill="white" />
                                    <rect x="-12" y="-22" width="24" height="44" fill="#f0f9ff" />
                                    <rect x="-10" y="-20" width="20" height="8" fill="#60a5fa" />
                                    <rect x="-10" y="-8" width="20" height="8" fill="#60a5fa" />
                                    <rect x="-10" y="4" width="20" height="8" fill="#60a5fa" />
                                    
                                    {/* Cube with person icon */}
                                    <g transform="translate(25, 0)">
                                        <polygon points="0,0 15,8 15,23 0,15" fill="url(#cubeGradient)" />
                                        <polygon points="15,8 30,0 30,15 15,23" fill="#2563eb" />
                                        <polygon points="0,0 15,8 30,0" fill="#60a5fa" />
                                        <circle cx="15" cy="8" r="3" fill="white" />
                                        <rect x="12" y="11" width="6" height="4" fill="white" />
                                    </g>
                                </g>
                                
                                {/* Bottom Right */}
                                <g transform="translate(300, 220)">
                                    <rect x="-15" y="-25" width="30" height="50" fill="white" />
                                    <rect x="-12" y="-22" width="24" height="44" fill="#f0f9ff" />
                                    <rect x="-10" y="-20" width="20" height="8" fill="#60a5fa" />
                                    <rect x="-10" y="-8" width="20" height="8" fill="#60a5fa" />
                                    <rect x="-10" y="4" width="20" height="8" fill="#60a5fa" />
                                    
                                    {/* Cube with gear icon */}
                                    <g transform="translate(-25, 0)">
                                        <polygon points="0,0 15,8 15,23 0,15" fill="url(#cubeGradient)" />
                                        <polygon points="15,8 30,0 30,15 15,23" fill="#2563eb" />
                                        <polygon points="0,0 15,8 30,0" fill="#60a5fa" />
                                        <circle cx="15" cy="12" r="4" fill="white" />
                                        <circle cx="15" cy="12" r="2" fill="#2563eb" />
                                    </g>
                                </g>
                                
                                {/* Connection Lines */}
                                <line x1="200" y1="150" x2="100" y2="80" stroke="#60a5fa" strokeWidth="2" opacity="0.8" />
                                <line x1="200" y1="150" x2="300" y2="80" stroke="#60a5fa" strokeWidth="2" opacity="0.8" />
                                <line x1="200" y1="150" x2="100" y2="220" stroke="#60a5fa" strokeWidth="2" opacity="0.8" />
                                <line x1="200" y1="150" x2="300" y2="220" stroke="#60a5fa" strokeWidth="2" opacity="0.8" />
                                
                                {/* Active Connection Indicators */}
                                <circle cx="150" cy="115" r="2" fill="#ef4444" />
                                <circle cx="250" cy="115" r="2" fill="#ef4444" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
