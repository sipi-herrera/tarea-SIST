const imgArray = [
    './Imagenes/1.jpg',
    './Imagenes/2.jpg',
    './Imagenes/3.jpg',
    './Imagenes/4.jpg',
    './Imagenes/5.jpg',
    './Imagenes/6.jpg',
]
const img = document.querySelector ('#slide')
//const  img = document.getElementById('slide')
let i = 0
const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1: 0
}
const interval =() => {
    setInterval(slideShow, 100)
}