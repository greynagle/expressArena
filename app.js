const express = require('express');
const morgan = require('morgan')
const app = express();
app.use(morgan('dev'))

app.get('/', (req, res) => {
	res.send('Hello Express3!')
})

app.get('/burgers', (req, res) => {
	res.send('We have juicy cheese burgers!')
})

app.get('/pizza/pepperoni', (req, res) => {
	res.send('your pizza is on the way!')
})

app.get('/pizza/pineapple', (req, res) => {
	res.send('we don\'t serve that here, never call again!')
})

app.get('/echo', (req, res) => {
	const responseText = `Here are some details of your request:
		Application: ${req.app}
		Base URL: ${req.baseUrl}
		Body: ${req.body}
		Cookies: ${req.cookies}
		fresh?: ${req.fresh}
		Host: ${req.hostname}
		IP: ${req.ip}
		IPs?: ${req.ips}
		method: ${req.method}
		originalURL: ${req.originalUrl}
		params: ${req.params}
		Path: ${req.path}
	`
	res.send(responseText)
})

app.get('/queryViewer', (req, res) => {
	console.log(req.query);
	res.end()
})

app.get('/sum', (req, res) =>{
	console.log(req.query)
	const a = parseInt(req.query.a)
	const b = parseInt(req.query.b)
	res.send(`The sum of ${a} and ${b} is ${a+b}`)
} )

app.listen(8000, () => {
	console.log('Express server is listening on port 8000')
})