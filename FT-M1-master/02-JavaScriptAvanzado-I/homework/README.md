
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; //no declarada 
var a = 5; //5
var b = 10;//10 
var c = function(a, b, c){ //(8,9,10)
  var x = 10;
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) { //(8,9,10)
    b = a;// b=8
    console.log(b);//8
    b = c;//b = 10
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//b = 10
}
c(8,9,10);
console.log(b);//b = 10
console.log(x); //x =1 o no declarada
```

```javascript
console.log(bar);//bar no declarada
console.log(baz);//baz no declarada
foo(); //variables metasintácticas lo cual significa que son nombres de relleno en códigos de ejemplo
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//instructor = "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor);//instructor = "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();//instructor = "Franco"
console.log(instructor);//instructor = "Tony"
```

```javascript
var instructor = "Tony";//instructor = "Tony"
let pm = "Franco";//pm = "Franco"
if (true) {
    var instructor = "The Flash";//instructor = "The Flash"
    let pm = "Reverse Flash";//pm = "Reverse Flash"
    console.log(instructor);//instructor = "The Flash"
    console.log(pm);//pm = "Reverse Flash"
}
console.log(instructor);//instructor = "The Flash"
console.log(pm);//pm = "Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6 
4 + 5 + "px" //9px
"$" + 4 + 5//$9
"4" - 2//2
"4px" - 2//undefined
7 / 0//undefined
{}[0]//array
parseInt("09")//9
5 && 2 // 5 y 2
2 && 5 //2 y 5
5 || 0 //5
0 || 5//0
[3]+[3]-[10] //-[4]
3>2>1 //true
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//a no definido
   console.log(foo());// 2
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//Meow Mix'
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//'Aurelio De Rosa' hace referencia a funcion getFullname adentro de la propiedad prop

var test = obj.prop.getFullname;

console.log(test());//'Juan perez'
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);//primero "1"
   setTimeout(function() { console.log(2); }, 1000)//cuarto "2"
   setTimeout(function() { console.log(3); }, 0);//tercero "3"
   console.log(4);//segundo "4"
}

printing();
```
