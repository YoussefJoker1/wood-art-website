const products = [
  {
    id: 1,
    name: "طاولة خشبية يدوية",
    price: "150$",
    image: "table.png",
    description: "طاولة مصنوعة يدويًا من خشب طبيعي عالي الجودة"
  },
  {
    id: 2,
    name: "رف حائط خشبي",
    price: "60$",
    image: "shelf.png",
    description: "رف أنيق مناسب للديكور العصري"
  },
  {
    id: 3,
    name: "لوحة فنية خشبية",
    price: "80$",
    image: "art.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  },
  {
    id: 4,
    name: "لوحة فنية خشبية",
    price: "80$",
    image: "lamp1.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  },
  {
    id: 5,
    name: "لوحة فنية خشبية",
    price: "80$",
    image: "lamp2.png",
    description: "قطعة فنية تضيف لمسة دافئة للمكان"
  },
  {
    id: 6,
    name: "لوحة فنية خشبية",
    price: "80$",
    image: "lamp3.png",
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

