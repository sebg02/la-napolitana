const btnToggle = document.getElementById("toggleBtn");
const toggleBars = document.getElementById("toggleBars");
const toggleX = document.getElementById("toggleX");
const menu = document.getElementById("menu");

btnToggle.addEventListener("click", () => {
  menu.classList.toggle("visible-menu");
  menu.classList.toggle("hidden");
  toggleBars.classList.toggle("hidden");
  toggleX.classList.toggle("hidden");
});

// PIDE EN LÍNEA

const productos = document.querySelectorAll('.producto input[type="number"]');
const resumenDiv = document.getElementById("resumen");

const productosConfig = {
  pizza_margarita: { precio: 25000, nombre: "Pizza Margarita" },
  pizza_hawaiana: { precio: 28000, nombre: "Pizza Hawaiana" },
  pizza_pepperoni: { precio: 30000, nombre: "Pizza Pepperoni" },
  pizza_vegetariana: { precio: 28000, nombre: "Pizza Vegetariana" },
  pizza_cuatro_quesos: { precio: 32000, nombre: "Pizza Cuatro Quesos" },
  pizza_carne: { precio: 30000, nombre: "Pizza Carne" },
  pizza_pollo_bbq: { precio: 30000, nombre: "Pizza Pollo BBQ" },
  pizza_mexicana: { precio: 32000, nombre: "Pizza Mexicana" },
  lasagna_carne: { precio: 26000, nombre: "Lasaña de Carne" },
  lasagna_pollo: { precio: 26000, nombre: "Lasaña de Pollo" },
  lasagna_verduras: { precio: 25000, nombre: "Lasaña de Verduras" },
  lasagna_espinacas: { precio: 26000, nombre: "Lasaña de Espinacas" },
  spaghetti_bolognesa: { precio: 22000, nombre: "Spaghetti Bolognesa" },
  spaghetti_carbonara: { precio: 23000, nombre: "Spaghetti Carbonara" },
  penne_alfredo: { precio: 24000, nombre: "Penne Alfredo" },
  penne_arrabiata: { precio: 23000, nombre: "Penne Arrabiata" },
  fettuccine_primavera: { precio: 25000, nombre: "Fettuccine Primavera" },
  bebida_gaseosa: { precio: 4000, nombre: "Bebida Gaseosa (350 ml)" },
  bebida_agua_mineral: { precio: 3000, nombre: "Bebida Agua Mineral (500 ml)" },
  bebida_jugos_naturales: { precio: 5000, nombre: "Bebida Jugos Naturales" },
};

for (const id in productosConfig) {
  const inputElement = document.getElementById(id);
  if (inputElement) {
    inputElement.setAttribute("precio", productosConfig[id].precio);
    inputElement.setAttribute("nombre", productosConfig[id].nombre);
  }
}

productos.forEach((producto) => {
  producto.addEventListener("input", () => {
    mostrarResumen(productos, resumenDiv);
  });
});

function mostrarResumen(productos, divResumen) {
  let total = 0;
  let resumenHTML = "";

  productos.forEach((p) => {
    const cantidad = parseInt(p.value) || 0;
    if (cantidad > 0) {
      const nombreProducto = p.getAttribute("nombre");
      const precioProducto = parseInt(p.getAttribute("precio"));
      const subtotalProducto = cantidad * precioProducto;

      resumenHTML += `
                    <div class="resumen-item">
                        <span class="nombre">${nombreProducto}</span>
                        <span class="cantidad">x${cantidad}</span>
                        <span class="subtotal">$${subtotalProducto.toLocaleString()}</span>
                    </div>
                `;

      total += subtotalProducto;
    }
  });

  if (total > 0) {
    resumenHTML += `
                <div class="total">
                    <span>Total</span>
                    <span></span>
                    <span>$${total.toLocaleString()}</span>
                </div>
            `;
  }

  divResumen.innerHTML = resumenHTML;
}

function formatoMoneda(valor) {
  return valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}