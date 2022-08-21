"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


BinarySearchTree.prototype.size = function() {
  if (this.right === null && this.left === null) {
    return 1;    
  }
  if (this.right === null && this.left !== null) {
    return 1 + this.left.size();    
  }
  if (this.right !== null && this.left === null) {
    return 1 + this.right.size();    
  }
  if (this.right !== null && this.left !== null) {
    return 1 + this.right.size() + this.left.size();    
  }
  
}  
BinarySearchTree.prototype.insert = function(value) {
    if (value > this.value) { // se valida a que lado va el nodo (este if va a la derecha)
      if (this.right === null) { // si el this.rigt esta null le asignamos el valoe recibido por data
        this.right = new BinarySearchTree(value); 
      }else{
        this.right.insert(value); // si this right no es null agregamos el valor data(toma el arbol a la derecha y volver a ejecutar se utiliza recusividad)
      }
  }
  //Ahora Agregamos nodos a la izquierda  
  if (value < this.value) { // se valida a que lado va el nodo (este if va a la izquierda)
    if (this.left === null) { // si el this.left esta null le asignamos el valoe recibido por data
      this.left = new BinarySearchTree(value); 
    }else{
      this.left.insert(value); // si this left no es null agregamos el valor data(toma el arbol a la izquierda y volver a ejecutar se utiliza recusividad)
    }
  } 
}  
BinarySearchTree.prototype.contains = function(value) {
    if (value === this.value) {
        return true;
    }

    if (value > this.value) { 
      if (this.right === null) { 
        return false;
      }else{
        return this.right.contains(value);
      }
  }
  if (value < this.value) { 
    if (this.left === null) { 
      return false;
    }else{
      return this.left.contains(value);
    }
  }
}  
BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
    if (order === 'pre-order') {
        // cabeza - left - right 
        cb(this.value);
        if (this.left !== null) {
          this.left.depthFirstForEach(cb,order);
        }
        if (this.right !== null) {
          this.right.depthFirstForEach(cb,order);
        }

    }  
    else if (order === 'post-order') {
        //  left - right -cabeza -
        if (this.left !== null) {
          this.left.depthFirstForEach(cb,order);
        }
        if (this.right !== null) {
          this.right.depthFirstForEach(cb,order);
        }
        cb(this.value);
    } 
    
    else {
      // order === 'in -order'
      //si no se provee ningún parámetro, hará el recorrido "in-order" por defecto
      // left -root- right
      if (this.left !== null) {
        this.left.depthFirstForEach(cb,order);
      }
      cb(this.value);

      if (this.right !== null) {
        this.right.depthFirstForEach(cb,order);
      }     
  } 
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb,array=[]) {

  if (this.left !== null) {
    array.push(this.left);
  }
  if (this.right !== null) {
    array.push(this.right);
  }
  cb(this.value);

  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb,array);
  }

}  



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
