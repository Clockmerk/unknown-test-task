<script setup lang="ts">
import TheHeaderNav from './TheHeaderNav.vue'
import TheHeaderSidebar from './TheHeaderSidebar.vue'
import { scrollElements } from '~/src/shared/constants/scroll-elements'
import { scrollTo } from '~/src/shared/lib/helpers/scrollTo'
import AppLogo from '~/src/shared/ui/AppLogo.vue'
import FormButton from '~/src/shared/ui/form/FormButton.vue'
</script>

<template>
	<header class="bg-black flex items-center h-fit lg:pt-[31px] xs:pt-[25px]">
		<u-container class="flex items-center">
			<app-logo />

			<the-header-nav class="ml-auto max-lg:hidden" />

			<form-button
				class="ml-[58px] h-[46px] max-lg:hidden"
				btn-color="secondary"
				@click="scrollTo(scrollElements.FORM)"
			/>

			<the-header-sidebar />
		</u-container>
	</header>
</template>
