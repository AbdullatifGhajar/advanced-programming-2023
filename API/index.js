const express = require('express')
const cors = require('cors')
const app = express()

const documentRoutes = require("./documents/src/routes/documents")
const fileRoutes = require("./files/src/routes/files");

app.use(express.json());
app.use(cors());
app.use('/documents', documentRoutes);
app.use('/files', fileRoutes);


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(8081, () => {
  console.log(`[server]: Server is running at https://localhost:8081`);
});