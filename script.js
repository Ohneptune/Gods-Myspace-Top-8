let quotes = [
    `If the lord can lead you to it he can lead you through it.`,
    `Bless Up`,
    `AMEN JESUS`,
    `Submit to God and be at peace with HIM!`,
    `Blessed are the pure in heart for they shall see GOD`,
    `TE IPSUM OCCIDERE.`
  ];
  
 
document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
 
  document.querySelector('#main-title').textContent = 'UR IN DA LORDS HOUSE NOW SON'
   
  document.querySelector('body').style.backgroundColor = 'pink'
  
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
  
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])
  
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })

  })
    
  const li = document.createElement('li')
  li.textContent = 'I just love wearing my sunday best!" - Lil Jimmy'
  document.querySelector('#Meet-The-Lords-Myspace-Top-8').appendChild(li)
  
   
  document.querySelector('.main').appendChild(blogPost)
  
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)
  

  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  

  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      evt.currentTarget.classList.toggle('white')
    })
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('pink')
    })
  });

  