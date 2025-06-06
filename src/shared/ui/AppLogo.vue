<script setup lang="ts">
import { StaticIllustrations } from '../types/static-illustrations'
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<{
	isLink?: boolean
	isDark?: boolean
	logoClass?: string
}>(), {
	isLink: true,
})

const component = computed(() => {
	return props.isLink ? NuxtLink : 'div'
})

const logo = computed(() => {
	return props.isDark ? StaticIllustrations.LODO_DARK : StaticIllustrations.LOGO
})

const imgClass = computed(() => {
	if (props.logoClass) {
		return props.logoClass
	}

	return 'h-[33px] w-[210px] max-md:h-7 max-md:w-[175px]'
})
</script>

<template>
	<component
		:is="component"
		:to="isLink ? '/' : undefined"
	>
		<img
			:src="logo"
			alt="Check4Promo лого"
			:class="imgClass"
		>
	</component>
</template>
