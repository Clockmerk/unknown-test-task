import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/
// https://router.vuejs.org/guide/essentials/route-matching-syntax.html
export default {
	scrollBehaviorType: 'smooth',
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (routes) => [
		...routes,
		{
			name: 'main',
			path: '/',
			component: () => import('~/src/pages/main/ui/index.vue'),
		},
		{
			name: 'not-found',
			path: '/:pathMatch(.*)*',
			component: () => import('./[...slug].vue'),
		}],
} satisfies RouterConfig
