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
        phoneItem.classList = 'card bg-base-100 p-5 border-2 shadow-xl mt-10 text-center';
        phoneItem.innerHTML = `
        <figure class = "bg-[#0D6EFD12] p-10 rounded-xl">
        <img src="${phones.image}" alt="Shoes" />
        </figure>
        <div class="card-body px-4 space-y-2">
            <h2 class="text-xl font-bold text-center">${phones.phone_name}</h2>
            <p class = "text-base text-[#706F6F]">${'There are many variations of passages of available, but the majority have suffered'}</p>
            <h2 class="text-xl font-bold text-center">$999</h2>
            <div class="card-actions justify-center">
            <button class="border px-5 lg:px-7 py-2 bg-[#0D6EFD] text-white rounded-md lg:text-lg font-semibold">Show Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneItem)
    });
}

loadPhone()