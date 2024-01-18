'use strict'

const app = require("./src/app");
const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Start server at ${PORT}`)
})
