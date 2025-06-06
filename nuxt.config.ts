// https://nuxt.com/docs/api/configuration/nuxt-config
import { IS_DEVELOPMENT } from './src/shared/config/env'

export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxt/ui',
		'@vueuse/nuxt',
	],

	plugins: [
		{ src: '~/app/plugins/maska.ts', mode: 'client' },
	],

	devtools: { enabled: IS_DEVELOPMENT },

	app: {
		head: {
			htmlAttrs: {
				lang: 'ru',
			},

			title: 'Check4Promo | Сервис проверки чеков для ваших промо-акций',

			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0',
				},
			],

			link: [
				{ rel: 'icon', href: '/favicon.ico' },
			],
		},
	},

	dir: {
		layouts: './app/layouts',
	},

	experimental: {
		defaults: {
			nuxtLink: {
				prefetch: false,
			},
		},
	},

	compatibilityDate: '2025-05-17',

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/app/styles/scss-vars/index.scss" as *;',
				},
			},
		},
	},

	typescript: {
		typeCheck: true,
	},

	eslint: {
		checker: true,
		config: {
			typescript: true,
			stylistic: {
				indent: 'tab',
				semi: false,
				quotes: 'single',
				commaDangle: 'always-multiline',
				braceStyle: '1tbs',
			},
		},
	},

	fonts: {
		families: [
			{ name: 'Inter', provider: 'google' },
		],
	},

	icon: {
		customCollections: [
			{
				prefix: 'local',
				dir: './src/shared/icons/local',
				normalizeIconName: false,
			},
		],
	},
})
