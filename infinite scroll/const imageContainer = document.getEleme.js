//const imageContainer = document.getElementById(`image-Container`);
//const loader = document.getElementById(`loader`);
let photosArray = [];

const count = 10;
const apiKey = `JxHL96518YXp_e1F1AuuK1CB_3zUzTA85Dga8LPaJ9Q`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
console.log(apiUrl)
console.log(`This is the photos array ${photosArray}`);
console.log(`this is the photos array index 3 array ${photosArray[3]}`)




async function getPhotos() {
    console.log(`i am printed from inside async`)
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        console.log(`This is the photos array ${photosArray}`);
        console.log(`this is the response ${response}`);

    } catch (error) {};


    getPhotos()

    ;


}