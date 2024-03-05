const _URL = 'https://jsonplacom'

async function getAllTodos() {
	try {
		let url = `${_URL}/tos?userId=4`
		let res = await fetch(url)
		let data = await res.json()

		return data
	} catch (error) {
		return error
	}
}

export { getAllTodos }

