<script lang="ts" setup>
import { navList } from '../model/nav-list'
</script>

<template>
	<nav>
		<ul class="flex gap-x-11 max-lg:flex-col max-lg:gap-y-6 max-lg:text-2xl">
			<li
				v-for="item in navList"
				:key="item.href"
			>
				<nuxt-link
					:to="item.href"
					class="text-white"
				>
					{{ item.label }}
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>
