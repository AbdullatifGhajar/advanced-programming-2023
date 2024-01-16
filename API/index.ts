import express from 'express';
import cors from 'cors';

const app = express();

import DocumentsRouter from './documents/src/routes/DocumentsRouter';
import FilesRouter from './files/src/routes/FilesRouter';

app.use(express.json());
app.use(cors());
app.use('/documents', DocumentsRouter);
app.use('/files', FilesRouter);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8081, () => {
  console.log(`[server]: Server is running at https://localhost:8081`);
});