var arr = [[],"hi"];

function arr_or_not(a){
  if (Array.isArray(a)=== false){
      throw new Error("array is required");

  }
}
function f(sia){

   sia.every(arr_or_not);
   sia = sia.toString();
   sia=sia.split(",");
   var num = 0;
   for (i of sia){
    i=Number(i);
    num+=i;

   }
   
   if (isNaN(num)===true){
      throw new Error("number is required");

   }else if (isNaN(num)===false){
      return num;
   }

  

}

console.log(f(arr));
