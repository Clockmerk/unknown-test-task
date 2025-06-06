<script setup lang="ts">
import TheHeaderNav from './TheHeaderNav.vue'
import { scrollTo } from '~/src/shared/lib/helpers/scrollTo'
import { LocalIcons } from '~/src/shared/icons/local-icons'
import AppLogo from '~/src/shared/ui/AppLogo.vue'
import FormButton from '~/src/shared/ui/form/FormButton.vue'
import { scrollElements } from '~/src/shared/constants/scroll-elements'

const route = useRoute()

const btnUi = {
	color: 'neutral',
	variant: 'link',
	ui: {
		base: 'p-0',
		leadingIcon: 'text-white',
	},
} as const

const isOpen = ref(false)
const hover = ref(false)

watch(route, () => {
	isOpen.value = false
})
</script>

<template>
	<u-drawer
		v-model:open="isOpen"
		class="block ml-auto lg:hidden"
		direction="right"
		:handle="false"
		:ui="{
			container: 'pt-7 pb-[50px] px-[30px] gap-20',
			content: 'bg-black ring-0 rounded-none',
			body: 'flex flex-col',
		}"
	>
		<div
			class="group"
			@mouseenter="hover = true"
			@mouseleave="hover = false"
		>
			<u-button
				v-if="hover"
				v-bind="btnUi"
				class="flex items-center"
				:icon="LocalIcons.BURGER"
			/>

			<u-button
				v-else
				v-bind="btnUi"
				class="flex items-center"
				:icon="LocalIcons.BURGER_OPEN"
			/>
		</div>

		<template #title>
			<div class="flex items-center justify-between">
				<app-logo logo-class="h-[26px] w-[168px]" />
				<u-button
					v-bind="btnUi"
					class="flex items-center"
					:icon="LocalIcons.CROSS"
					:ui="{
						...btnUi,
						leadingIcon: 'text-primary hover:text-white',
					}"
					@click="isOpen = false"
				/>
			</div>
		</template>

		<template #body>
			<the-header-nav />

			<form-button
				class="mt-auto w-full h-[46px]"
				btn-color="secondary"
				@click="scrollTo(scrollElements.FORM)"
			/>
		</template>
	</u-drawer>
</template>
