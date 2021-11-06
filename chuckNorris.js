 fetch('https://api.chucknorris.io/jokes/random')
 .then((response) => {
 return response.json();
 console.log(response.json)
 })
 .then((jsonObject) => {
 document.write(jsonObject.value);
 console.log(jsonObject.value)
 });


// just a test for git 
 
 
 