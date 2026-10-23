import { WebSocket, WebSocketServer } from 'ws';
import fs from 'node:fs';

const SENDFILEPATH = './src/rics-dev.css';

const wss = new WebSocketServer({ port: 8080 });

wss.on('listening', () => {
  console.log('Server listening on port 8080..');
});

wss.on('error', (error) => {
  console.log('\x1b[31m%s\x1b[0m', `WebSocket server error: ${error.message}`);
});

wss.on('connection', (ws) => {
  console.log('\x1b[32m%s\x1b[0m', 'Client connected');

  ws.on('close', () => {
    console.log('\x1b[31m%s\x1b[0m', 'Client disconnected');
  });
});

export function broadcast() {
  if (wss.clients.size === 0) {
    console.log(
      '\x1b[33m%s\x1b[0m',
      `[${new Date().toLocaleTimeString()}] No clients connected, skipping broadcast.`,
    );
    return;
  }

  let fileContent;
  try {
    fileContent = fs.readFileSync(SENDFILEPATH, 'utf8');
  } catch (error) {
    console.log(
      '\x1b[31m%s\x1b[0m',
      `[${new Date().toLocaleTimeString()}] Could not read ${SENDFILEPATH}: ${error.message}`,
    );
    return;
  }

  wss.clients.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) ws.send(fileContent);
  });
  console.log(
    '\x1b[32m%s\x1b[0m',
    `[${new Date().toLocaleTimeString()}] Broadcasted updated ${SENDFILEPATH} to clients.`,
  );
}
