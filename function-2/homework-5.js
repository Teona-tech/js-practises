function compose(a) {
	const word = []
	const upperargs = arguments
	return function(){
  	for (var i=0; i < upperargs.length; i++) {
    	word.push(upperargs[i](''))
    }
    word.push(arguments[0])
    console.log(word.reverse().join(''))
  }
}

compose((str) => {return str + 'c';},(str) => {return str + 'b';})('a')

