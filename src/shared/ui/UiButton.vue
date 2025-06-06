<script setup lang="ts">
export interface UiButtonProps {
	label: string
	type?: 'button' | 'submit'
	disabled?: boolean
	loading?: boolean
	icon?: string
	btnColor?: 'default' | 'secondary'
	to?: string
}

const props = withDefaults(defineProps<UiButtonProps>(), {
	btnColor: 'default',
})

const btnClass = computed(() => {
	const base = 'justify-center px-[35px] py-[15px] rounded-[10px] text-[15px] h-[46px] w-fit'

	const btnColor = {
		default: 'hover:text-white',
		secondary: 'bg-transparent text-white border hover:bg-white hover:text-black',
	}
	return [
		base,
		btnColor[props.btnColor],
	]
})
</script>

<template>
	<u-button
		:label
		:icon
		:type
		:loading
		:disabled
		:to
		:class="btnClass"
	>
		<slot />
	</u-button>
</template>
