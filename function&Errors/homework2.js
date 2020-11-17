var sia = [1,2,3];

function each_from_sia(lista) {
   if(lista.length===0){
      throw new Error('Error: parameter can\'t be an empty');
   }else if(lista instanceof Array == false){
      throw new Error('Error: parameter type should be an array');
   }else if (lista.length>=1){
        var a=lista.splice(0,1);
        console.log(a[0]);
        if (lista.length == 0) {
            return;
        }
        each_from_sia(lista);

   }
    
}




try {
   each_from_sia(sia);
}catch(err){
  console.log(err.message);
}

