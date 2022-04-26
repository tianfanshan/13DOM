//Evita el comportamiento por defecto al hacer click. Por ejemplo, 
//si hago click sobre un enlace, este no me llevará a otra página.

let links = document.querySelectorAll("a");

for(let i = 0; i < links.length; i++){
    console.log(links[i])
    links[i].addEventListener("click", function(event){
        event.preventDefault()
    })
}

//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la 
//carpeta assets con el nombre magic-*.

let img = document.querySelectorAll("img");
let imagenes = [];
for(let i = 0 ; i < img.length ; i++){
    console.log(img[i])
    imagenes.push(img[i])
    imagenes[i].addEventListener("click", function(event){
        imagenes[i,0].src="./assets/magic-1.gif",
        imagenes[i,1].src="./assets/magic-2.gif",
        imagenes[i,2].src="./assets/magic-3.gif",
        imagenes[i,3].src="./assets/magic-4.gif",
        imagenes[i,4].src="./assets/magic-5.gif"
    })
}

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let parrafos = document.getElementsByTagName("p");

for(let i = 0 ; i < parrafos.length ; i++){
    console.log(parrafos[i])
    parrafos[i].style.color = "red"
}
//2.3 Bloques de article o section: Cambia el color de fondo.

let articles = document.getElementsByTagName("article");
for(let i = 0 ; i < articles.length ; i++){
    console.log(articles[i])
    articles[i].style.background = "blue"
}

//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
 

for(let i = 0 ; i < img.length ; i++){
    console.log(img[i])
    imagenes.push(img[i]);
    imagenes[i].addEventListener("mouseover", function(event){
        imagenes[i,0].src="./assets/abracadabra.gif",
        imagenes[i,1].src="./assets/abracadabra.gif",
        imagenes[i,2].src="./assets/abracadabra.gif",
        imagenes[i,3].src="./assets/abracadabra.gif",
        imagenes[i,4].src="./assets/abracadabra.gif"
    })
    imagenes[i].addEventListener("mouseout", function(event){
        imagenes[i,0].src="./assets/magic-1.gif",
        imagenes[i,1].src="./assets/magic-2.gif",
        imagenes[i,2].src="./assets/magic-3.gif",
        imagenes[i,3].src="./assets/magic-4.gif",
        imagenes[i,4].src="./assets/magic-5.gif"
    })
}

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for(let i = 0 ; i < parrafos.length ; i++){
    console.log(parrafos[i])
    parrafos[i].addEventListener("mouseover", function(event){
        parrafos[i].style.color = "black"
    })
    parrafos[i].addEventListener("mouseout", function(event){
        parrafos[i].style.color = "white"
    })
}


//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

for(let i = 0 ; i < articles.length ; i++){
    console.log(articles[i])
    articles[i].addEventListener("mouseover", function(event){
        articles[i].style.background = "yellow";
    }) 
    articles[i].addEventListener("mouseout", function(event){
        articles[i].style.background = "brown";
    }) 
}

//4.Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

for(let i = 0 ; i < articles.length ; i++){
    console.log(articles[i])
    let color= ["#FFFF99","#B5FF91","#94DBFF","#FFBAFF","#FFBD9D","#C7A3ED","#CC9898","#8AC007","#CCC007","#FFAD5C"];
    articles[i].addEventListener("mouseover", function(event){
        articles[i].style.background = ;
    })
}