class DB {
    constructor (){
       this.person = new Map();
       this.id = 0
    }
    
    create(person){
        if(typeof person !== 'object' || !person.name || !person.age || !person.salary || !person.country){
            throw new Error("blabla");
        }
        let user = this.person.set(this.id.toString(), person);
        let tempid = this.id
        this.id++;
        return tempid.toString();
        
    }
    read(id){
        if(typeof id !== 'string'){
            throw new Error ("id must be String");
        }
        else if (this.person.has(id) === false){
            return null;
        }
        else if(this.person.has(id)){
           return this.person.get(id);
      } 
    } 
    readAll(){
    if(arguments.length != 0) throw new Error('there shouldnt be any arguments')
    	let array = [];
      this.person.forEach((index)=>array.push(index));
      return array;
    }
    update(id,obj){
			if(!this.person.has(id) || typeof id != 'string' || Object.values(obj).length < 1)
      throw new Error('wrong id')
      this.person.set(id,{...this.person.get(id),...obj})
      return id;
    }
    delete(id){
    console.log(id, this.person.get(id))
    if(!this.person.has(id))throw new Error('that person doesnt exist')
    	return this.person.delete(id)
    }

    find(query) {
        if ( typeof query !== 'object' || !query ) {
            throw new Error("Object is required")
        }

        else {
            var users = this.readAll()

            var results =  users.filter(user => {

                var sia = []

                for (var i of Object.keys({ ...query })) {

                    if (i === "salary" || i === "age" )  {

                        var { min, max } = query[i]

                        if(!min && !max){
                            throw new Error("query must have  min or max")
                        }

                        if(max){
                            sia.push(user[i] <= max)
                        } 

                        if(min) {
                            sia.push(user[i] >= min)
                        }
                    }
                    if ( i === "country" || i === "name") {
                        sia.push(query[i] === user[i])
                    }
                }


                return sia.every(match=>match)
            })
            return results
    
        }   
       
    }
}


const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};
const person2 = {
    name: 'teona', // required field with type string
    age: 22, // required field with type number
    country: 'ua', // required field with type string
    salary: 500 // required field with type number
};
const person3 = {
    name: 'lika', // required field with type string
    age: 26, // required field with type number
    country: 'ua', // required field with type string
    salary: 600 // required field with type number
};

const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};

const db = new DB();
const id = db.create(person);

const id2 = db.create(person2);

const id3 = db.create(person3);

console.log(id);
console.log(id2);
console.log(id3);

const customers = db.find(query); // array of users

console.log(customers);