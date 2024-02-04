import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import ApprovalRouter from './approvals/src/routes/ApprovalRouter';
import DocumentRouter from './documents/src/routes/DocumentRouter';
import FilesRouter from './files/src/routes/FilesRouter';
import UsersRouter from './users/src/routes/UserRouter';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use(express.json());
app.use(cors());
app.use('/documents', DocumentRouter);
app.use('/files', FilesRouter);
app.use('/users', UsersRouter);
app.use('/approvals', ApprovalRouter);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8081, () => {
  console.log(`[server]: Server is running at https://localhost:8081`);
});
