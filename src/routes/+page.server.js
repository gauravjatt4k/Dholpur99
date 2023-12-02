import "@fontsource/martel-sans"

export async function load() {
	const res = await fetch("https://devgauravjatt44.alwaysdata.net/api")
	const data = await res.json()
	const send_data = data.data
	return {
		posts: send_data,
	}
}
