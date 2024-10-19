import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";

import cors from 'cors'
import fileUpload from "express-fileupload";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;  // Use the environment variable for PORT

// Middleware to parse incoming JSON requests
app.use(express.json());

//File upload 

app.use(fileUpload({
  limits: {fileSize: 2 * 1024 * 1024},
  abortOnLimit: true,
}))


app.use('/uploads', express.static('uploads'))

mongoose.connect('mongodb+srv://nika:nika1234@nun.02mct.mongodb.net/vyayamshala')
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error(`Error: ${err.message}`);
    process.exit(1);  // Exit the process if the DB connection fails
  });

// Use the userRoutes
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/trainer', trainerRoutes);

app.use(cors());
// Define a route (GET request)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

