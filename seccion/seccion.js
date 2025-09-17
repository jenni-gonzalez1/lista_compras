const seccion = document.getElementById('seccion-lista');

const titulo = document.createElement('h3');
titulo.textContent = 'Lista de Compras';

const lista = document.createElement('ul');
lista.id = 'lista-compras';

seccion.appendChild(titulo);
seccion.appendChild(lista);

export function agregarProducto(nombre, precio) {
  const item = document.createElement('li');
  item.textContent = `${nombre} - Q ${precio.toFixed(2)}`;
  document.getElementById('lista-compras').appendChild(item);

  actualizarTotal(precio);
}

function actualizarTotal(precio) {
  const totalElem = document.getElementById('total');
  const valorActual = parseFloat(totalElem.textContent.replace('Q ', ''));
  const nuevoTotal = valorActual + precio;
  totalElem.textContent = `Q ${nuevoTotal.toFixed(2)}`;
}
