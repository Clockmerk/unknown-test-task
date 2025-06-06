<script setup lang="ts">
import { TheHeader } from '~/src/widgets/the-header'
import { TheFooter } from '~/src/widgets/the-footer'
</script>

<template>
	<div class="relative min-h-dvh flex flex-col">
		<TheHeader />

		<main class="max-w-screen flex-grow flex flex-col">
			<NuxtPage />
		</main>

		<TheFooter />
	</div>
</template>
