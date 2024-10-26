# React + TypeScript + Vite + MobX Example

Este repositorio es un ejemplo de una aplicación React configurada con TypeScript y Vite, y con estado global manejado mediante **MobX**. Utiliza MobX para una gestión de estado reactiva y eficiente, ideal para proyectos que requieren sincronización y reactividad en sus datos de forma centralizada.

La configuración incluye lo siguiente:

- **React** con **TypeScript** para desarrollo de interfaces con tipado estático.
- **Vite** como herramienta de construcción rápida.
- **MobX** para una gestión de estado fácil de usar y reactiva.
- Reglas de **ESLint** configuradas para TypeScript y React.

## Características principales

1. **MobX Store**:

   - MobX es usado para definir y gestionar el estado global de la aplicación. El estado se actualiza de manera reactiva y permite a los componentes observar cambios específicos.
   - Las acciones en el store están configuradas como `actions` para que las modificaciones del estado sean controladas.

2. **Componente de entrada controlado**:
   - Incluye un componente de input que utiliza MobX para actualizar su valor solo al agregar un elemento, evitando renders innecesarios.
3. **Funcionalidad de lista**:
   - La aplicación muestra una lista de tareas (todos) donde cada tarea se añade o elimina de la lista a través de MobX, asegurando que los cambios en el store se reflejen automáticamente en la interfaz.

## Estructura del proyecto

```bash
├── public           # Archivos públicos
├── src
│   ├── store        # Archivos de MobX store
│   ├── components   # Componentes React
│   └── App.tsx      # Componente principal
├── tsconfig.json    # Configuración de TypeScript
├── vite.config.ts   # Configuración de Vite
└── README.md
```
