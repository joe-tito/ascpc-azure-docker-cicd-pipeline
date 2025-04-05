// const express = require('express');
// const app = express();

// const SECRET_KEY = "supersecretkey123";

// app.get('/', (req, res) => {
//     res.send('Node.js App Running!');
// });

// app.get('/debug', (req, res) => {
//     res.json({
//         message: "Debug Info",
//         secret: SECRET_KEY,
//         env: process.env
//     });
// });

// const PORT = process.env.PORT || 80;
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`App running on http://0.0.0.0:${PORT}`);
// }); 

const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})