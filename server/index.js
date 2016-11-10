import express from 'express'

const app = express()

const getMarkup = html => (
`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Twister</title>
</head>
<body>
  <div id="react-root">
    ${html}
  </div>
</body>
</html>
  `
)

app.use('/dist', express.static('./dist'))
app.use((req, res) => {
  res.status(200).send(getMarkup('<h1>Hello, express</h1>'))
})

app.listen(4000, () => {
  console.log('Server start listening at http://localhost:4000')
})