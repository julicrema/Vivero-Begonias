// Acá se encuentran los productos por defecto del catálogo
// Estos se usarán si no hay datos guardados en localStorage
const defaultProductos = [
    // Plantas
    {
        id: 1,
        nombre: "Monstera Deliciosa",
        categoria: "plantas",
        precio: 2500,
        descripcion: "Planta de interior con hojas grandes y características. Perfecta para decorar espacios interiores.",
        disponibilidad: true,
        icono: "fas fa-leaf"
    },
    {
        id: 2,
        nombre: "Ficus Lyrata",
        categoria: "plantas",
        precio: 3200,
        descripcion: "Árbol del caucho con hojas brillantes. Ideal para purificar el aire de tu hogar.",
        disponibilidad: true,
        icono: "fas fa-tree"
    },
    {
        id: 3,
        nombre: "Cactus Echinopsis",
        categoria: "plantas",
        precio: 800,
        descripcion: "Cactus pequeño y fácil de cuidar. Perfecto para principiantes en jardinería.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 4,
        nombre: "Suculenta Echeveria",
        categoria: "plantas",
        precio: 600,
        descripcion: "Suculenta colorida que requiere poco riego. Ideal para espacios soleados.",
        disponibilidad: false,
        icono: "fas fa-seedling"
    },
    {
        id: 5,
        nombre: "Palmera Areca",
        categoria: "plantas",
        precio: 4500,
        descripcion: "Palmera elegante para interior. Añade un toque tropical a tu espacio.",
        disponibilidad: true,
        icono: "fas fa-tree"
    },
    {
        id: 6,
        nombre: "Bambú de la Suerte",
        categoria: "plantas",
        precio: 1200,
        descripcion: "Bambú decorativo que atrae la buena fortuna. Fácil de mantener.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },

    // Flores
    {
        id: 7,
        nombre: "Rosa Roja",
        categoria: "flores",
        precio: 1500,
        descripcion: "Hermosas rosas rojas en maceta. Perfectas para regalar o decorar.",
        disponibilidad: true,
        icono: "fas fa-flower-tulip"
    },
    {
        id: 8,
        nombre: "Orquídea Phalaenopsis",
        categoria: "flores",
        precio: 2800,
        descripcion: "Orquídea elegante con flores duraderas. Una joya para tu hogar.",
        disponibilidad: true,
        icono: "fas fa-flower-tulip"
    },
    {
        id: 9,
        nombre: "Girasol",
        categoria: "flores",
        precio: 900,
        descripcion: "Girasol alegre que sigue al sol. Ideal para jardines exteriores.",
        disponibilidad: true,
        icono: "fas fa-sun"
    },
    {
        id: 10,
        nombre: "Lirio Blanco",
        categoria: "flores",
        precio: 1100,
        descripcion: "Lirio blanco elegante y fragante. Perfecto para crear un ambiente sereno.",
        disponibilidad: false,
        icono: "fas fa-flower-tulip"
    },
    {
        id: 11,
        nombre: "Margarita",
        categoria: "flores",
        precio: 750,
        descripcion: "Margaritas blancas y amarillas. Flores resistentes y duraderas.",
        disponibilidad: true,
        icono: "fas fa-flower-tulip"
    },
    {
        id: 12,
        nombre: "Tulipán",
        categoria: "flores",
        precio: 850,
        descripcion: "Tulipanes coloridos en maceta. Flores de primavera por excelencia.",
        disponibilidad: true,
        icono: "fas fa-flower-tulip"
    },

    // Jardinería
    {
        id: 13,
        nombre: "Pala de Jardín",
        categoria: "jardineria",
        precio: 1200,
        descripcion: "Pala resistente para trabajos de jardinería. Ideal para cavar y trasplantar.",
        disponibilidad: true,
        icono: "fas fa-tools"
    },
    {
        id: 14,
        nombre: "Tijeras de Podar",
        categoria: "jardineria",
        precio: 1800,
        descripcion: "Tijeras profesionales para podar plantas y flores. Corte preciso y seguro.",
        disponibilidad: true,
        icono: "fas fa-cut"
    },
    {
        id: 15,
        nombre: "Regadera",
        categoria: "jardineria",
        precio: 950,
        descripcion: "Regadera de plástico resistente. Perfecta para regar plantas pequeñas.",
        disponibilidad: true,
        icono: "fas fa-tint"
    },
    {
        id: 16,
        nombre: "Guantes de Jardinería",
        categoria: "jardineria",
        precio: 650,
        descripcion: "Guantes protectores para trabajos de jardinería. Comodidad y seguridad.",
        disponibilidad: true,
        icono: "fas fa-hand-paper"
    },
    {
        id: 17,
        nombre: "Fertilizante Orgánico",
        categoria: "jardineria",
        precio: 450,
        descripcion: "Fertilizante natural para plantas. Nutrientes esenciales para el crecimiento.",
        disponibilidad: true,
        icono: "fas fa-leaf"
    },
    {
        id: 18,
        nombre: "Sustrato Premium",
        categoria: "jardineria",
        precio: 350,
        descripcion: "Sustrato de alta calidad para plantas. Mezcla perfecta de nutrientes.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },

    // Macetas
    {
        id: 19,
        nombre: "Maceta de Cerámica",
        categoria: "macetas",
        precio: 800,
        descripcion: "Maceta de cerámica elegante. Disponible en varios colores y tamaños.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 20,
        nombre: "Maceta Colgante",
        categoria: "macetas",
        precio: 1200,
        descripcion: "Maceta colgante para plantas trepadoras. Ideal para espacios verticales.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 21,
        nombre: "Maceta de Plástico",
        categoria: "macetas",
        precio: 400,
        descripcion: "Maceta de plástico resistente. Ligera y fácil de transportar.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 22,
        nombre: "Maceta Decorativa",
        categoria: "macetas",
        precio: 1500,
        descripcion: "Maceta decorativa con diseños únicos. Perfecta como elemento decorativo.",
        disponibilidad: false,
        icono: "fas fa-seedling"
    },
    {
        id: 23,
        nombre: "Maceta Grande",
        categoria: "macetas",
        precio: 2200,
        descripcion: "Maceta grande para plantas de mayor tamaño. Ideal para árboles pequeños.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 24,
        nombre: "Maceta con Plato",
        categoria: "macetas",
        precio: 950,
        descripcion: "Maceta con plato incluido. Evita derrames y mantiene limpia la superficie.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    }
];

// Estado de productos en ejecución (se carga de localStorage o de default)
let productos = [];

// Variables globales
let carrito = [];
let categoriaActual = 'todos';
let metodosPago = [];
let historialCompras = [];
let metodoPagoSeleccionado = null;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Cargar productos desde almacenamiento local, o inicializar con default
    const guardados = localStorage.getItem('vivero_productos');
    try {
        productos = guardados ? JSON.parse(guardados) : defaultProductos.slice();
        if (!guardados) {
            localStorage.setItem('vivero_productos', JSON.stringify(productos));
        }
    } catch (e) {
        productos = defaultProductos.slice();
        localStorage.setItem('vivero_productos', JSON.stringify(productos));
    }

    // Cargar métodos de pago desde localStorage
    cargarMetodosPago();
    
    // Cargar historial de compras desde localStorage
    cargarHistorialCompras();
    
    cargarProductos();
    actualizarContadorCarrito();
});

// Exponer un método para forzar recarga de productos desde localStorage (útil si se navega sin recargar)
window.refrescarProductosDesdeStorage = function() {
    const guardados = localStorage.getItem('vivero_productos');
    if (guardados) {
        try { productos = JSON.parse(guardados); } catch (e) {}
        cargarProductos(categoriaActual);
    }
}

// Función para cargar productos
function cargarProductos(categoria = 'todos') {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(producto => producto.categoria === categoria);

    productosFiltrados.forEach(producto => {
        const productCard = crearTarjetaProducto(producto);
        productsGrid.appendChild(productCard);
    });
}

// Función para crear tarjeta de producto
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <i class="${producto.icono}"></i>
        </div>
        <div class="product-info">
            <h3 class="product-title">${producto.nombre}</h3>
            <p class="product-description">${producto.descripcion}</p>
            <div class="product-price">$${producto.precio.toLocaleString()}</div>
            <span class="product-availability ${producto.disponibilidad ? 'available' : 'unavailable'}">
                ${producto.disponibilidad ? 'Disponible' : 'Agotado'}
            </span>
            <button class="add-to-cart" 
                    onclick="agregarAlCarrito(${producto.id})"
                    ${!producto.disponibilidad ? 'disabled' : ''}>
                ${producto.disponibilidad ? 'Agregar al Carrito' : 'Agotado'}
            </button>
        </div>
    `;
    return card;
}

// Función para filtrar por categoría
function filterByCategory(categoria) {
    categoriaActual = categoria;
    cargarProductos(categoria);
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Funciones del carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto || !producto.disponibilidad) {
        return;
    }

    const itemExistente = carrito.find(item => item.id === productoId);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarContadorCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

function quitarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    actualizarContadorCarrito();
    actualizarCarrito();
}

function cambiarCantidad(productoId, cambio) {
    const item = carrito.find(item => item.id === productoId);
    
    if (item) {
        item.cantidad += cambio;
        
        if (item.cantidad <= 0) {
            quitarDelCarrito(productoId);
        } else {
            actualizarContadorCarrito();
            actualizarCarrito();
        }
    }
}

function actualizarContadorCarrito() {
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function actualizarCarrito() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Tu carrito está vacío</p>';
        cartTotal.textContent = '$0.00';
        return;
    }

    carrito.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.nombre}</div>
                <div class="cart-item-price">$${item.precio.toLocaleString()}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                <span class="quantity-display">${item.cantidad}</span>
                <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="quitarDelCarrito(${item.id})">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
    });

    const total = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    cartTotal.textContent = `$${total.toLocaleString()}`;
}

function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.classList.toggle('active');
    
    if (cartOverlay.classList.contains('active')) {
        actualizarCarrito();
        actualizarMetodosPago();
    }
}

function togglePaymentSection() {
    const paymentContent = document.getElementById('paymentContent');
    const toggleBtn = document.getElementById('paymentToggleBtn');
    
    paymentContent.classList.toggle('expanded');
    toggleBtn.classList.toggle('rotated');
    
    // Actualizar el resumen en el header si está colapsado
    if (!paymentContent.classList.contains('expanded')) {
        actualizarResumenMetodoPago();
    }
}

function actualizarResumenMetodoPago() {
    const paymentHeader = document.querySelector('.payment-header h4');
    
    if (metodosPago.length === 0) {
        paymentHeader.innerHTML = '<i class="fas fa-credit-card"></i> Método de Pago';
        return;
    }
    
    const metodoSeleccionado = metodoPagoSeleccionado !== null ? metodosPago[metodoPagoSeleccionado] : metodosPago[0];
    
    paymentHeader.innerHTML = `
        <i class="fas fa-credit-card"></i> Método de Pago: 
        <span style="font-weight: 400; color: var(--gray);">
            ${metodoSeleccionado.tipo.charAt(0).toUpperCase() + metodoSeleccionado.tipo.slice(1)} ****${metodoSeleccionado.numero.slice(-4)}
        </span>
    `;
}

// Funciones para métodos de pago
function cargarMetodosPago() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    if (!usuario) {
        metodosPago = [];
        return;
    }
    const guardados = localStorage.getItem('metodos_pago_' + usuario.username);
    try {
        metodosPago = guardados ? JSON.parse(guardados) : [];
    } catch (e) {
        metodosPago = [];
    }
}

function guardarMetodosPago() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    if (!usuario) return;
    localStorage.setItem('metodos_pago_' + usuario.username, JSON.stringify(metodosPago));
}

function actualizarMetodosPago() {
    const paymentMethods = document.getElementById('paymentMethods');
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    paymentMethods.innerHTML = '';

    if (!usuario) {
        paymentMethods.innerHTML = '<p style="text-align: center; color: #666; padding: 0.5rem; font-size: 0.9rem;">Debes iniciar sesión para ver tus métodos de pago.</p>';
        return;
    }

    if (metodosPago.length === 0) {
        paymentMethods.innerHTML = '<p style="text-align: center; color: #666; padding: 0.5rem; font-size: 0.8rem;">No hay métodos de pago guardados</p>';
        return;
    }
    
    // Mostrar todos los métodos de pago cuando el menú está expandido
    metodosPago.forEach((metodo, index) => {
        const paymentMethod = document.createElement('div');
        paymentMethod.className = `payment-method ${metodoPagoSeleccionado === index ? 'selected' : ''}`;
        paymentMethod.onclick = () => seleccionarMetodoPago(index);
        
        paymentMethod.innerHTML = `
            <div class="payment-method-info">
                <div class="payment-method-icon ${metodo.tipo}">
                    ${getCardIcon(metodo.tipo)}
                </div>
                <div class="payment-method-details">
                    <h5>${metodo.tipo.charAt(0).toUpperCase() + metodo.tipo.slice(1)}</h5>
                    <p>**** **** **** ${metodo.numero.slice(-4)}</p>
                </div>
            </div>
            <div class="payment-method-actions">
                <button class="icon-btn small" onclick="event.stopPropagation(); eliminarMetodoPago(${index})" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        paymentMethods.appendChild(paymentMethod);
    });
}

function getCardIcon(tipo) {
    const icons = {
        'visa': 'VISA',
        'mastercard': 'MC',
        'american-express': 'AE',
        'diners': 'DC'
    };
    return icons[tipo] || '****';
}

function seleccionarMetodoPago(index) {
    metodoPagoSeleccionado = index;
    actualizarMetodosPago();
    
    // Actualizar el resumen si el menú está colapsado
    const paymentContent = document.getElementById('paymentContent');
    if (!paymentContent.classList.contains('expanded')) {
        actualizarResumenMetodoPago();
    }
}


function eliminarMetodoPago(index) {
    if (confirm('¿Estás seguro de que quieres eliminar este método de pago?')) {
        metodosPago.splice(index, 1);
        if (metodoPagoSeleccionado === index) {
            metodoPagoSeleccionado = null;
        } else if (metodoPagoSeleccionado > index) {
            metodoPagoSeleccionado--;
        }
        guardarMetodosPago();
        actualizarMetodosPago();
        
        // Actualizar el resumen si el menú está colapsado
        const paymentContent = document.getElementById('paymentContent');
        if (!paymentContent.classList.contains('expanded')) {
            actualizarResumenMetodoPago();
        }
        
        mostrarNotificacion('Método de pago eliminado');
    }
}

function showAddPaymentModal() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    if (!usuario) {
        alert('Debes iniciar sesión para agregar un método de pago.');
        return;
    }
    document.getElementById('paymentModal').classList.add('active');
    document.getElementById('paymentForm').reset();
    const btnAgregar = document.getElementById('btnAgregarMetodoPago');
    if (btnAgregar) {
        btnAgregar.disabled = !usuario;
        btnAgregar.onclick = function() {
            if (!usuario) {
                alert('Debes iniciar sesión para agregar un método de pago.');
                return;
            }
            showAddPaymentModal();
       };
    }
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function addPaymentMethod() {
    const cardType = document.getElementById('cardType').value;
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const saveCard = document.getElementById('saveCard').checked;
    
    // Validaciones básicas
    if (!cardType || !cardNumber || !cardHolder || !expiryDate || !cvv) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        alert('El número de tarjeta debe tener entre 13 y 19 dígitos');
        return;
    }
    
    if (saveCard) {
        const nuevoMetodo = {
            id: Date.now(),
            tipo: cardType,
            numero: cardNumber,
            titular: cardHolder,
            vencimiento: expiryDate,
            cvv: cvv
        };
        
        metodosPago.push(nuevoMetodo);
        guardarMetodosPago();
        actualizarMetodosPago();
        
        // Actualizar el resumen si el menú está colapsado
        const paymentContent = document.getElementById('paymentContent');
        if (!paymentContent.classList.contains('expanded')) {
            actualizarResumenMetodoPago();
        }
        
        mostrarNotificacion('Método de pago agregado exitosamente');
    }
    
    closePaymentModal();
}

// Funciones auxiliares para formateo de tarjetas
function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '');
    let formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
    if (formattedValue.length > 19) {
        formattedValue = formattedValue.substring(0, 19);
    }
    input.value = formattedValue;
}

function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    input.value = value;
}

// Agregar event listeners para formateo automático
document.addEventListener('DOMContentLoaded', function() {
    // Formateo del número de tarjeta
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function() {
            formatCardNumber(this);
        });
    }
    
    // Formateo de fecha de vencimiento
    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function() {
            formatExpiryDate(this);
        });
    }
    
    // Cerrar modales al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
        }
    });
});

function checkout() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    if (!usuario) {
        alert('Debes iniciar sesión para realizar una compra.');
        return;
    }

    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    if (metodoPagoSeleccionado === null && metodosPago.length > 0) {
        alert('Por favor selecciona un método de pago');
        return;
    }

    const total = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    
    // Crear registro de compra
    const compra = {
        id: Date.now(),
        fecha: new Date().toLocaleString('es-ES'),
        items: [...carrito],
        total: total,
        metodoPago: metodoPagoSeleccionado !== null ? metodosPago[metodoPagoSeleccionado] : null,
        estado: 'Completada'
    };
    
    // Agregar al historial
    historialCompras.unshift(compra);
    guardarHistorialCompras();
    
    // Simular proceso de compra
    alert(`¡Gracias por tu compra!\n\nTotal: $${total.toLocaleString()}\n\nTu pedido será procesado pronto.`);
    
    // Limpiar carrito
    carrito = [];
    metodoPagoSeleccionado = null;
    actualizarContadorCarrito();
    actualizarCarrito();
    actualizarMetodosPago();
    toggleCart();
}

// Funciones para historial de compras
function cargarHistorialCompras() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    if (!usuario) {
        historialCompras = [];
        return;
    }
    const guardados = localStorage.getItem('historial_' + usuario.username);
    try {
        historialCompras = guardados ? JSON.parse(guardados) : [];
    } catch (e) {
        historialCompras = [];
    }
}

function guardarHistorialCompras() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    if (!usuario) return;
    localStorage.setItem('historial_' + usuario.username, JSON.stringify(historialCompras));
}

function showPurchaseHistory() {
    document.getElementById('historyModal').classList.add('active');
    actualizarHistorialCompras();
}

function closeHistoryModal() {
    document.getElementById('historyModal').classList.remove('active');
}

function actualizarHistorialCompras() {
    const purchaseHistory = document.getElementById('purchaseHistory');
    purchaseHistory.innerHTML = '';
    
    if (historialCompras.length === 0) {
        purchaseHistory.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 1rem; color: var(--light-green);"></i>
                <h3>No hay compras registradas</h3>
                <p>Cuando realices tu primera compra, aparecerá aquí.</p>
            </div>
        `;
        return;
    }
    
    historialCompras.forEach(compra => {
        const purchaseItem = document.createElement('div');
        purchaseItem.className = 'purchase-item';
        
        purchaseItem.innerHTML = `
            <div class="purchase-header">
                <div class="purchase-date">${compra.fecha}</div>
                <div class="purchase-total">$${compra.total.toLocaleString()}</div>
            </div>
            <div class="purchase-items">
                ${compra.items.map(item => `
                    <div class="purchase-item-detail">
                        <div>
                            <span class="purchase-item-name">${item.nombre}</span>
                            <span class="purchase-item-quantity">x${item.cantidad}</span>
                        </div>
                        <div class="purchase-item-price">$${(item.precio * item.cantidad).toLocaleString()}</div>
                    </div>
                `).join('')}
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="purchase-status">${compra.estado}</span>
                ${compra.metodoPago ? `<small style="color: var(--gray);">Pagado con ${compra.metodoPago.tipo.charAt(0).toUpperCase() + compra.metodoPago.tipo.slice(1)} ****${compra.metodoPago.numero.slice(-4)}</small>` : ''}
            </div>
        `;
        
        purchaseHistory.appendChild(purchaseItem);
    });
}

// Funciones de navegación
function scrollToCatalog() {
    document.getElementById('catalogo').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    // Crear notificación temporal
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-green);
        color: var(--primary-green);
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 1002;
        animation: slideIn 0.3s ease-out;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Funciones para menú de usuario
function toggleUserMenu() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    document.getElementById('userModal').classList.add('active');
    if (usuario) {
        cargarDatosUsuario();
        document.getElementById('userForm').style.display = '';
        document.getElementById('userNotLogged').style.display = 'none';
        document.querySelector('#userModal .modal-footer').style.display = '';
    } else {
        document.getElementById('userForm').style.display = 'none';
        document.getElementById('userNotLogged').style.display = '';
        document.querySelector('#userModal .modal-footer').style.display = 'none';
    }
}
function closeUserModal() {
    document.getElementById('userModal').classList.remove('active');
}

function cargarDatosUsuario() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    if (!usuario) return;
    document.getElementById('userName').value = usuario.username || '';
    document.getElementById('userEmail').value = usuario.email || '';
    document.getElementById('userPassword').value = usuario.password || '';
    mostrarTarjetasUsuario();
}

function saveUserData() {
    const usuario = JSON.parse(localStorage.getItem('usuario_logueado'));
    if (!usuario) return;
    usuario.username = document.getElementById('userName').value;
    usuario.email = document.getElementById('userEmail').value;
    usuario.password = document.getElementById('userPassword').value;
    localStorage.setItem('usuario_logueado', JSON.stringify(usuario));
    // Actualiza también en la lista de usuarios
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios = usuarios.map(u => u.username === usuario.username ? usuario : u);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mostrarNotificacion('Datos actualizados');
    closeUserModal();
}

function logout() {
    localStorage.removeItem('usuario_logueado');
    metodosPago = []; // Limpia los métodos de pago en memoria
    window.location.href = 'viveroinicio.html';
}

// Mostrar tarjetas del usuario en el menú
function mostrarTarjetasUsuario() {
    const cardsDiv = document.getElementById('userCards');
    cardsDiv.innerHTML = '';
    if (metodosPago.length === 0) {
        cardsDiv.innerHTML = '<p style="color:#888;">No hay tarjetas guardadas.</p>';
        return;
    }
    metodosPago.forEach((metodo, idx) => {
        const div = document.createElement('div');
        div.className = 'payment-method';
        div.innerHTML = `
            <span>${metodo.tipo.toUpperCase()} ****${metodo.numero.slice(-4)}</span>
            <button class="icon-btn small" onclick="eliminarMetodoPago(${idx})"><i class="fas fa-trash"></i></button>
        `;
        cardsDiv.appendChild(div);
    });
}
// Agregar estilos de animación para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 