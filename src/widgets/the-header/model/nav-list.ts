import { SiteRoutes } from '~/src/shared/router/site-routes'
import { useAppBreakpoints } from '~/src/shared/lib/composables/useAppBreakpoints'

const { isSmaller } = useAppBreakpoints()

export const navList = [
	{
		label: isSmaller('lg') ? 'Как это работает?' : 'Как это работает',
		href: SiteRoutes.MAIN,
	},
	{
		label: 'Стоимость',
		href: SiteRoutes.PRICE,
	},
	{
		label: 'API',
		href: SiteRoutes.API,
	},
	{
		label: 'Контакты',
		href: SiteRoutes.CONTACTS,
	},
]
