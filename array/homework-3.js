function reverse (arr) {
  if (arr.length > 0){
     var c = arr.length-1;
      for (var i=arr.length-1;i>=0;i--){
        c++;
        arr[c]=arr[i];


      }

      for (var o = 0;o < arr.length;o++){
        arr.shift();


      }
      return console.log(arr);
  }else if (arr.length === 0){
      throw new Error('Error: parameter can\'t be an empty');
  }else if(arr instanceof Array == false){
      throw new Error('Error: parameter type should be an array');
  }
  

  
}

reverse(["hi","george"]);
