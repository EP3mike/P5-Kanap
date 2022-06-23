//GET request function using fetch, will request all products contained by api
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/products');

        if(!response.ok) {
            throw new Error('Failed to fetch Kanap products: ${response.status}');
        }
        return response.json();
    }   catch(e) {
        console.log(e);
    }

}

//function to insert products from api into dom, takes html element id parameter

function insertProducts(containerElementId) {
    const containerElementId = document.getElementById(containerElementId);

    if(!containerElementId) {
        return 0;
    }

    fetchProducts().then(posts => {

    }).catch(e => {
        console.log(e);
    })
}