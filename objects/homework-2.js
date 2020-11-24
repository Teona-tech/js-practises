var Books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10),
        get days(){
            let current_day = Date.now()
            let daysAgo = Math.floor((current_day - this.dateOfRead) / (1000*60*60*24));
            return daysAgo;
        }
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5),
        get days(){
            let current_day = Date.now()
            let daysAgo = Math.floor((current_day - this.dateOfRead) / (1000*60*60*24));
            return daysAgo;
        }
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
        console.log(item.author +" have read" + " "+ item.title +" book yet");

     }else{
       console.log(item.author + ' has read' + " " + item.title + ' ' + item.days + ' days ago');

     }
     
   }
   sia.forEach(reading);
 
 }
 
 
 readingStatus(Books);