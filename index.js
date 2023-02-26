const loadPhone = async(inputvalues) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputvalues}`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data)

}

const displayData = phones =>{
    const phoneConsterner = document.getElementById('phone-constainer');
    phoneConsterner.textContent = "";
    phones  = phones.slice(0 ,21);
    phones.forEach( phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        phoneConsterner.appendChild(phoneDiv)

    })
}

document.getElementById('search-button').addEventListener('click', function(){
  const inputVale =   document.getElementById('input-value');
  const inputvalues = inputVale.value;
  loadPhone(inputvalues)
  inputVale.value = "";
})

loadPhone(inputvalues)