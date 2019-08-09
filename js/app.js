document.addEventListener('DOMContentLoaded', function () {
    // functions
    const createDots = function (images) {
        images.forEach((image, index) => {
            const dot = document.createElement('button')
            dot.classList.add('btn')
            dot.classList.add('dot')
            dot.dataset.id = index;
            dot.addEventListener('click', function (e) {
                clearInterval(interval)

                images[imageNumber].classList.add('hidden')
                dots[imageNumber].classList.remove('active')

                imageNumber = e.target.dataset.id
                images[imageNumber].classList.remove('hidden')
                dots[imageNumber].classList.add('active')

                interval = setInterval(moveForward, 3000)
            })
            dotsContainer.appendChild(dot)
        })
    }

    const moveForward = function () {
        images[imageNumber].classList.add('hidden')
        dots[imageNumber].classList.remove('active')

        imageNumber++

        if (imageNumber > images.length - 1) {
            imageNumber = 0
        }

        images[imageNumber].classList.remove('hidden')
        dots[imageNumber].classList.add('active')
    }

    // get elemenst
    const slider = document.querySelector('.slider')
    const prevPictureButton = slider.querySelector('.btn--prevPicture')
    const nextPictureButton = slider.querySelector('.btn--nextPicture')
    const images = slider.querySelectorAll('.slider__image-container')
    const dotsContainer = slider.querySelector('.slider__dots')
    createDots(images)
    const dots = slider.querySelectorAll('.dot')
    // set variables
    let imageNumber = 0

    //set initial img for slider
    // images[imageNumber].classList.add('visible')
    dots[imageNumber].classList.add('active')

    let interval = setInterval(moveForward, 3000)

    // events
    nextPictureButton.addEventListener('click', function () {
        clearInterval(interval)

        images[imageNumber].classList.add('hidden')
        dots[imageNumber].classList.remove('active')

        imageNumber++

        if (imageNumber > images.length - 1) {
            imageNumber = 0
        }

        images[imageNumber].classList.remove('hidden')
        dots[imageNumber].classList.add('active')

        interval = setInterval(moveForward, 3000)
    })

    prevPictureButton.addEventListener('click', function () {
        clearInterval(interval)

        images[imageNumber].classList.add('hidden')
        dots[imageNumber].classList.remove('active')

        imageNumber--

        if (imageNumber < 0) {
            imageNumber = images.length - 1
            images[0].classList.add('hidden')
        }

        images[imageNumber].classList.remove('hidden')
        dots[imageNumber].classList.add('active')

        interval = setInterval(moveForward, 3000)
    })


})