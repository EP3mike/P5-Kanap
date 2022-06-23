const apiUrl = 'http://localhost:3000/api/products'

//GET request function using fetch, will request all products contained by api
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);

        if(!response.ok) {
            throw new Error('Failed to fetch Kanap products: ${response.status}');
        }

        // const products = await response.json();
        // return products;
        return await response.json();
    }   catch(e) {
        console.log(e);
    }

}

//function to insert products from api into dom, takes html element id parameter to insert into

function insertProducts(productContainerElementId) {
    const productContainerElementId = document.getElementById(productContainerElementId);

    if(!productContainerElementId) {
        return 0;
    }

    fetchProducts()
    .then(products => {
        if(!products) {)
            productContainerElementId.innerHTML = 'No products fetched!';
            return 0;
        }

        for( const product of products) {
            productContainerElementId.appendChild(createProductElement(product));
        }


    })
    .catch(e => {
        console.log(e);
    });
}

//function to create a new product dom element for the returned info from api, ie new img,title,description
function createProductElement(product) {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', `${apiUrl}/${product.id}`);
    anchorElement.setAttribute('target', '_blank');


    const articleElement = document.createElement('article');
    anchorElement.appendChild(articleElement);

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', product.imageURL);
    imageElement.setAttribute('alt', product.altTxt);
    articleElement.appendChild(imageElement);


    const titleElement = document.createElement('h3');
    titleElement.innerHTML = product.name;
    articleElement.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = product.description;
    articleElement.appendChild(descriptionElement);


    return articleElement;

    
}


insertProducts('items');