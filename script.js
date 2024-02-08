const images = ["https://i.pinimg.com/564x/8a/01/1e/8a011e237aab442428bb854dd13d0a0d.jpg", "https://i.pinimg.com/564x/15/21/56/152156f14b2030801b827ed09b5a207c.jpg", "https://i.pinimg.com/564x/ca/bd/82/cabd8242f2c22c623aa8003f4ed91f85.jpg", "https://i.pinimg.com/564x/96/7e/24/967e24aa67158c687c7f5925253e56b5.jpg"];
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

function showImage() {
    const currentImageElement = document.getElementById("currentImage");
    currentImageElement.src = images[currentIndex];
}