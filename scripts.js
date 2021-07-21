const artworks = Array.from(document.getElementsByClassName('artwork'))

artworks.map((artwork, index) => {
  const artworkTitle = artwork.getElementsByClassName('title')[0]
  const artworkBodyContainer = artwork.getElementsByClassName('body-container')[0]
  
  return artworkTitle.addEventListener('click', () => {
    artworkBodyContainer.classList.toggle('visible')
  })
})


const imageGalleries = Array.from(document.getElementsByClassName('image-gallery'))

imageGalleries.map((gallery) => {
  const items = gallery.getElementsByTagName('li')
  const nextButton = gallery.getElementsByClassName('next-button')[0]
  const prevButton = gallery.getElementsByClassName('prev-button')[0]
  let currentIndex = 0

  items[currentIndex].classList.add('active')

  nextButton.addEventListener('click', () => {
    items[currentIndex].classList.remove('active')

    if (currentIndex === items.length - 1) {
      currentIndex = -1
    }
    
    currentIndex++
    items[currentIndex].classList.add('active')
  })

  prevButton.addEventListener('click', () => {
    items[currentIndex].classList.remove('active')

    if (currentIndex === 0) {
      currentIndex = items.length
    }
    
    currentIndex--
    items[currentIndex].classList.add('active')
  })
})