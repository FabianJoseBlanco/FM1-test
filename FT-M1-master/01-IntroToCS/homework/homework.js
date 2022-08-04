'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
     //suma = suma + +num[i] * 2 ** ((num.length-1 )- i);
     suma = suma + num[i] * 2 ** ((num.length-1 )- i);
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  
  var division=0; 
  var binario=[]; 
  
  do { 
      division=num/2; 
      if (num%2==0) { 
          binario.unshift("0"); 
      } 
      else { 
          binario.unshift("1"); 
      } 
      num=Math.floor(division); 
      }
      while(num >= 1); 
       binario=binario.join(""); 

      return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}