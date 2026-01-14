// جلب ID من الرابط
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// البحث عن المنتج
const product = products.find(p => p.id === productId);

const container = document.getElementById("product-details");

if (product) {
  container.innerHTML = `
    <div class="details-grid">
<div class="details-image">
  <img src="${product.image}" alt="${product.name}">
</div>
      <div class="details-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
<a href="https://api.whatsapp.com/send?phone=96176410849&text=مرحبًا، أود طلب هذا المنتج: ${encodeURIComponent(product.name)}" target="_blank" class="btn">اطلب عبر واتساب</a>
      </div>
    </div>
  `;
} else {
  container.innerHTML = "<p>المنتج غير موجود.</p>";
}
