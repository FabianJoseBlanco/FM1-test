"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

  let list =new LinkedList();
  // let node = new Node();

  LinkedList.prototype.add = function(value) {
    let node = new Node(value),
    current = this.head;
    // Si está vacia
    if (!current) {
        this.head = node;
        this._length++;
        return node;
    }
    // Si no esta vacia, recorro hasta encontrar el último
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
  };

  LinkedList.prototype.remove = function(value) {
    //Si la lista no tiene valores
    if (this.head === null) {
      return null;
    }
    //Si la lista solo tiene un valor
    if (this.head.next === null) {
      let RemoverNodo = this.head;
      this.head = null
      return RemoverNodo.value;
    }

    //Si la Lista Tiene muchos Nodos
    let current =this.head;
      while (current.next.next) {
        current = current.next;
      }
      let RemoverNodo = current.next; //Guarda la referencia del ultimo Nodo
      current.next = null;//Asigna el siguiente Null
      return RemoverNodo.value;// Retorna el Valor del Ultimo Nodo
  }

  LinkedList.prototype.search = function(value) {
    //Si la lista no tiene valores
    if (this.head === null) {
      return null;
    }
    let current = this.head; //Asignamos el Valor de la cabeza a la variable auxilizar Current para guardar la referencia
    while (current) { // Mientras Tengamos un valor true en Current
      if (current.value === value) { //Si el currente es igual a el valor recibido en la funcion
        return current.value;      
      }else if (typeof value === 'function') { // Si el valor value es pasado por un callback(recibiendo una funcion) typeof valida el tipo de dato que esta reciiendo de la funcion
        if (value(current.value) === true) {
          return current.value;
        }
      }
        current = current.next;               
      }
    return null;
  }


    




/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function(key){
  let sumador = 0;
  for (let i = 0; i < key.length; i++) {
    sumador = sumador +key.charCodeAt(i);  //charCodeAt calcula valor numerico correspondite aca caracter del string  
  }
  return sumador % this.numBuckets;  
}

HashTable.prototype.set = function(key,value) {
  if (typeof key !== 'strings') { //Validamos que Key sea un STRINGS
     throw new TypeError('Key Debe ser un string')    
  }
  let posArray = this.hash(key);
    if (this.buckets[posArray] === undefined) { //SI la posición en el arreglo esta vacia crea un arreglo en  la posición
      this.buckets[posArray] = {};    
      }
     this.buckets[posArray][key] = value; 
};

HashTable.prototype.get = function(key) {
  let posArray = this.hash(key);
  this.buckets[posArray]=value;
};
HashTable.prototype.hasKey = function(key) {
  let posArray = this.hash(key);
};



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
