"use strict";
const blusas = [
    {
        id: 1,
        imagem: "https://dukenscoffee.com/wp-content/uploads/2018/09/roasted-beans1.jpg",
        titulo: "Grãos de café torrado Premium",
        categoria: "Premium",
        pais: "Brasil",
        preco: "45,00",
        quantidade: "2",
    },
    {
        id: 2,
        imagem: "https://dukenscoffee.com/wp-content/uploads/2018/09/instatnt-300x300.png",
        titulo: "Café instantâneo Premium",
        categoria: "Premium",
        pais: "Colômbia",
        preco: "42,00",
        quantidade: "15",
    },
    {
        id: 3,
        imagem: "https://dukenscoffee.com/wp-content/uploads/2018/09/espresso1.jpg",
        titulo: "Café expresso",
        categoria: "Exportação",
        pais: "EUA",
        preco: "8,00",
        quantidade: "3",
    },
    {
        id: 4,
        imagem: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-scaled.jpg",
        titulo: "Donuts",
        categoria: "Exportação",
        pais: "Brasil",
        preco: "36,00",
        quantidade: "1",
    },
    {
        id: 5,
        imagem: "https://mundo.gimbastore.com.br/wp-content/uploads/2019/10/CAPSULAS-min.jpg",
        titulo: "Café em capsula",
        categoria: "Premium",
        pais: "Italia",
        preco: "32,00",
        quantidade: "13",
    },
    {
        id: 6,
        imagem: "https://img.elo7.com.br/product/zoom/2BE216B/caneca-personalizada-quero-cafe-ceramica.jpg",
        titulo: "Caneca Quero Café",
        categoria: "Brindes",
        pais: "Brasil",
        preco: "25,00",
        quantidade: "13",
    },
    {
        id: 7,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6t4R0N8xWJfGY6v75sj2G071mDlByfSqtw&usqp=CAU",
        titulo: "Café de Itu",
        categoria: "Nacional",
        pais: "Brasil",
        preco: "5,00",
        quantidade: "13",
    },
    {
        id: 8,
        imagem: "https://s2.glbimg.com/aa1SPtkBfJgE0sU5nfrvcPQUWeA=/0x0:750x500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/b/g/VnDbkfQRSi9R3gnBnBtw/cupcake-de-liquidiifcador-receita.jpg",
        titulo: "Cup Cake",
        categoria: "Premium",
        pais: "Brasil",
        preco: "25,00",
        quantidade: "13",
    },
];
const rootElement = document.querySelector("#root");
const searchButtonElement = document.querySelector("#search-button");
const searchInputElement = document.querySelector("#input-pesquisar");
const searchTypeElement = document.querySelector("#filter-type-select");
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = "";
        itens.forEach((item) => {
            rootElement.innerHTML += `
      <div class="item-wrapper">
        <img class="img-wrapper" src=${item.imagem} />
       <div class="text-wrapper">
       <h3> ${item.titulo} </h3>
       <h3> ${item.categoria} </h3>
       <h3> ${item.pais} </h3>
       <h4> R$ ${item.preco}</h4>
       </div>
      </div>
    `;
        });
    }
}
function search() {
    const searchInputValue = searchInputElement.value;
    const filterTypeValue = searchTypeElement.value;
    const newBlusas = blusas.filter((blusa) => blusa[filterTypeValue].includes(searchInputValue));
    render(newBlusas);
}
function eventListenerHandle() {
    searchButtonElement === null || searchButtonElement === void 0 ? void 0 : searchButtonElement.addEventListener("click", search);
}
render(blusas);
eventListenerHandle();
