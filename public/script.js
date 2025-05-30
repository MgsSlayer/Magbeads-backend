//FETCH AND DISPLAY PRODUCTS
fetch('http://localhost:3001/products')
.then((res) =>  res.json() )
.then((data) => { 
  console.log(data)
  const items = document.getElementById('items');
  //console.log(items);
  data.forEach((item) => {
    const section = document.createElement('section');
    const placeholderImage = 'https://res.cloudinary.com/dbcdml0yi/image/upload/v1748306396/placeholder_vzi3ev.jpg';
    section.className = 'item';
   section.onclick = () => {
     console.log(item._id);
  if (item._id) {
    window.location.href = `product_detail?id=${item._id}`;
    console.log(item._id);
  } else {
    alert('Product ID not found!');
  }
};
    
    section.innerHTML = `
     <div class="itm_img" style="background: url('${item.image || placeholderImage }');background-size: cover;background-position: center;"><i class="fa fa-heart"></i></div> 
                                    <div class="desc">
                                        <h3>${item.name}</h3>
                                        <h4>₦${item.price}</h4>
                                </div>
    `;
    items.appendChild(section);
  })
 })
.catch((err) => {
  console.error('Error fetching products');
})



// ANIMATION FOR SIGN IN/UP PAGE (DESKTOP)

document.addEventListener("DOMContentLoaded", function() {
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


  if (signUpButton && container) {
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
  }


 if (signInButton && container) {
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
})
  
// ANIMATION FOR SIGN IN/UP PAGE (MOBILE)
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "15px";
    z.style.left = "120px";
}

function login(){
    x.style.left = "15px";
    y.style.left = "450px";
    z.style.left = "0px";
}

// HAMBURGER MENU FOR MOBILE
function toggleMenu() {
	const menu = document.querySelectorAll('.menu-links, .harmburger-icon');
	
	menu.forEach(element =>{
	  element.classList.toggle("open");
	})
  }

  document.addEventListener("click", function (event) {
    const menu = document.querySelector(".menu-links");

    if (!menu.contains(event.target)) {
        menu.classList.remove("open");
    }
});

function toggle_Sub_menu(){
  const sub = document.getElementById('sub');

  sub.classList.toggle("open")
}

// const desk_menu = document.querySelector(".sub-item");
// const desk_submenu = document.querySelector(".sub-list");

// desk_menu.addEventListener("mouseenter", ()=>{
//   desk_submenu.style.display = "flex";
// });

// desk_menu.addEventListener("mouseleave", ()=>{
//   setTimeout(()=>{ 
//     if (!desk_submenu.matches(":hover")){
//     desk_submenu.style.display = "none";
//   }}, 5000);
 
// });

// desk_submenu.addEventListener("mouseenter", () => {
//   desk_submenu.style.display = "flex"; // Ensures submenu stays open when hovered
// }); 

//API INTERACTION 



