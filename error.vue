<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
	error: NuxtError
}>()
</script>

<template>
	<nuxt-layout>
		<u-container>
			<h1>
				Страница не найдена
			</h1>
			<div>
				К сожалению, запрашиваемой страницы не существует.
				Возможно, она была удалена или ссылка на неё устарела.
			</div>
			<u-button to="/">
				Вернуться на главную
			</u-button>
		</u-container>
	</nuxt-layout>>
</template>
