var cardsData = [
    {
        inStock: true,
        imgUrl: 'gllacy/choco.jpg',
        text: 'Сливочно-кофейное с кусочками шоколада',
        price: 310,
        isHit: true,
        specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
        inStock: false,
        imgUrl: 'gllacy/lemon.jpg',
        text: 'Сливочно-лимонное с карамельной присыпкой',
        price: 125,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/cowberry.jpg',
        text: 'Сливочное с брусничным джемом',
        price: 170,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/cookie.jpg',
        text: 'Сливочное с кусочками печенья',
        price: 250,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/creme-brulee.jpg',
        text: 'Сливочное крем-брюле',
        price: 190,
        isHit: false
    }
];

/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/

function renderCards(cardsData) {
    const goodsList = document.querySelector('.goods');

    // Очищаем список товаров перед рендерингом
    goodsList.innerHTML = '';

    cardsData.forEach(card => {
        // Создаем элемент списка для товара
        const cardItem = document.createElement('li');
        cardItem.classList.add('good');

        // Добавляем класс в зависимости от наличия товара
        if (card.inStock) {
            cardItem.classList.add('good--available');
        } else {
            cardItem.classList.add('good--unavailable');
        }

        // Если товар является хитом продаж, добавляем соответствующий класс
        if (card.isHit) {
            cardItem.classList.add('good--hit');
        }

        // Создаем заголовок с описанием товара
        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('good__description');
        cardTitle.textContent = card.text;
        cardItem.appendChild(cardTitle);

        // Создаем элемент изображения товара
        const cardImage = document.createElement('img');
        cardImage.classList.add('good__image');
        cardImage.src = card.imgUrl;
        cardImage.alt = card.text; // alt должен быть таким же, как название товара
        cardItem.appendChild(cardImage);

        // Создаем элемент с ценой товара
        const cardPrice = document.createElement('p');
        cardPrice.classList.add('good__price');
        cardPrice.textContent = `${card.price}₽/кг`;
        cardItem.appendChild(cardPrice);

        // Если товар является хитом продаж и имеет специальное предложение, добавляем его
        if (card.isHit && card.specialOffer) {
            const specialOffer = document.createElement('p');
            specialOffer.classList.add('good__special-offer');
            specialOffer.textContent = card.specialOffer;
            cardItem.appendChild(specialOffer);
        }

        // Добавляем сформированную карточку в список товаров
        goodsList.appendChild(cardItem);
    });
}

renderCards(cardsData);
