import { breakpointsTailwind } from '@vueuse/core'

export const useAppBreakpoints = () => {
	const breakpoints = useBreakpoints(breakpointsTailwind)

	return breakpoints
}
