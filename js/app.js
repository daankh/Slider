document.addEventListener('DOMContentLoaded', function () {
    // get elemenst
    var slider = document.querySelector('.slider')
    var prevPictureButton = slider.querySelector('.btn--prevPicture')
    var nextPictureButton = slider.querySelector('.btn--nextPicture')
    var images = slider.querySelectorAll('.slider__image-container')
    // set variables
    var imageNumber = 0

    //set initial img for slider
    // images[imageNumber].classList.add('visible')

    // events
    nextPictureButton.addEventListener('click', function () {
        images[imageNumber].classList.add('hidden')

        imageNumber++

        if (imageNumber > images.length - 1) {
            imageNumber = 0
        }

        images[imageNumber].classList.remove('hidden')
    })

    prevPictureButton.addEventListener('click', function () {
        images[imageNumber].classList.add('hidden')

        imageNumber--

        if (imageNumber < 0) {
            imageNumber = images.length - 1
            images[0].classList.add('hidden')
        }

        images[imageNumber].classList.remove('hidden')
    })
})