function rmHtmlTags (stringa) {
    if (typeof stringa ==='string'){
      return stringa.replace( /(<([^>]+)>)/ig, '');
    }else{
      throw new Error ("string is required");
    }
  }
  
  
  rmHtmlTags('<p><strong><em>Content</em></strong></p>')