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
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight !text-white">
                            <span className="text-pink-500">{blok.hero_title} </span>{blok.hero_title_white}
                        </h1>
                        <p className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl">
                            {blok.hero_details}
                        </p>
                    </div>
                    
                    {/* Right Section - 3D Network Graphic */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg">
                            <img src={blok.hero_image.filename} alt={blok.hero_image.alt} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
