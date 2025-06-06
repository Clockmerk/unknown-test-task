<script setup lang="ts">
import { SiteRoutes } from '~/src/shared/router/site-routes'
import { StaticIllustrations } from '~/src/shared/types/static-illustrations'
import UiButton from '~/src/shared/ui/UiButton.vue'

definePageMeta({
	layout: 'default',
})

const imgAttrs = {
	src: StaticIllustrations.NOT_FOUND,
	alt: 'Страница не найдена',
	loading: 'lazy',
} as const
</script>

<template>
	<div class="flex items-center bg-black xs:pb-[95px] min-h-[592px] flex-auto">
		<u-container class="h-full flex items-center justify-between max-lg:flex-col xs:justify-start xs:gap-[37px] max-md:mt-15 max-lg:mt-[108px]">
			<div class="text-white flex flex-col gap-6 xs:gap-3 lg:max-w-[534px] max-lg:items-center md:max-w-[534px] xs:max-w-[300px]">
				<h1 class="max-lg:text-center">
					Запрашиваемая страница не найдена
				</h1>

				<img
					v-bind="imgAttrs"
					class="xs:w-[300px] md:hidden"
				>

				<p class="max-lg:text-center xs:mt-2">
					Возможно, вы ошиблись в адресе страницы или она вообще никогда не существовала. Попробуйте перейти на главную.
				</p>

				<ui-button
					:to="SiteRoutes.MAIN"
					label="Перейти на главную"
					class="mt-2 xs:mt-[13px]"
				/>
			</div>

			<img
				v-bind="imgAttrs"
				class="hidden lg:ml-auto md:block max-xl:w-[430px] xl:w-[540px]"
			>
		</u-container>
	</div>
</template>
