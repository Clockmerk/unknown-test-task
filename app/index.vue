<script setup lang="ts">
import './styles/main.css'
import './styles/main.scss'
</script>

<template>
	<u-app
		:toaster="{
			position: 'top-center',
			progress: false,
			duration: 2000,
		}"
	>
		<nuxt-layout>
			<nuxt-page />
		</nuxt-layout>
	</u-app>
</template>
