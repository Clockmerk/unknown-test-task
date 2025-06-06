<script lang="ts" setup>
import { z } from 'zod'
import type { FormSend } from '../model/types'
import { phoneRegExp } from '../model/phone-regexp'
import { mockRequest } from '~/src/shared/lib/helpers/mockRequset'
import FormButton from '~/src/shared/ui/form/FormButton.vue'
import { scrollElements } from '~/src/shared/constants/scroll-elements'

const toast = useToast()

const data = reactive<FormSend.Form>({
	name: '',
	phone: '',
	agreement: false,
})

const schema = z.object({
	name: z.string().min(2, 'Введите ваше имя').refine((value) => /[a-zа-яё]/i.test(value), 'Введите корректное имя'),
	phone: z.string().min(1, 'Введите ваш номер телефона').refine((value) => phoneRegExp.test(value), 'Введите корректный номер телефона'),
	agreement: z.boolean().refine((value) => value, 'Вы должны согласиться с политикой обработки персональных данных'),
})

const inputUi = {
	class: 'w-full',
	ui: {
		base: 'px-5 py-2.5 h-[43px] rounded-[10px]',
	},
} as const

const submitForm = async () => {
	try {
		await mockRequest()
		toast.add({
			title: 'Успешно!',
			description: 'Мы свяжемся с вами в ближайшее время',
			color: 'success',
		})

		data.name = ''
		data.phone = ''
		data.agreement = false
	} catch {
		toast.add({
			title: 'Ошибка!',
			description: 'Что-то пошло не так, попробуйте позже',
			color: 'error',
		})
	}
}
</script>

<template>
	<div
		:id="scrollElements.FORM"
		class="
		flex justify-between max-lg:items-center
		text-white bg-black rounded-[20px] max-[640px]:rounded-none
		p-[100px] pb-[96px]
		max-xl:px-[60px] max-xl:pt-[90px] max-xl:gap-[50px]
		max-lg:px-[105px] max-lg:pb-[117px] max-lg:flex-col
		max-md:px-[9px] max-md:pt-[60px] max-md:pb-[71px] max-md:gap-[30px]
		"
	>
		<div class="flex flex-col gap-6 max-w-[431px] max-lg:gap-[14px] max-lg:text-center">
			<h2>Оставьте заявку</h2>
			<p class="text-white/80">
				Заполните форму, в ближайшее время мы свяжемся с вами и продемонстрируем работу нашего сервиса
			</p>
		</div>

		<u-form
			:state="data"
			class="flex flex-col gap-[14px] md:max-w-[417px] lg:flex-grow"
			:schema
			@submit="submitForm"
		>
			<u-form-field
				name="name"
				required
			>
				<u-input
					v-model="data.name"
					placeholder="Ваше имя"
					v-bind="inputUi"
				/>
			</u-form-field>

			<u-form-field
				name="phone"
				required
			>
				<u-input
					v-model="data.phone"
					v-maska="'+7 (###) ###-##-##'"
					placeholder="Номер телефона"
					v-bind="inputUi"
				/>
			</u-form-field>

			<form-button
				type="submit"
				class="w-full"
			/>

			<u-form-field
				name="agreement"
				required
			>
				<u-checkbox
					v-model="data.agreement"
					label="Я согласен с политикой обработки персональных данных"
					size="lg"
					:ui="{
						label: 'text-white/80',
					}"
				/>
			</u-form-field>
		</u-form>
	</div>
</template>
