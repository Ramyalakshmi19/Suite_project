const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoute");
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 8000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/users", userRoutes);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    startServer();
  })
  .catch(err => {
    console.log(err);
  });

// Function to start the server
function startServer() {
  http.listen(port, () => {
    console.log(`App is running on port ${port}`);

    // Socket.io connection
    io.on('connection', (socket) => {
      console.log('A user connected');

      // Handle incoming data from the Raspberry Pi using WebSocket
      socket.on('update', (data) => {
        console.log('Received data:', data);

        // Add your logic to save the data to MongoDB or perform other actions

        // Broadcast the data to all connected clients (if needed)
        io.emit('update', data);
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  });
}
