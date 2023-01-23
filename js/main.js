'use strict'
{
  
  const button = document.getElementById("addBtn");
  const lists = document.getElementById("lists");
  

button.addEventListener('click', () => {
  fetch('https://catfact.ninja/fact')
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    const breed = myJson['fact'];
    lists.innerText =  breed;
  });
})

}


