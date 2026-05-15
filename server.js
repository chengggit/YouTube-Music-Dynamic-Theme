const WebSocket = require('ws');
const fs = require('fs');
const sendFilePath = './src/rics-dev.css';

const wss = new WebSocket.Server({ port: 8080 });
console.log('Server listening on port 8080..');

wss.on('connection', (ws) => {
  console.log('\x1b[32m%s\x1b[0m', 'Client connected');

  ws.on('close', () => {
    console.log('\x1b[31m%s\x1b[0m', 'Client disconnected');
  });
});

function broadcast() {
  if (wss.clients.size === 0) {
    console.log(
      '\x1b[33m%s\x1b[0m',
      `[${new Date().toLocaleTimeString()}] No clients connected, skipping broadcast.`,
    );
    return;
  }

  const fileContent = fs.readFileSync(sendFilePath, 'utf8');
  wss.clients.forEach((ws) => ws.send(fileContent));
  console.log(
    '\x1b[32m%s\x1b[0m',
    `[${new Date().toLocaleTimeString()}] Broadcasted updated ${sendFilePath} to clients.`,
  );
}
module.exports = { broadcast };
