<script setup lang="ts">
import UiButton from '~/src/shared/ui/UiButton.vue'
import { LocalIcons } from '~/src/shared/icons/local-icons'
import { StaticIllustrations } from '~/src/shared/types/static-illustrations'
import { scrollTo } from '~/src/shared/lib/helpers/scrollTo'
import { scrollElements } from '~/src/shared/constants/scroll-elements'

const items = [
	{
		text: 'Настройку одного проекта',
	},
	{
		text: 'Обработку до 1000 чеков в сутки в одном проекте',
	},
	{
		text: 'Техническую поддержку по любым вопросам',
	},
]
</script>

<template>
	<article
		class="flex flex-col"
	>
		<div
			class="
			flex flex-col items-center text-center
			xl:gap-6
			max-lg:mb-5 max-lg:gap-7
			max-md:mb-[9px] max-md:gap-[14px]
			"
		>
			<h2>
				Стоимость
			</h2>
			<p class="max-w-[435px]">
				Оплата сервиса происходит в формате ежемесячных платежей за каждый активный проект
			</p>
		</div>

		<div class="flex justify-between max-lg:flex-col-reverse max-lg:items-center gap-[19px]">
			<div class="flex flex-col gap-6 lg:pt-12 max-lg:items-center">
				<h4>Подписка включает:</h4>
				<ul
					class="flex flex-col gap-3 max-md:max-w-[250px] z-1"
				>
					<li
						v-for="item in items"
						:key="item.text"
						class="
					flex items-center gap-2.5
				"
					>
						<u-icon
							:name="LocalIcons.CHECK"
							class="size-6 min-w-6"
						/>
						<p>{{ item.text }}</p>
					</li>
				</ul>

				<h3>50 000 руб / мес</h3>

				<span class="italic text-sm max-w-[345px] max-lg:text-center">*Если количество обработанных чеков за сутки превысило 1000 шт, то за каждый последующий чек вы платите 1,5 руб.</span>

				<ui-button
					label="Офорить подписку"
					class="mt-1 h-12"
					@click="scrollTo(scrollElements.FORM)"
				/>
			</div>

			<img
				:src="StaticIllustrations.WOMAN_LAPTOP"
				alt="Стоимость"
				loading="lazy"
				fetchpriority="low"
				class="max-[1200px]:absolute max-[1200px]:right-[-16%] max-lg:static max-lg:right-0 max-h-[481px]"
			>
		</div>
	</article>
</template>
