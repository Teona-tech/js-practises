function getDivisiors(num) {
    if (num > 0) {
      var sia=[];
      var i;
      for (i=1;i<=num;i++){
        if (num % i === 0){
          sia.push(i);
        }
      }
     return sia;
  
    }else if (typeof num !== 'number'){
      throw new Error('parameter type is not a Number');
    }else if (num == 0){
      throw new Error("parameter can't be a 0");
    }else if (num < 0){
      throw new Error("parameter can't be less than 0");
    }
  
  
     
  
}
  
try {
    console.log(getDivisiors(0));
}catch(err){
    console.log(err.message);
  
}