import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 8080;

async function createServer() {
  const app = express();

  if (!isProduction) {
    // Development mode - use Vite dev server
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // Production mode - serve static files
    app.use(express.static(path.join(__dirname, 'dist'), {
      maxAge: '1y',
      immutable: true
    }));
    
    // SPA fallback - serve index.html for all routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`📦 Environment: ${isProduction ? 'production' : 'development'}`);
    console.log(`🚀 Ready to serve requests`);
  });
}

createServer().catch(err => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
