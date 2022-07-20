class Fetch {

static async GetFromDataBase(word) {

let address = "https://tureng.com/en/turkish-english/" + word;


function Get(url) {

return new Promise((resolve,reject) => {
    fetch(url)
    .then(result => result.text())
    .then(data => {resolve(data)})
    .catch(err => reject(err));
});

}


let data;

await Get(address).then(result => {data = result}).catch(err => console.log(err)); 

return data;
}

}