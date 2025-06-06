<script setup lang="ts">
import UiButton from '~/src/shared/ui/UiButton.vue'
import { StaticIllustrations } from '~/src/shared/types/static-illustrations'
import { scrollElements } from '~/src/shared/constants/scroll-elements'
import { scrollTo } from '~/src/shared/lib/helpers/scrollTo'
</script>

<template>
	<article
		class="flex justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[30px] max-md:gap-6"
	>
		<ui-button
			label="Стать партнером"
			class="mt-1.5 h-12 lg:hidden"
			@click="scrollTo(scrollElements.FORM)"
		/>

		<p class="text-sm max-lg:text-center lg:hidden max-w-[460px] max-md:max-w-[300px]">
			Приглашаем к сотрудничеству рекламные и digital агентства. Партнер получает скидку до 40% на сервис проверки чеков, для проектов своих клиентов.
		</p>

		<img
			:src="StaticIllustrations.PARTNERS"
			alt="Партнеры"
			loading="lazy"
			fetchpriority="low"
			class="max-xl:max-w-[400px] max-md:max-w-full"
		>

		<div class="flex flex-col gap-6 max-lg:items-center justify-center max-w-[500px] max-lg:text-center">
			<h2>Специальная цена для партнеров</h2>

			<p class="text-sm max-lg:text-center max-lg:hidden">
				Приглашаем к сотрудничеству рекламные и digital агентства. Партнер получает скидку до 40% на сервис проверки чеков, для проектов своих клиентов.
			</p>

			<ui-button
				label="Стать партнером"
				class="mt-1.5 h-12 max-lg:hidden"
				@click="scrollTo(scrollElements.FORM)"
			/>
		</div>
	</article>
</template>
