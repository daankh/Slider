document.addEventListener('DOMContentLoaded', function () {
    // functions
    const toggleClasses = function (imageNumber) {
        images[imageNumber].classList.toggle('hidden')
        dots[imageNumber].classList.toggle('active')
    }

    const createDots = function (images) {
        images.forEach((image, index) => {
            const dot = document.createElement('button')
            dot.classList.add('btn')
            dot.classList.add('dot')
            dot.dataset.id = index;
            dot.addEventListener('click', function (e) {
                clearInterval(interval)

                toggleClasses(imageNumber)
                imageNumber = e.target.dataset.id
                toggleClasses(imageNumber)

                interval = setInterval(moveForward, 3000)
            })
            dotsContainer.appendChild(dot)
        })
    }

    const moveForward = function () {
        toggleClasses(imageNumber)

        imageNumber++
        if (imageNumber > images.length - 1) {
            imageNumber = 0
        }

        toggleClasses(imageNumber)
    }

    // get elements
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
    dots[imageNumber].classList.add('active')

    //set interval for changing picture
    let interval = setInterval(moveForward, 3000)

    // events
    nextPictureButton.addEventListener('click', function () {
        clearInterval(interval)
        moveForward()
        interval = setInterval(moveForward, 3000)
    })

    prevPictureButton.addEventListener('click', function () {
        clearInterval(interval)

        toggleClasses(imageNumber)

        imageNumber--

        if (imageNumber < 0) {
            imageNumber = images.length - 1
            images[0].classList.add('hidden')
        }

        toggleClasses(imageNumber)
        interval = setInterval(moveForward, 3000)
    })
})