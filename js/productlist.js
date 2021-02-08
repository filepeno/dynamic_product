const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

/* <template id="templateProduct">
<h1 class="heading">Apparel</h1>
<section class="productList">
  <article class="smallProduct">
    <img
      src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
      alt="Sahara Team India Fanwear Round Neck Jersey"
    />
    <h4 class="brand">Nike</h4>
    <h3 class="item_title">
      Sahara Team India Fanwear Round Neck Jersey
    </h3>
    <div class="price_area">
      <div class="price">
        <span>Prev.</span>
        <h3>599</h3>
        DKK
      </div>
      <div class="discounted">
        Now<span> <h3>300</h3></span> DKK
      </div>
    </div>
    <a href="product.html">Read more</a>
  </article>
</template> */

function showProduct(item) {
  console.log(item);
  //grab template
  const template = document.querySelector("#templateProduct").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  // copy.querySelector(".img").src = `${item.productdisplayname}`;
  copy.querySelector(".brand").textContent = `${item.brandname}`;
  copy.querySelector(".item_title").textContent = `${item.productdisplayname}`;
  copy.querySelector(".price h3").textContent = `${item.price}`;

  if (item.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (item.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  //grab parent
  const parent = document.querySelector(".productList");
  //append
  parent.appendChild(copy);
}
