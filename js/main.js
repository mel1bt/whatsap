var contacto = {};
var usuario = {};
var mensajeG = [];
var tiempoG = [];
var chat_contacto = {contacto, mensaje};

var mensaje = document.getElementById("mensajes");
var roomChat = document.getElementById("chat");
var lista = document.getElementsByClassName("w-recent-chats")[0].children;
var chatProfile  = document.getElementsByClassName("w-chat-profile");


window.addEventListener("load", cargarPagina);

function cargarPagina(){
    mensaje.addEventListener("keyup", msjEnviado);
    for (var i = 0; i < lista.length; i++){
        lista[i].addEventListener("click", chatContactos);
		lista[i].addEventListener("click", nuevoChat);
    };
};

function chatContactos(){
	chatProfile[0].children[1].innerHTML = this.children[0].children[1].innerHTML;
    chatProfile[0].children[2].innerHTML = this.children[1].innerHTML;
    chatProfile[0].children[0].src = this.children[0].children[0].src;    
};
  
function nuevoChat(){
	var roomChat = document.getElementsByClassName("w-message");
	this.parentElement.parentElement.parentElement.children[1].children[1].children[0].children.remove();
};

function msjEnviado(e){
  if (e.keyCode == 13){
    mensajeG.push(mensaje.value);
    var wmsjOut = document.createElement("div");
    wmsjOut.classList.add("w-message", "w-message-out");
    var msjDiv = document.createElement("div");
    msjDiv.classList.add("w-message-text");
    var mensajeUser = document.createElement("p");
    mensajeUser.textContent = mensaje.value;
    var timeChat = document.createElement("div");
    timeChat.classList.add("time");
    timeChat.innerHTML= horaActual();
    msjDiv.appendChild(mensajeUser);
    msjDiv.appendChild(timeChat);
    wmsjOut.appendChild(msjDiv);
    roomChat.appendChild(wmsjOut);
    mensaje.value="";
  };
};

function horaActual(){
  var tiempo = new Date;
  var hora = tiempo.getHours();
  var minutos = tiempo.getMinutes();
  return hora + ":" + minutos;
}
