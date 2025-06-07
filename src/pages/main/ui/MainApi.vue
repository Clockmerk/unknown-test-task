<script setup lang="ts">
import UiButton from '~/src/shared/ui/UiButton.vue'
import { StaticIllustrations } from '~/src/shared/types/static-illustrations'
</script>

<template>
	<article
		class="flex justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[30px]"
	>
		<ui-button
			label="Описание методов"
			class="mt-1.5 h-12 lg:hidden"
		/>

		<p class="text-sm max-lg:text-center lg:hidden max-w-[608px] max-md:max-w-[300px]">
			Сервис проверки чеков обменивается данными с промо сайтом через API-интерфейс, который содержит список необходимых методов для приема чеков в виде фото или строки (декодированного QR кода), а также описание параметров для обратного вызова и передачи результатов проверки.
		</p>

		<div class="flex flex-col gap-6 max-lg:items-center justify-center max-w-[500px] max-lg:text-center max-lg:hidden lg:pt-12">
			<h2>API</h2>

			<p class="text-sm max-lg:text-center">
				Сервис проверки чеков обменивается данными с промо сайтом через API-интерфейс, который содержит список необходимых методов для приема чеков в виде фото или строки (декодированного QR кода), а также описание параметров для обратного вызова и передачи результатов проверки.
			</p>

			<ui-button
				label="Описание методов"
				class="mt-1.5 h-12 max-lg:hidden"
			/>
		</div>

		<img
			:src="StaticIllustrations.WOMAN_DRAWING"
			alt="Api сервис"
			loading="lazy"
			fetchpriority="low"
		>

		<h2 class="mb-[-80px] lg:hidden">
			API
		</h2>
	</article>
</template>
