// esercizio dell'email 

const listaMail = ['primo@gmail.com' , 'secondo@gmail.com' , 'terzo@gmail.com'];

const userMail = prompt('Inserire email');



for(let i = 0 ; i < listaMail.length ; i++){
  let validMail = [i];
  if(userMail === validMail){
    console.log('mail valida');
  }else{
    console.log('mail non valida');
  }
}
