const botones = document.querySelectorAll("button");//guardamos los elementos a manipular en una variable como son varios botones que vamos  a usar vamos a usar un for each para recorrer cada uno de los botones.
debugger
botones.forEach((boton) => boton.addEventListener('click', enviarMensaje));// aqui realizamos el forEach para cada uno de los botones y realizamos el evento click 

function enviarMensaje (evento){
    const elemento = evento.target  //target nos sirve para capturar el elemento que provoco el disparto del evento .Por eso lo guardamos en una vriable
    console.log("ELEMENTO QUE DISPARA EL EVENTO:", elemento) 
    
    const dataset = elemento.dataset // data set es una coleccion de datos 
    console.log("DATASET DEL ELEMENTO:", dataset)

    const  titulo = dataset.titulo
    console.log ("TITULO:", titulo)

    const idUsuario = Number(dataset.idUsuario) // aqui realizamos un  parseo con Number por que el ID que vamos a recibir esta en un string 
    console.log ("ID USUARIO:", idUsuario)

fetch("https://jsonplaceholder.typicode.com/posts", {
    method : "POST",//como vamos a usar pòst aqui tenemos que definir el que vamos a usar ya que si no se colocaningun metodo por defecto este toma un get
    body :JSON.stringify({ //aqui definimos la informaciòn que necesitamos 
        title : titulo,
        userId :idUsuario, //estamos creando practicamente un objeto literal pero con lo que necesitamos 
    }),
    headers : {
    'Content-type' : 'application/json; charset=UTF-8', 
},
})
.then((response) => response.json())// obtenemos la respuesta pura del servidor  y realiza .JSON  para que no lo traiga en js
  .then((data) => {// ya podemos trabajar con la data que nos trajo la api ya es manipulable 
    console.log("RESPUESTA DE LA API: ", data); //aqui nos imprime la data 
    const mensaje = document.querySelector("#mensaje-posteado");// imprimir en pantalla la seleccion del boton se trae el mensaje posteado
    mensaje.textContent = data.title; // imprime el mensaje del boto que se imprimio 
  });


}