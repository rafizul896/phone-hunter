const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const phoneContainer = document.getElementById('phone-container')
const displayPhones = phones => {
    phones.forEach(phones => {
        console.log(phones);
        const phoneItem = document.createElement('div');
        phoneItem.classList = 'card w-96 bg-base-100 p-5 shadow-xl';
        phoneItem.innerHTML = `
        <figure>
        <img src="${phones.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phones.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneItem)
    });
}

loadPhone()