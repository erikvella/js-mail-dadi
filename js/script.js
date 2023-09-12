// esercizio dell'email 

 const listaMail = ['primo@gmail.com' , 'secondo@gmail.com' , 'terzo@gmail.com'];
 const sendBtn = document.getElementById('send');
 const userMail = document.getElementById('user-mail').value;


// metodo lungo funzionante
sendBtn.addEventListener('click' , function(){
  for(let i = 0 ; i < listaMail.length ; i++){
  
    if(userMail === 'primo@gmail.com'){
      console.log('mail valida');
      document.getElementById('output-mail').innerHTML = 'Mail valida!' ;
    }else if (userMail === 'secondo@gmail.com'){
      console.log('mail valida');
      document.getElementById('output-mail').innerHTML = 'Mail valida!' ;
   }else if (userMail === 'terzo@gmail.com'){
    console.log('mail valida');
    document.getElementById('output-mail').innerHTML = 'Mail valida!' ;
   }else{
    console.log('mail non valida')
    document.getElementById('output-mail').innerHTML = 'Mail non valida!' ;
   }
  }
})
 

// metodo compatto
// sendBtn.addEventListener('click' , function(){
//   for(let i = 0 ; i < listaMail.length ; i++){
//     if(userMail === listaMail[i]){
//       console.log('mail valida');
//       document.getElementById('output-mail').innerHTML = 'Mail valida!' ;
//     }else{
//       console.log('mail non valida');
//       document.getElementById('output-mail').innerHTML = 'Mail non valida!' ;
//     }
//    }
// })
 



// esercizio dei dadi
min = 1 ;
max = 6 ;
const nUtente = Math.floor(Math.random() * (max - min + 1) + min);
const nPc =  Math.floor(Math.random() * (max - min + 1) + min);

if(nUtente < nPc){
  console.log('Ha vinto il PC');

}else{
  console.log('Ha vinto il giocatore');
}