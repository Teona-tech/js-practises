class Validator {
    
    isEmail(email) {
      var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      
      return regex.test(email);
      
    }

    isDomain(domain) {
      var regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
      return regex.test(domain);
    }

    isDate(date) {
      var regex = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
      return regex.test(date);
    }

    isPhone(phone) {
      var regex =/^[\+]?\d{2,}?[-\s\.]?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im;
      return regex.test(phone);
    }
}

var validator = new Validator ();
console.log(validator.isDate("22.10.2010"));
console.log(validator.isDomain("teona.com"));
console.log(validator.isEmail("teona.porchkhidze.2@btu.edu.ge"));
console.log(validator.isPhone('+995 595-16-00-36')); 

