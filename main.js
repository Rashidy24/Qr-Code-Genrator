const myForm = document.getElementById('form');
const myInput = document.getElementById('my-value');
const xShape = document.getElementById('shape');
const link = document.getElementById('link');
let iconOne = document.getElementById('iconOne');
let iconTwo = document.getElementById('iconTwo');
let plusIconOne = document.getElementById('el1');
let plusIconTwo = document.getElementById('el2');
let newImg = document.getElementById('new_img');
let image = document.getElementById('image');
let newQr = document.getElementById('newQr');

const shapes = document.querySelectorAll('.shape > div');

function showForm() {
    myForm.classList.toggle('active')
    iconOne.classList.toggle('active')
    plusIconOne.classList.toggle("fa-minus")
    plusIconOne.classList.toggle("fa-plus")
}
function showShape() {
    xShape.classList.toggle('active')
    iconTwo.classList.toggle('active')
    plusIconTwo.classList.toggle('fa-minus')
    plusIconTwo.classList.toggle('fa-plus')
}
shapes.forEach(ele => {
    ele.addEventListener('click', function(e) {
        shapes.forEach(shape => shape.classList.remove('active'));
        this.classList.add('active');
        borderValue = e.target.getAttribute('data-border')
        borderStyle = e.target.getAttribute('data-border-type')
    });
});


newQr.addEventListener('click', _ => {
    if(myInput.value.trim() != 0) {
        image.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
        + myInput.value
        link.href = image.src
        link.download = "download.png"
        console.log(image.src)
        newImg.style.borderRadius = borderValue;
        newImg.style.borderStyle = borderStyle;
    }else {
        myInput.classList.add('error')
        myInput.style.border = '1px solid red'
        myInput.setAttribute('placeholder', 'Required')
        setTimeout(() => {
            myInput.classList.remove('error')
            myInput.setAttribute('placeholder', 'Text Or Url')
            myInput.style.border = 'none'
        }, 1000) 
    }
})
