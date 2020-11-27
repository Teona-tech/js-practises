const exampl = {
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
};

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(exampl) {
        Object.getOwnPropertyNames(exampl).forEach((item) => {
            if (exampl[item] instanceof Array) {        
                this[item]=this[item].concat(exampl[item]);


            }else if (!(exampl[item] instanceof Array) && exampl[item] instanceof Object) {
                if (!this.hasOwnProperty(item)) {
                    this[item] = {}
                };
                this[item].mergeDeepRight(exampl[item]);

                
            }else this[item] = exampl[item];



        });


    }


});

data.mergeDeepRight(exampl);

console.log(data);
console.log(data.contact.meta.tags);