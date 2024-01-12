// Select elements using their IDs
const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');
const clearButton = document.getElementById('clearButton');
const searchInput = document.getElementById('searchInput');

// Create an XMLHttpRequest to fetch products data
let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();

http.onload = function(){
    // Check if the request is successful and process the data
    if(this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output ="";
        
        // Iterate through products and generate HTML output
        for(let item of products ){
            output += `
            <div class="product">
                <img src="${item.image}" alt="${item.image}">
                <p class="title">${item.title}</p>
                <p class="description">${item.description}</p>
                <p class="price">
                    <span>${item.price}</span>
                    <span>&euro;</span>
                </p>
                <p class="cart">Add to cart<box-icon name='cart-alt'></box-icon></p>
            </div>
            `;    
        }
        // Set the generated HTML to the products container
        document.querySelector('.products').innerHTML = output;
    }
}

// Event listeners for search and clear buttons
searchButton.addEventListener('click', function() {
    searchBar.style.display = 'block';
});

clearButton.addEventListener('click', function() {
    searchBar.style.display = 'none';
    searchInput.value = '';
});
