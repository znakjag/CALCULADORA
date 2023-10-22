const pantalla =document.querySelector(".pantalla");  /*LLAMAR LA CLASE PANTALLA*/ 
const botones = document.querySelectorAll(".btn");  /*LLAMAR TODOS LOS BOTONES*/ 

botones.forEach(boton => {
    boton.addEventListener("click", () => {  /*AGREGAR UN EVENTO LISTENER*/
        /*console.log(boton.textContent); ---  PARA REVISAR EN CONSOLA QUE SI ESTÁ IMPRIMIENDO*/
         const botonApretado = boton.textContent;  
         
         if (boton.id === "c") {
            pantalla.textContent = "0";    /* PARA QUE CON LA "C" VUELVA EN 0 */
            return;        
         }
/*---------------------------------------------------------------------------------*/
         if (boton.id ==="borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0"          /*PARA BORRAR Y QUE AL FINALIZAR QUEDE EN 0 */
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
         }
/*---------------------------------------------------------------------------------*/
         if(boton.id ==="igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);    /*CON EL IGUAL CUALQUIER OPERACIÓN FUNCIONA*/    
            } catch {
                pantalla.textContent = "Error!";
            }            
            return;
         }
 /*---------------------------------------------------------------------------------*/

         if (pantalla.textContent === "0" || pantalla.textContent === "Error!" ) {
            pantalla.textContent = botonApretado;            
         } else {
            pantalla.textContent += botonApretado;/*para que en la pantalla aparezca más de un número */   
         }
         

        
    })
})