# Dashboard Manager - Proyecto EnelX B2C 2025

## 📋 Descripción

Sistema de gestión de dashboards dinámicos para el proyecto EnelX B2C 2025. Permite visualizar el progreso del proyecto, gestionar tareas y actualizar información en tiempo real.

## 🚀 Tecnologías

### Frontend
- **React 19.1.0** - Framework principal
- **TypeScript** - Tipado estático
- **Vite 7.0.4** - Build tool y dev server
- **TailwindCSS 4.1.11** - Framework de estilos
- **Lucide React** - Iconos modernos

### Backend
- **Node.js** - Runtime
- **Express 5.1.0** - Framework web
- **CommonJS** - Sistema de módulos

## 📁 Estructura del Proyecto

```
dashboard-manager/
├── frontend/                 # Aplicación React
│   ├── src/
│   │   ├── App.tsx          # Componente principal
│   │   ├── main.tsx         # Punto de entrada
│   │   ├── index.css        # Estilos globales + TailwindCSS
│   │   └── enelx-dashboard.tsx # Dashboard principal del proyecto
│   ├── public/              # Archivos estáticos
│   ├── package.json         # Dependencias frontend
│   ├── vite.config.ts       # Configuración Vite
│   ├── tailwind.config.js   # Configuración TailwindCSS
│   └── postcss.config.js    # Configuración PostCSS
├── backend/                 # API Server
│   ├── index.js            # Servidor Express
│   └── package.json        # Dependencias backend
└── README.md               # Documentación
```

## 🛠️ Instalación Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd dashboard-manager
```

2. **Instalar dependencias del frontend**
```bash
cd frontend
npm install
```

3. **Instalar dependencias del backend**
```bash
cd ../backend
npm install
```

4. **Ejecutar en desarrollo**

Terminal 1 (Frontend):
```bash
cd frontend
npm run dev
```

Terminal 2 (Backend):
```bash
cd backend
npm start
```

## 🎨 Características del Dashboard

### Header Moderno
- Gradiente dinámico azul/indigo
- Elementos flotantes decorativos
- Progreso circular animado
- Información clave del proyecto

### Tarjetas de Progreso
- 5 secciones principales del proyecto
- Efectos hover y animaciones
- Barras de progreso con gradientes
- Iconos personalizados por categoría

### Sección de Logros
- Tarjetas con efectos glassmorphism
- Animaciones hover suaves
- Elementos decorativos únicos
- Información de milestones importantes

### Cronograma Visual
- Timeline interactivo
- Gestión de tareas por secciones
- Comentarios en tiempo real
- Barras de progreso ajustables

## 🔧 Configuración de Estilos

### TailwindCSS v4
Configuración optimizada para la nueva versión:

**postcss.config.js:**
```javascript
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}
```

**index.css:**
```css
@import "tailwindcss";
/* Estilos personalizados adicionales */
```

## 🌐 Deployment en Contabu

### Preparación para Producción

1. **Build del Frontend**
```bash
cd frontend
npm run build
```

2. **Configurar Backend para Producción**
```bash
cd backend
# Los archivos de build del frontend se servirán desde aquí
```

### Configuración del Servidor

**Servidor con EasyPanel:**
1. Crear nueva aplicación Node.js
2. Subir archivos del proyecto
3. Configurar variables de entorno
4. Configurar dominio personalizado

**Variables de Entorno Sugeridas:**
```
NODE_ENV=production
PORT=3000
```

### Estructura de Archivos en Servidor
```
/app/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── public/          # Archivos build del frontend
└── package.json
```

## 📦 Scripts Disponibles

### Frontend
- `npm run dev` - Desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build
- `npm run lint` - Linting

### Backend
- `npm start` - Iniciar servidor
- `npm test` - Ejecutar tests

## 🔄 Proceso de Actualización

1. **Desarrollo Local**
   - Hacer cambios en el código
   - Probar localmente con `npm run dev`

2. **Build y Deploy**
   - Ejecutar `npm run build` en frontend
   - Subir archivos actualizados al servidor
   - Reiniciar aplicación en EasyPanel

3. **Verificación**
   - Acceder al dominio personalizado
   - Verificar que los cambios se reflejen

## 📊 Datos del Dashboard

### Secciones del Proyecto
1. **RH & Treinamento** (81%)
2. **Infraestrutura** (80%)
3. **Desenvolvimento** (70%)
4. **Inovação IA** (25%)
5. **Gestão** (75%)

### Métricas Clave
- **Equipe:** 27 profissionais
- **Go-live:** 1º de agosto 2025
- **Progresso Geral:** 74%

## 🤝 Contribución

Para actualizar el dashboard:
1. Modificar datos en `enelx-dashboard.tsx`
2. Ejecutar build y deployment
3. Verificar cambios en el servidor

## 📞 Contacto

**Proyecto:** EnelX B2C 2025  
**Cliente:** Enel/EnelX  
**Desarrollado por:** WA Contact Center

---

*Dashboard actualizado: Julio 2025*