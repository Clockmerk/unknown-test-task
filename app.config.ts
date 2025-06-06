export default defineAppConfig({
	ui: {
		container: {
			base: 'sm:px-2.5 md:px-16 lg:px-[42px] xl:px-[130px]',
		},
		formField: {
			slots: {
				error: 'text-xs mt-1',
			},
		},
		checkbox: {
			slots: {
				indicator: 'min-[0px]:bg-transparent',
				icon: 'size-[60%]',
				base: 'ring-white/40 ring-2 ',
			},
		},
	},
})
