const products = [
  {
    id: 1,
    name: "ساعة خشبية فنية",
    price: "150$",
    image: "images/products/table.png",
    description: "طاولة مصنوعة يدويًا من خشب طبيعي عالي الجودة"
  },
  {
    id: 2,
    name: "ساعة خشبية فنية",
    price: "60$",
    image: "images/products/shelf.png",
    description: "رف أنيق مناسب للديكور العصري"
  },
  {
    id: 3,
    name: "ساعة خشبية فنية",
    price: "80$",
    image: "images/products/art.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  },
  {
    id: 4,
    name: "انارة فنية",
    price: "80$",
    image: "images/products/lamp1.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  },
  {
    id: 5,
    name: "انارة فنية",
    price: "80$",
    image: "images/products/lamp2.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  },
  {
    id: 6,
    name: "انارة فنية",
    price: "80$",
    image: "images/products/lamp3.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  },
  {
    id: 7,
    name: "ستاند اغراض شخصية مميزة",
    price: "80$",
    image: "images/products/stand1.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  },
  {
    id: 8,
    name: "لوحة فنية خشبية",
    price: "80$",
    image: "images/products/stand2.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  }
];

const productsList = document.getElementById("products-list");

products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="price">${product.price}</div>
<a href="product.html?id=${product.id}" class="btn">عرض التفاصيل</a>
  `;

  productsList.appendChild(productCard);
});


