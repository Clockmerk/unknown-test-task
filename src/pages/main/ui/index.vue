<script setup lang="ts">
import MainBanner from './MainBanner.vue'
import MainHowWorks from './MainHowWorks.vue'
import MainCost from './MainCost.vue'
import MainPartners from './MainPartners.vue'
import MainApi from './MainApi.vue'
import { FormSend } from '~/src/features/form-send'
</script>

<template>
	<div class="flex-grow">
		<main-banner />

		<u-container
			class="
			flex flex-col gap-16
			xl:my-[140px]
			lg:my-30
			md:mt-16 md:mb-[100px]
			max-md:mt-20 max-md:mb-25 px-0
			"
		>
			<main-how-works />
			<main-cost />
			<main-partners />
			<main-api />
		</u-container>

		<u-container class="max-md:px-0">
			<form-send />
		</u-container>
	</div>
</template>
