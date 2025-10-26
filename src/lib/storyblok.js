import HeroBanner from '@/components/HeroBanner';
import Page from '@/components/Page';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN || 'dummy-token',
    use: [apiPlugin],
    components: {
		page: Page,
        HeroBanner: HeroBanner,
	},
    apiOptions: {
        region: 'eu',
    },
});