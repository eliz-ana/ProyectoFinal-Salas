const productos = [
  {
    id: 10,
    stock: 10,
    nombre: "remera",
    descripcion: "remera estampada",
    precio: 7000,
    imagen: "../imagenes/ropa/remera5.jpg",
  },
  {
    id: 1,
    stock: 10,
    nombre: "remera",
    descripcion: "remera gris",
    precio: 7000,
    imagen: "../imagenes/ropa/2remera-gris.jpg",
  },
  {
    id: 2,
    stock: 10,
    nombre: "remera",
    descripcion: "remera blanca",
    precio: 6000,
    imagen: "../imagenes/ropa/1camiseta-blanca.jpg",
  },
  {
    id: 3,
    stock: 10,
    nombre: "camisa",
    descripcion: "camisa blanca",
    precio: 16000,
    imagen: "../imagenes/ropa/7camisa-blanca.jpg",
  },
  {
    id: 4,
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean claro",
    precio: 26000,
    imagen: "../imagenes/ropa/9pantalon-jean.jpg",
  },
  {
    id: 5,
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean clasico",
    precio: 25000,
    imagen: "../imagenes/ropa/10pantalon-jean.jpg",
  },
  {
    id: 6,
    stock: 10,
    nombre: "pantalon",
    descripcion: "jean azul obscuro",
    precio: 23000,
    imagen: "../imagenes/ropa/pantalonPortada.jpg",
  },
  {
    id: 7,
    stock: 10,
    nombre: "bermuda",
    descripcion: "bermuda beige ",
    precio: 16000,
    imagen: "../imagenes/ropa/bermudaBeige.jpg",
  },
  {
    id: 8,
    stock: 10,
    nombre: "bermuda",
    descripcion: "bermuda negra",
    precio: 18000,
    imagen: "../imagenes/ropa/bermuda2.jpg",
  },
  {
    id: 9,
    stock: 10,
    nombre: "camisa",
    descripcion: "camisa azul",
    precio: 16000,
    imagen: "../imagenes/ropa/camisa2.jpg",
  },
];
//-----llamado de html-------------

const cardContainer = document.querySelector(".card-container");
const inputBuscar = document.querySelector("#input-buscar");
const botonBuscar = document.querySelector("#boton-buscar");
const verTodo = document.querySelector("#ver-todo");
const infoResultado = document.querySelector(".info-resultado");

//   ---------   generar card y contenido -----------
//   ---------   generar card y contenido -----------
function cargaDeCards(productolink) {
  productolink.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-precio">Precio: $ ${producto.precio}</p>
        <button type="button" id="${producto.id}" class="btn btn-card btn-info">Comprar</button>
        
    </div>
  
    `;
    cardContainer.appendChild(div);
  });
}
//------llamado a la funcion para ver las cards-----
cargaDeCards(productos);

//-----filtrado de los productos-------
const filtrar = () => {
  cardContainer.innerHTML = "";

  const texto = inputBuscar.value.toLowerCase();
  console.log(inputBuscar.value);
  //--la bandera es para el .info-resultado----
  let bandera = false;
  for (producto of productos) {
    let nombre = producto.nombre;
    if (nombre.indexOf(texto) !== -1) {
      bandera = true;
      console.log(nombre);
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-precio">Precio: $ ${producto.precio}</p>
        <button type="button" id="${producto.id}" class="btn btn-card btn-info">Comprar</button>
        
    </div>
  
    `;
      cardContainer.appendChild(div);
    }
  }
  if (!bandera) {
    infoResultado.innerHTML = `
    Elemento no localizado
    `;
  }
  inputBuscar.value = "";
};

botonBuscar.addEventListener("click", filtrar);
//-----ver todo en el filtro------
verTodo.addEventListener("click", function () {
  cardContainer.innerHTML = "";
  cargaDeCards(productos);
});
//-----agregar evento al boton comprar-----
