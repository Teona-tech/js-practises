const get = require('fetch').fetchUrl;
    let url = 'https://lab.lectrum.io/geo/api/countries';
    class Countries{
        constructor(url){
            if (typeof url !== 'string') throw new Error('type of url should be string')
            
            this.url = url;
        }
        send = countrieslength => new Promise((resolve, reject) => {
            if(typeof countrieslength !== 'number')  throw new Error ('type of countrieslength should be number')
            url = url.concat('?size=', countrieslength);
            get(url, (error, meta, body) => {
    
                if(meta.status !== 200){
                    let statusCode = meta.status;
                    reject (`We have error, status code: ${statusCode}`);
                
                   }
                   else {
                    const { data } = JSON.parse(body);
                    resolve(data);
                   }
                
            });
        })
        
    }

    const countries = new Countries(url);
    
    (async() => {
        try {
            const data = await countries.send(3);
            console.log(data); // array of countries
        } catch (error) {
            console.log(error);
        }
    })();