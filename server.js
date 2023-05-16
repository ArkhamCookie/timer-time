/* eslint-disable no-undef */
import { serve } from 'https://deno.land/std/http/mod.ts'

const BASE_PATH = './public'

const reqHandler = async(req) => {
	const filePath = BASE_PATH + new URL(req.url).pathname
	let fileSize

	try {
		fileSize = (await Deno.stat(filePath)).size
	} catch (err) {
		if (err instanceof Deno.errors.NotFound) {
			return new Response(null, { status: 404 })
		}
		return new Response(null, { status: 500 })
	}

	const body = (await Deno.open(filePath)).readable
	return new Response(body)
}

serve(reqHandler, { port: 8080 })

/*
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
	console.log('Listening on ' + port + '...')
})
*/
