import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

async function fetchData() {
    try {
        const storyblokApi = getStoryblokApi();
        const response = await storyblokApi.get(`cdn/stories/home`, { version: 'draft' });
        return response;
    } catch (error) {
        console.error('Error fetching Storyblok content:', error);
        return null;
    }
}

export default async function Home() {
    const response = await fetchData();

    // If no Storyblok content is available, show a fallback
    if (!response || !response.data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Welcome to Story EcoHub
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        A sustainable content management solution powered by Storyblok
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
                        <p className="text-yellow-800">
                            <strong>Setup Required:</strong> Please configure your Storyblok access token in the .env.local file to see dynamic content.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <StoryblokStory story={response.data.story} />
        </div>
    );
}