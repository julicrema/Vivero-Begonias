# 🌱 Vivero Verde - Catálogo de Productos

Una página web moderna y atractiva para un vivero con catálogo de productos, carrito de compras y diseño inspirado en la naturaleza.

## 🚀 Características

### ✨ Diseño y Estilo
- **Colores temáticos**: Verde y marrón para reflejar la naturaleza
- **Diseño responsivo**: Se adapta a todos los dispositivos
- **Animaciones suaves**: Transiciones y efectos visuales atractivos
- **Tipografía moderna**: Fuente Poppins para mejor legibilidad

### 🛍️ Funcionalidades del Catálogo
- **24 productos** organizados en 4 categorías:
  - 🌿 **Plantas**: Monstera, Ficus, Cactus, Suculentas, Palmera, Bambú
  - 🌸 **Flores**: Rosas, Orquídeas, Girasoles, Lirios, Margaritas, Tulipanes
  - 🛠️ **Jardinería**: Herramientas, guantes, fertilizantes, sustratos
  - 🏺 **Macetas**: Diferentes tipos y tamaños de contenedores

### 🛒 Carrito de Compras
- **Agregar productos**: Con un clic desde el catálogo
- **Gestionar cantidades**: Aumentar/disminuir desde el carrito
- **Eliminar productos**: Botón para quitar items
- **Cálculo automático**: Total actualizado en tiempo real
- **Notificaciones**: Feedback visual al agregar productos

### 🔍 Filtros y Navegación
- **Filtros por categoría**: Botones para filtrar productos
- **Navegación suave**: Scroll automático entre secciones
- **Header fijo**: Navegación siempre accesible

## 📁 Estructura de Archivos

```
cafeteria-website/
├── vivero.html          # Página principal del vivero
├── vivero-styles.css    # Estilos CSS con tema verde/marrón
├── vivero-script.js     # Funcionalidad JavaScript
└── README-vivero.md     # Este archivo
```

## 🎨 Paleta de Colores

- **Verde Principal**: `#2d5a27` - Color base del tema
- **Verde Secundario**: `#4a7c59` - Para gradientes
- **Verde Claro**: `#8fbc8f` - Para elementos destacados
- **Verde Acento**: `#90ee90` - Para botones y elementos activos
- **Marrón Principal**: `#8b4513` - Para elementos de tierra
- **Marrón Secundario**: `#a0522d` - Para variaciones
- **Crema**: `#f5f5dc` - Para fondos suaves

## 🚀 Cómo Usar

1. **Abrir la página**: Abre `vivero.html` en tu navegador
2. **Explorar categorías**: Haz clic en las tarjetas de categorías
3. **Filtrar productos**: Usa los botones de filtro en el catálogo
4. **Agregar al carrito**: Haz clic en "Agregar al Carrito"
5. **Gestionar carrito**: Haz clic en el ícono del carrito
6. **Finalizar compra**: Usa el botón "Finalizar Compra"

## 📱 Responsive Design

La página está optimizada para:
- **Desktop**: Pantallas grandes con grid completo
- **Tablet**: Diseño adaptado con elementos reorganizados
- **Mobile**: Navegación vertical y carrito a pantalla completa

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: 
  - Grid y Flexbox para layouts
  - Variables CSS para consistencia
  - Animaciones y transiciones
  - Media queries para responsive
- **JavaScript Vanilla**:
  - Manipulación del DOM
  - Gestión del carrito
  - Filtros dinámicos
  - Notificaciones

## 🌟 Características Destacadas

### Productos Realistas
- **24 productos** con información detallada
- **Precios en pesos argentinos**
- **Estados de disponibilidad** (disponible/agotado)
- **Descripciones informativas**

### Experiencia de Usuario
- **Notificaciones visuales** al agregar productos
- **Animaciones suaves** en interacciones
- **Feedback inmediato** en todas las acciones
- **Navegación intuitiva**

### Carrito Inteligente
- **Persistencia durante la sesión**
- **Cálculo automático de totales**
- **Gestión de cantidades**
- **Proceso de compra simulado**

## 🎯 Funcionalidades Técnicas

### Gestión de Estado
- Array de productos con toda la información
- Carrito como array de objetos con cantidades
- Filtros dinámicos sin recargar página

### Interactividad
- Event listeners para todas las interacciones
- Manipulación dinámica del DOM
- Actualización en tiempo real

### Optimización
- Código modular y reutilizable
- Estilos organizados con variables CSS
- JavaScript eficiente sin dependencias externas

## 🔧 Personalización

### Agregar Productos
Para agregar nuevos productos, edita el array `productos` en `vivero-script.js`:

```javascript
{
    id: 25,
    nombre: "Nuevo Producto",
    categoria: "plantas",
    precio: 1500,
    descripcion: "Descripción del producto",
    disponibilidad: true,
    icono: "fas fa-leaf"
}
```

### Cambiar Colores
Modifica las variables CSS en `vivero-styles.css`:

```css
:root {
    --primary-green: #tu-color;
    --secondary-green: #tu-color;
    /* ... más variables */
}
```

## 📞 Contacto

Para soporte o consultas sobre el proyecto:
- **Email**: info@viveroverde.com
- **Teléfono**: +54 11 1234-5678

---

**¡Disfruta explorando el catálogo de Vivero Verde! 🌱** 