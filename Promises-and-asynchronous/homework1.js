const send = url => new Promise((resolve,reject) => 
get(url, (error, meta, body) => {
   if(meta.status !== 200){
    let statusCode = meta.status;
    reject ('We have error, status code: ${statusCode}');

   }
   else {
    const { data } = JSON.parse(body);
    resolve(data);
   }
}
))
const get = require('fetch').fetchUrl;

const url = 'https://lab.lectrum.io/geo/api/countries?size=1';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });