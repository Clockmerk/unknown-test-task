export function mockRequest(): Promise<void> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.01) resolve()

			reject(new Error('Не удалось получить ответ от сервера'))
		}, 10)
	})
}
