const arr = [1,2,3]
let destination = 'right'

const rotate = (a, b, c) => {
	destination = c ? c : destination
	
 	for(let k = 0; k < b; k++){
	    if(destination == 'left'){
	      a.push(a.shift())
	    } else {
	      a.unshift(a.pop())
	    }
	  }
	 
    console.log(a)
   return a
   
}

rotate(arr,1,'left')
rotate(arr,1)
rotate(arr,2)