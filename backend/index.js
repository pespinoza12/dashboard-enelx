const express = require('express');
const path = require('path');
const app = express();

// Middleware para parsing JSON
app.use(express.json());

// Servir archivos estáticos del frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Health check endpoints
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    project: 'Dashboard Manager - EnelX B2C 2025',
    version: '1.0.0',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Additional health check endpoints that EasyPanel might expect
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// API para obtener datos del dashboard
app.get('/api/dashboard', (req, res) => {
  res.json({
    message: 'Dashboard API endpoint ready',
    version: '1.0.0',
    project: 'EnelX B2C 2025'
  });
});

/**
 * API Endpoint para crear/actualizar dashboards.
 * Aquí implementaremos la lógica para modificar dashboards dinámicamente.
 */
app.post('/api/update-dashboard', (req, res) => {
  console.log('🔄 Petición recibida en /api/update-dashboard');
  console.log('📊 Datos del dashboard:', req.body);
  
  // TODO: Implementar lógica para actualizar dashboards
  // - Validar datos recibidos
  // - Actualizar archivos de configuración
  // - Regenerar build si es necesario
  
  res.status(200).json({ 
    message: 'Dashboard actualizado correctamente',
    timestamp: new Date().toISOString(),
    data: req.body
  });
});

// Fallback para React Router (SPA) - usando middleware específico
app.use((req, res, next) => {
  // Si es una solicitud a la API, continúa
  if (req.path.startsWith('/api/')) {
    return next();
  }
  
  // Si es una solicitud de archivos estáticos (js, css, etc.), no hacer fallback
  if (req.path.startsWith('/assets/') || 
      req.path.endsWith('.js') || 
      req.path.endsWith('.css') || 
      req.path.endsWith('.svg') || 
      req.path.endsWith('.png') || 
      req.path.endsWith('.jpg') || 
      req.path.endsWith('.ico')) {
    return next();
  }
  
  // Para todas las demás rutas, servir index.html
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;

// Manejo de errores y señales
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully...');
  console.log('🔍 Process uptime:', process.uptime(), 'seconds');
  console.log('🔍 Memory usage:', process.memoryUsage());
  console.log('🔍 Environment variables:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    PWD: process.env.PWD
  });
  
  // Dar tiempo para que las conexiones se cierren
  setTimeout(() => {
    server.close(() => {
      console.log('✅ Server closed gracefully');
      process.exit(0);
    });
  }, 1000);
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully...');
  process.exit(0);
});

process.on('uncaughtException', (err) => {
  console.error('🚨 Uncaught Exception:', err);
  console.error('🚨 Stack:', err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('🚨 Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Dashboard Manager - Server running on port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
  console.log(`🔧 API Health: http://localhost:${PORT}/api/health`);
  console.log(`⚡ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🏗️  Static files: ${path.join(__dirname, '../frontend/dist')}`);
  console.log(`🔍 Process ID: ${process.pid}`);
  console.log(`🔍 Node version: ${process.version}`);
  console.log(`🔍 Platform: ${process.platform}`);
  console.log(`🔍 Working directory: ${process.cwd()}`);
  
  // Log periódico para mostrar que el servidor está activo
  setInterval(() => {
    console.log(`💓 Server heartbeat - uptime: ${Math.floor(process.uptime())}s`);
  }, 30000); // Cada 30 segundos
});

server.on('error', (err) => {
  console.error('🚨 Server error:', err);
});

server.on('connection', (socket) => {
  console.log('🔗 New connection established');
});

server.on('close', () => {
  console.log('🛑 Server closed');
});
