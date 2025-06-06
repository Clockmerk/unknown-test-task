<script setup lang="ts">
import { scrollElements } from '~/src/shared/constants/scroll-elements'
import { LocalIcons } from '~/src/shared/icons/local-icons'

const items = [
	{
		text: 'Участники акции регистрируют свои чеки на вашем сайте',
		icon: LocalIcons.SCAN,
	},
	{
		text: 'Сайт передает информацию о чеке по API в сервис проверки чеков',
		icon: LocalIcons.QR,
	},
	{
		text: 'Сервис проверки чеков получает состав чека в ФНС',
		icon: LocalIcons.SCORE,
	},
	{
		text: 'Сервис отмечает подходящие позиции в чеке и возвращает данные по API на ваш сайт',
		icon: LocalIcons.LIST,
	},
]
</script>

<template>
	<article
		:id="scrollElements.HOW_IT_WORKS"
		class="flex flex-col xl:gap-15 max-xl:gap-16 max-md:gap-10"
	>
		<h2 class="text-center">
			Как работает сервис?
		</h2>

		<ul
			class="
				grid justify-items-center grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1
				xl:gap-x-[67px]
				max-xl:gap-x-15
				max-lg:gap-x-20 max-lg:gap-y-[16px]
				max-md:gap-[50px]
			"
		>
			<li
				v-for="item in items"
				:key="item.text"
				class="
					flex flex-col gap-5
					xl:max-w-[230px]
					max-xl:max-w-[174px]
					max-lg:max-w-[270px]
					max-md:items-center max-md:text-center
				"
			>
				<u-icon
					:name="item.icon"
					class="size-16"
				/>
				<p class="font-semibold max-md:max-w-[250px]">
					{{ item.text }}
				</p>
			</li>
		</ul>
	</article>
</template>
