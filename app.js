const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// // Button'lar?? buton container'a eklemek

function btnAdd() {
  let btnsDOM = document.querySelector(".btn-container")  // class ile buton containere ula??t??k i??ine butonlar?? ataca????z
  let btnNames = ["All", "Korea", "Japan", "China"] // Buton isimlerini bir arrayde toplad??k
  let btnsID = ["All", "Korea", "Japan", "China"]
  for (let i = 0; i < 4; i++) {
    let btnDOM = document.createElement("button") // buton olu??turduk ve btnDOM de??i??kenine att??k.
    btnDOM.classList.add("btn", "btn-outline-dark", "btn-item") // buton sahip olmas?? gerek classlar?? ekledik
    btnsDOM.appendChild(btnDOM)   // butonlar?? i??eren div'e butonlar?? att??k.
    btnDOM.setAttribute("id", btnsID[i])
    btnDOM.innerHTML = btnNames[i]; // arrayde bulunan buton isimlerini s??ras?? ile butonlara atad??k.
  }
}
btnAdd();
// buton ve section'a ula??t??k
const sectionDOM = document.querySelector(".section-center");
const allBtnDOM = document.querySelector("#All")
const koreaBtnDOM = document.querySelector("#Korea")
const japanBtnDOM = document.querySelector("#Japan")
const chinaBtnDOM = document.querySelector("#China")

// menu yu kategorilere ay??rd??k
const groupByCategory = menu.reduce((group, product) => {
  const { category } = product;
  group[category] = group[category] ?? [];
  group[category].push(product);
  return group;
}, {});

// All butonu ile t??m objeleri ekrana yazd??rmak
let menuKoreaObjects = groupByCategory["Korea"]
let menuJapanObjects = groupByCategory["Japan"]
let menuChinaObjects = groupByCategory["China"]
console.log(menuKoreaObjects)
console.log(menuJapanObjects)
console.log(menuChinaObjects)
console.log(menu)

// butonlara click event'i olu??turarak kendi yemeklerini ??a????ran fonsiyonlar?? ??al????t??rd??k.
  allBtnDOM.addEventListener('click', selectAll)
  console.log(this.id)
  koreaBtnDOM.addEventListener('click', selectKorea)
  japanBtnDOM.addEventListener('click', selectJapan)
  chinaBtnDOM.addEventListener('click', selectChina)

// Print all foods to screen
function selectAll() {
  let printScreen = menu.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  }).join("");
  sectionDOM.innerHTML = printScreen
}

// Print Korea foods to screen
function selectKorea() {
  printScreen = menuKoreaObjects.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  }).join("");
  sectionDOM.innerHTML = printScreen
}

// Print Japan foods to screen
function selectJapan() {
  printScreen = menuJapanObjects.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  }).join("");
  sectionDOM.innerHTML = printScreen
}

// Print China foods to screen
function selectChina() {
  printScreen = menuChinaObjects.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  }).join("");
  sectionDOM.innerHTML = printScreen
}
