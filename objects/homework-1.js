var Books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
 ];
 
 
 function readingStatus(sia){
   function reading(item){
     if (item.haveRead === false){
       console.log(item.author +" haven't read" + " "+ item.title +" book");
     }else{
       console.log(item.author +" have read" + " "+ item.title +" book yet");
     }
     
   }
   sia.forEach(reading);
 
 }
 
 
 readingStatus(Books);