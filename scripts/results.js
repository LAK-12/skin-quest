import { SkinProducts } from "../data/skinProducts.js";


function getSkinType() {
  const params = new URLSearchParams(window.location.search); //?type
  return (params.get('type') || 'combo'); //gives you the value of ?type
}

function renderResult() {
  const skinType = getSkinType();
  const data = SkinProducts[skinType] || SkinProducts.combo; //SP[type] where type is a var

  const html = `

   <div class="header">
    <h1> SkinQuest Result </h1>
   </div>

   <div class="sub-header">
    <p class="subtitle"> Your skin type is : </p> 
    <p class="skin-type"> ${data.title} </p>
   </div>
   

    <h2> Summary </h2>
    <p class="skin-summary"> ${data.summary} </p>

    <h2> Routine </h2>
    <ul> ${data.routine.map(step =>`<li>${step}</li>`).join('')}</ul>

    <h3> Here are some well-reviewed, suggested skin care products that you can add in your skin care routine which work accordingly to your skin type. </h3>

    <h2 class="cleansers" >Cleansers</h2>
    <div class="grid"> 
      ${data.products.cleansers.map((item) => `
        <div class="block">
          <a href="${item.url}" target="_blank"> <img src="${item.img}"> </a>
          <p class="product-name"> ${item.name} </p>
          <div class="product-price"> ${item.price} </div>
        </div>

      `).join('') }
    </div>

    <h2 class="moisture" >Moisturizers</h2>
    <div class="grid"> 
      ${data.products.moisturizers.map((item) => `
        <div class="block">
          <a href="${item.url}" target="_blank"> <img src="${item.img}"> </a>
          <p class="product-name"> ${item.name} </p>
          <div class="product-price"> ${item.price} </div>
        </div>

      `).join('') }
    </div>

    <h2 class="ss">Sunscreens</h2>
    <div class="grid"> 
      ${data.products.sunscreen.map((item) => `
        <div class="block">
          <a href="${item.url}" target="_blank"> <img src="${item.img}"> </a>
          <p class="product-name"> ${item.name} </p>
          <div class="product-price"> ${item.price} </div>
        </div>

      `).join('') }
    </div>

    <p class="note">Educational only; patch test and check ingredients if sensitive.</p>
    <a href="index.html"><button class="back-home" >Retake Quiz </button> </a>

  
  `;

  document.querySelector('.result-grid').innerHTML = html;
}

renderResult();
