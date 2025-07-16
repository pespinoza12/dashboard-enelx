const express = require('express');
const path = require('path');
const app = express();

// Middleware para parsing JSON
app.use(express.json());

// Servir archivos estáticos del frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    project: 'Dashboard Manager - EnelX B2C 2025',
    version: '1.0.0'
  });
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
  // Para todas las demás rutas, servir index.html
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Dashboard Manager - Server running on port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
  console.log(`🔧 API Health: http://localhost:${PORT}/api/health`);
  console.log(`⚡ Environment: ${process.env.NODE_ENV || 'development'}`);
});
