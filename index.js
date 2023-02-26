const loadPhone = async(inputvalues) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputvalues}`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data)

}



const displayData = phones =>{
    const phoneConsterner = document.getElementById('phone-constainer');
    phoneConsterner.textContent = "";

    const showAll = document.getElementById('show-all');

    if(phones.length > 10){

        phones  = phones.slice(0 ,11);

        showAll.classList.remove('d-none')

    }

    else{
        showAll.classList.add('d-none')
    }


    const noPhone = document.getElementById('nophone-found-masseges');

    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none')
    }
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
    toggleSpenner(false)
}

document.getElementById('search-button').addEventListener('click', function(){
    tooggles(11);
    
})


const tooggles = dataLimits => {
    toggleSpenner(true);
  
    const inputVale =   document.getElementById('input-value');
  const inputvalues = inputVale.value;
  loadPhone(inputvalues)
  inputVale.value = "";
}


const toggleSpenner = isLoading => {
    const lodingData = document.getElementById('loder');

    if(isLoading){
        lodingData.classList.remove('d-none')
    }
    else{
        lodingData.classList.add('d-none')
    }
}

document.getElementById('show-all').addEventListener('click', function(dataLimits){
    tooggles();
})

