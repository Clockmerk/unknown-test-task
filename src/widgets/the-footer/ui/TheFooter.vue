<script setup lang="ts">
import { contactsList } from '../model/contacts-list'
import AppLogo from '~/src/shared/ui/AppLogo.vue'
</script>

<template>
	<footer class="mt-auto h-fit bg-white max-lg:pb-12 max-lg:pt-15 md:pb-13 md:pt-[73px] lg:pb-[98px] lg:pt-25">
		<u-container class="grid-container">
			<div class="flex flex-col gap-4 max-w-[229px] grid-container__item-1 max-md:text-center max-md:items-center">
				<app-logo is-dark />
				<p>
					Сервис по проверке чеков для ваших промо-акций
				</p>
			</div>

			<div class="w-[317px] text-center grid-container__item-2 max-lg:w-auto">
				<p>ООО «МаркетСофт»</p>
				<p>2022 © Все права защищены</p>
			</div>

			<ul class="flex flex-col gap-2.5 grid-container__item-3">
				<li
					v-for="contact in contactsList"
					:key="contact.label"
					class="flex items-center gap-[13px]"
				>
					<u-icon
						:name="contact.icon"
						class="size-6"
					/>
					<nuxt-link
						:to="contact.link"
						class="font-bold"
					>
						{{ contact.label }}
					</nuxt-link>
				</li>
			</ul>
		</u-container>
	</footer>
</template>

<style lang="scss" scoped>
.grid-container {
	@include adaptive(0px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
		justify-items: center;
		gap: 46px;

		&__item-1 {
			grid-row: 1 / 2;
		}

		&__item-3 {
			grid-row: 2 / 3;
		}

		&__item-2 {
			grid-row: 3 / 4;
		}
	}

	@include adaptiveMd() {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		gap: 62px;

		&__item-1 {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
		}

		&__item-3 {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
		}

		&__item-2 {
			grid-column: 1 / -1;
			grid-row: 2 / 3;
		}
	}

	@include adaptiveLg() {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
