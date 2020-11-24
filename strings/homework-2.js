function extractCurrencyValue(something){
    if (typeof something ==="string"){
      if (!isNaN(something[0]) === true){
        return Number(something);
        
      }else{
        something = something.replace(/\D/g,'');
  
        return Number(something);
      }
    }else{
      throw new Error ("string is required");
    }
  }
  
  
  extractCurrencyValue("$12%34");
  