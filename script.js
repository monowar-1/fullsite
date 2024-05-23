let products = [
  {
    id: "1",
    title: "Gopal vog",
    price: 200,
    image: "./image/gopalvog.png",
  },
  {
    id: "2",
    title: "Gopal vog",
    price: 200,
    image: "./image/gopalvog.png",
  },
  {
    id: "3",
    title: "Gopal vog",
    price: 200,
    image: "./image/gopalvog.png",
  },
  {
    id: "4",
    title: "Gopal vog-26",
    price: 200,
    image: "./image/gopalvog.png",
  },
  {
    id: "5",
    title: "Deshi Lichu",
    price: 200,
    image: "./image/licu.jpg",
  },
  {
    id: "6",
    title: "Deshi Lichu",
    price: 200,
    image: "./image/licu.jpg",
  },
  {
    id: "7",
    title: "Deshi Lichu",
    price: 200,
    image: "./image/licu.jpg",
  },
  {
    id: "8",
    title: "Deshi Lichu",
    price: 200,
    image: "./image/licu.jpg",
  },
  {
    id: "9",
    title: "Banana",
    price: 159,
    image: "./image/banana.jpg",
  },
  {
    id: "10",
    title: "Banana",
    price: 159,
    image: "./image/banana.jpg",
  },
  {
    id: "11",
    title: "Banana",
    price: 159,
    image: "./image/banana.jpg",
  },
  {
    id: "12",
    title: "Banana",
    price: 159,
    image: "./image/banana.jpg",
  },
  {
    id: "13",
    title: "Banana Car",
    price: 159,
    image: "./image/banana-car.jpeg",
  },
  {
    id: "14",
    title: "Banana Car",
    price: 159,
    image: "./image/banana-car.jpeg",
  },
  {
    id: "15",
    title: "Banana Car",
    price: 159,
    image: "./image/banana-car.jpeg",
  },
  {
    id: "16",
    title: "Banana Car",
    price: 159,
    image: "./image/banana-car.jpeg",
  },
  {
    id: "17",
    title: "CaR",
    price: 999,
    image: "./image/car.jpg",
  },
];

let cartItem = [];

let hamBurger = document.querySelector(".icon");
let navItems = document.querySelector(".navitems");
let productDiv = document.querySelector(".products");
let showCart = document.querySelector(".cart");
let total = document.querySelector(".subtotal");

const sliderDiv = document.querySelector(".slider");
const sliderImage = document.querySelector(".img");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");

function showSub() {
  total.classList.toggle("hidden");
}
function showNav() {
  navItems.classList.toggle("hidden");
}

let images = [
  "./image/mango.jpg",
  "./image/mango-1.jpg",
  "./image/mango-2.jpg",
];
let i = 0;
sliderImage.src = images[i];
function left() {
  if (i > 0) {
    i--;
    sliderImage.src = images[i];
  } else {
    i = images.length - 1;
    sliderImage.src = images[i];
  }
}

btnPrev.addEventListener("click", back);
btnNext.addEventListener("click", forward);

let intervalId = setInterval(forward, 5500);

function back() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  sliderImage.src = images[i];
}
function forward() {
  i++;
  if (i > images.length - 1) {
    i = 0;
  }
  sliderImage.src = images[i];
}

/**Dynamically add product to HTML */

products.forEach((item) => {
  productDiv.innerHTML += `
	
	 <div class="product flex flex-col justify-center">
            <img src="${item.image}" class="product-image rounded-lg shadow-lg hover:bg-red-600">
            <p class="title text-sm font-bold text-center">${item.title}</p>
            <p class="price text-center">${item.price}</p>
            <button
          type="button"
          class="text-center bg-gray-50 p-1 rounded-lg shadow-lg shadow-slate-800 
          cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-900 group px-8 py-1"
		  onclick='cart(${item.id})'>
          <span
            class="relative z-10 text-orange-500 group-hover:text-white text-xl duration-500"
            >Add to cart</span
          >
          <span
            class="absolute w-full h-full bg-orange-500 -left-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"
          ></span>
          <span
            class="absolute w-full h-full bg-orange-500 -right-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"
          ></span>
        </button>
        </div>`;
});

function cart(i) {
  console.log(i);
  if (!cartItem.includes(i)) {
    cartItem.push(i);
  }

  let price = 0;
  showCart.innerHTML = "";
  cartItem.forEach((item) => {
    let product = products[item - 1];
    console.log(product);

    price += product.price;
    showCart.innerHTML += `
	<div class="product flex flex-col justify-center">
	<img src="${product.image}" class="product-image rounded-lg shadow-l w-20 shadow-amber-600">
	<p class="title text-sm font-bold text-center">${product.title}</p>
	<p class="price text-center">${product.price}</p>
            
    </div>`;

    total.innerHTML = ` Subtotal: ${price}`;
  });
}

/**Search */
let searchitem = document.querySelector("#search-item");
function ser(ele) {
  let SearchValue = ele.value.toLowerCase();
  searchitem.innerHTML = "";
  products.forEach((item) => {
    let title = item.title;
    if (title.toLowerCase().match(SearchValue)) {
      searchitem.innerHTML = `<div onclick='cart(${item.id})'>${title}</div>`;
      searchitem.classList.toggle("hidden");
    }
  });
}
