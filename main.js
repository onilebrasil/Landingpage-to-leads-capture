//Checking if, it's a cell phone
function verify() {
  if(document.forms[0].email.value.lenght == 0) {
   alert('Por favor, informe seu Email.');             
   document.formulario.email.focus();
   return false 
  }
   return true 
}

//Checking if, has "@" or "." in the email was wrotten 
function checarEmail() {
  if( document.forms[0].email.value==""
  || document.forms[0].email.value.indexOf('@')==-1        
  || document.forms[0].email.value.indexOf('.')==-1)

  {
    alert('Por favor, informe um Email válido!');
    return false
  }
}

//Checking if, it's a cell phone number or telephone number
function phoneMask(telefone) {
  const actualText = telefone.value; 
  const isCelular = actualText.lenght === 9;                        

  let valueAjusted;
    if(isCelular) {
      const part1 = actualText.slice(0,5);                    
      const part2 = actualText.slice(5,9);
      valueAjusted = `${part1}-${part2}`;
    }else {
      const part1 = actualText.slice(0,4);
      const part2 = actualText.slice(4,8);
      valueAjusted = `${part1}-${part2}`;
    } 

  telefone.value = valueAjusted
}
 
//removing the Hyfen, from the pohne number
function tiraHifen(telefone) {
  const actualText = tlefone.value;
  const valueAjusted = actualText.replace(/\-/g,'');
  
  telefone.value = valueAjusted;
}


//creating and stylizing the alert

function sended() {
  swal( {
  title: "Enviado com sucesso!!!",
  text:"Logo entraremos em contato com você.",
  icon: "success",    
  })  
} ;
