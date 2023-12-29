const showNavbar = (function () {
    const navbarMenu = document.getElementById('menuBurger');
    const navbarItems = document.querySelector('.hidden');
    navbarMenu.addEventListener('click', () => {
        if (navbarMenu.classList.contains('menuClosed')) {
            navbarMenu.classList.remove('menuClosed');
            navbarMenu.classList.add('menuOpen');
            navbarItems.classList.add('shown');
            navbarItems.classList.remove('hidden');
        } else {
            navbarMenu.classList.remove('menuOpen');
            navbarMenu.classList.add('menuClosed');
            navbarItems.classList.add('hidden');
            navbarItems.classList.remove('shown');
        }
    });
})();


const userInput = document.getElementById('gifSearch');
const img = document.querySelector('img'); 


userInput.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    getGifs()
        //  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rky6i5txQr8hCoEdF1T1wsCQSemta4gS&s=${userInput.value}`, {mode: 'cors'})
        //   .then(function(response) {
        //     return response.json();
        //   })
        //   .then(function(response) {
        //       img.src = response.data.images.original.url;
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //     img.src = '../imgs/oops.jpeg';
        //   })
        };
      });

async function getGifs() {
  try{
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rky6i5txQr8hCoEdF1T1wsCQSemta4gS&s=${userInput.value}`, {mode: 'cors'});
  const gifData = await response.json();
  img.src = gifData.data.images.original.url;
  } catch (error) {
    console.log(error);
    img.src = '../imgs/oops.jpeg';
  }
}