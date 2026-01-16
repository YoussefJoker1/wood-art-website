console.log("product-details.js يعمل");

// 1️⃣ جلب الـ container
const container = document.getElementById("product-details");

// 2️⃣ جلب id من الرابط
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// 3️⃣ البحث عن المنتج
const product = products.find(p => p.id === productId);

// 4️⃣ التحقق قبل العرض
if (!container || !product) {
  console.error("المنتج غير موجود أو container غير موجود");
} else {
  container.innerHTML = `
    <div class="details-grid fade-in">

      <div class="details-image">
        <div class="image-frame">
          <img src="${product.image}" alt="${product.name}">
        </div>
      </div>

      <div class="details-info">
        <span class="badge">قطعة يدوية</span>
        <h2>${product.name}</h2>
        <p class="description">${product.description}</p>

        <div class="price-box">
          <span>السعر</span>
          <strong>${product.price}</strong>
        </div>

        <a href="https://api.whatsapp.com/send?phone=96176410849&text=مرحبًا، أود طلب هذا المنتج: ${encodeURIComponent(product.name)}"
           target="_blank"
           class="btn whatsapp">
          <span>🟢</span> اطلب عبر واتساب
        </a>
      </div>

    </div>
  `;
}
