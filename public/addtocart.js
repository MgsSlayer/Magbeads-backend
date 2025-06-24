function addToCart(itemID) {

fetch(`http://localhost:3001/product/${itemID}`)
.then((res) => res.json())
.then((product) => {
const cart = JSON.parse(localStorage.getItem('cart')) || [];


const existing = cart.find((item) => item._id === product._id)
if(existing){
    existing.quantity += 1
}else{
    cart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
    })
}

localStorage.setItem('cart', JSON.stringify(cart));
alert('item added to cart')

console.log(cart);
})

}

document.addEventListener('click', function(event){
 if(event.target.classList.contains('add_to_cart')){
    const button = event.target;

    const product_id = button.dataset.id;
    const product_name = button.dataset.name;
    addToCart(product_id);
 }
})