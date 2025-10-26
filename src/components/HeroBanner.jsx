export default function HeroBanner({ blok }) {
    return (
        <section className="hero-banner py-16 px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {blok.hero_title || 'Welcome to Story EcoHub'}
            </h1>
            {blok.hero_details && (
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {blok.hero_details}
                </p>
            )}
        </section>
    );
}
