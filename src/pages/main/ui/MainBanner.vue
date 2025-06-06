<script setup lang="ts">
import { scrollElements } from '~/src/shared/constants/scroll-elements'
import { scrollTo } from '~/src/shared/lib/helpers/scrollTo'
import { StaticIllustrations } from '~/src/shared/types/static-illustrations'
import UiButton from '~/src/shared/ui/UiButton.vue'

const description = 'Автоматизируйте работу с чеками и запускайте новые акции, зарабатывая на них еще больше'
</script>

<template>
	<div class="bg-black flex">
		<u-container
			class="
			flex items-center justify-between
			xl:mt-[36px] xl:mb-[87px]
			lg:mt-[43px] lg:mb-[123px]
			max-lg:flex-col max-lg:mt-[106px] max-lg:gap-0 max-lg:mb-[-20px]
			max-md:mt-16 max-md:mb-[95px]
		"
		>
			<div class="text-white flex flex-col gap-6 max-w-[556px] xl:max-w-[645px] max-lg:items-center max-lg:text-center">
				<h1>Cервис проверки чеков для ваших <span class="text-primary">промо-акций</span></h1>
				<p class="max-md:hidden max-w-[556px]">
					{{ description }}
				</p>

				<ui-button
					label="Узнать больше"
					class="mt-2 max-md:hidden"
					@click="scrollTo(scrollElements.HOW_IT_WORKS)"
				/>
			</div>

			<img
				:src="StaticIllustrations.WOMAN_CHECK"
				class="max-lg:mt-3 max-xl:w-[460px] max-xl:h-[417px] max-md:w-[300px] max-md:h-[285px]"
			>

			<p class="mt-[14px] text-white md:hidden max-lg:text-center max-w-[408px]">
				{{ description }}
			</p>

			<ui-button
				label="Узнать больше"
				class="mt-[25px] md:hidden"
				@click="scrollTo(scrollElements.HOW_IT_WORKS)"
			/>
		</u-container>
	</div>
</template>
