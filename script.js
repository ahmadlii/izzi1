let cards = document.querySelector(".cards");
async function createCard() {
    data = await fetch('data.json')
    .then(res => res.json())
    .then(data => {
        let items = data.data.services;
        items.forEach((item) => {
            let newList = document.createElement("ul");
            newList.classList.add("new-list");

            item.subServices.forEach(subService => {
                let listItem = document.createElement("li");
                listItem.textContent = subService.title_en;
                newList.appendChild(listItem);
            });

            let newcard = document.createElement("div");
            newcard.classList.add("card");
            newcard.innerHTML = `
                <div class="image-container">
                    <img src="${item.cover_img.publicUrl}" alt="service image">
                </div>
                <div class="babysitter">
                    <h2>${item.title_en}</h2>
                    <div class="dollar">
                        <img src="./image/dollar.jpg" alt="dollar">
                        <span>Starts from 10$/h</span>
                    </div>
                </div>
            `;
            newcard.appendChild(newList);
            cards.appendChild(newcard);

            newcard.addEventListener("click", function() {
                if (window.matchMedia("(max-width: 910px)").matches) {
                    if (newList.style.display === 'block') {
                        newList.style.display = 'none';
                    }else {
                        newList.style.display = 'block';
                    }
                }
            });
        });
    });
}

const menuIcon = document.querySelector('.menuicon');
const menuList = document.querySelector('.menu-list');
menuIcon.addEventListener("click", function() {
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
});

createCard();
