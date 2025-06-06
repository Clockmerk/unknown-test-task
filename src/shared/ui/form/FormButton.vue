<script setup lang="ts">
import UiButton, { type UiButtonProps } from '../UiButton.vue'

interface FormButtonProps extends Omit<UiButtonProps, 'label'> {
	label?: string
}

withDefaults(defineProps<FormButtonProps>(), {
	label: 'Оставить заявку',
})
</script>

<template>
	<ui-button
		v-bind="$props"
		:label="label"
		:class="$props.class || 'h-12'"
	/>
</template>
