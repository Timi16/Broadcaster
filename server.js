
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const commentRoutes=require('./routes/commentRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path');
const webrtc = require("wrtc");
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
let broadcaster;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static(path.join("public")));

mongoose.connect("mongodb+srv://Admin:admin12345@atlascluster.am2nbgm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  
  let senderStream; // Store the sender stream globally
  
  // Middleware setup
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api",userRoutes);
  // Handle incoming POST requests for consumer endpoint
  app.post("/consumer", async (req, res) => {
      const peer = new webrtc.RTCPeerConnection({
          iceServers: [{ urls: "stun:stun.stunprotocol.org" }]
      });
  
      const desc = new webrtc.RTCSessionDescription(req.body.sdp);
      await peer.setRemoteDescription(desc);
      senderStream.getTracks().forEach(track => peer.addTrack(track, senderStream));
  
      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);
  
      const payload = {
          sdp: peer.localDescription
      };
  
      res.json(payload);
  });
  
  // Handle incoming POST requests for broadcast endpoint
  app.post('/broadcast', async (req, res) => {
      const peer = new webrtc.RTCPeerConnection({
          iceServers: [{ urls: "stun:stun.stunprotocol.org" }]
      });
  
      peer.ontrack = (e) => handleTrackEvent(e, peer);
  
      const desc = new webrtc.RTCSessionDescription(req.body.sdp);
      await peer.setRemoteDescription(desc);
  
      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);
  
      const payload = {
          sdp: peer.localDescription
      };
  
      res.json(payload);
  });
  
  // Socket.IO connection handling
  io.on('connection', (socket) => {
      console.log('A user connected');
  
      socket.on('disconnect', () => {
          console.log('User disconnected');
      });
  
      // Listen for new comments
      socket.on('new-comment', (comment) => {
          io.emit('new-comment', comment); // Broadcast the comment to all connected clients
      });
  });
  
  function handleTrackEvent(e, peer) {
      senderStream = e.streams[0];
  }

const PORT = process.env.PORT || 3017;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
