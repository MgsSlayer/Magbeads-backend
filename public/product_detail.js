console.log(window.location.href);
console.log(window.location.search);
//FETCH PRODUCT AND DISPLAY DETAILS
 const params = new URLSearchParams(window.location.search);
 console.log(params);
 const itemID = params.get('id');
 console.log(itemID);
fetch(`http://localhost:3001/product/${itemID}`)
.then((res) => res.json())
.then((item) => {


const image = document.getElementById('image_container');
const name  = document.getElementById('product_name');
const price = document.getElementById('product_id');
const details = document.getElementById('product_desc_page');

image.style.background = `url('${item.image}')`;
image.style.backgroundSize = 'cover';
image.style.backgroundPosition = 'center';
name.innerHTML = `${item.name}`;
price.innerHTML = `${item.price}`;
details.innerHTML = `${item.description}`

})
.catch((err) => {
  console.log(`${err.name}`);
})