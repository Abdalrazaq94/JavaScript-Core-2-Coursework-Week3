// Write your code here

// creating first task steps
let div = document.createElement('div')
let div2 = document.createElement('div')



let text1 = document.createElement('h1')

let img = document.createElement('img')

let forward = document.createElement('button')
let back = document.createElement('button')

document.body.appendChild(div)


// appeinding the element inside the div

div.appendChild(text1)
div.appendChild(img)
div.appendChild(div2)
div2.appendChild(forward)
div2.appendChild(back)
// styling and adding innerHtml

text1.innerHTML = 'changeing the cats image'
forward.innerHTML = 'forward'
back.innerHTML = 'back'


//styling 

div.className = 'div'
div2.className = 'div2'



// forward

forward.addEventListener('click', moveForWard)
back.addEventListener('click', moveBack)

let i = 0
function moveForWard() {
    
    img.src = imgs[i]
    if (i < imgs.length - 1) {
        i++;
      } else {
        i = 0;
      }
}

let interval
function moveBack(params) {
    interval = setInterval(moveForWard, 5000)
}



const imgs = [
  'https://images.unsplash.com/photo-1643509264337-73b834eb377b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
    "https://media.istockphoto.com/photos/curious-kitten-looking-at-the-camera-picture-id1270023880?b=1&k=20&m=1270023880&s=170667a&w=0&h=7tAE4L2d7qJ4k1OMydwof1kObkG6TuNkDj2n2QC88ic=",

  ];










// array of image
