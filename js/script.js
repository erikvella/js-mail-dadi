// esercizio dell'email 

 const listaMail = ['primo@gmail.com' , 'secondo@gmail.com' , 'terzo@gmail.com'];
 const sendBtn = document.getElementById('send');
 let datiValidi = false;


// metodo lungo funzionante
// sendBtn.addEventListener('click' , function(){
//   for(let i = 0 ; i < listaMail.length ; i++){
  
//     if(userMail === 'primo@gmail.com'){
//       console.log('mail valida');
//       document.getElementById('output-mail').innerHTML = 'Mail valida!' ;
//     }else if (userMail === 'secondo@gmail.com'){
//       console.log('mail valida');
//       document.getElementById('output-mail').innerHTML = 'Mail valida!' ;
//    }else if (userMail === 'terzo@gmail.com'){
//     console.log('mail valida');
//     document.getElementById('output-mail').innerHTML = 'Mail valida!' ;
//    }else{
//     console.log('mail non valida')
//     document.getElementById('output-mail').innerHTML = 'Mail non valida!' ;
//    }
//   }
// })
 

// metodo compatto
sendBtn.addEventListener('click' , function(){
  let userMail = document.getElementById('user-mail').value;
  
  for(let i = 0 ; i < listaMail.length ; i++){

    if(userMail === listaMail[i]){
      datiValidi = true;
      console.log('mail valida');
      
    }else{
      datiValidi = false;
      console.log('mail non valida');
     
    }
   }
   if(datiValidi = true){
    document.getElementById('output-mail').innerHTML = 'Mail valida!' ;
   }else{
    document.getElementById('output-mail').innerHTML = 'Mail non valida!' ;
   }
})
 


// esercizio dei dadi
const lanciaDadi = document.getElementById('snap-dice');
min = 1 ;
max = 6 ;
const nUtente = Math.floor(Math.random() * (max - min + 1) + min);
const nPc =  Math.floor(Math.random() * (max - min + 1) + min);



lanciaDadi.addEventListener('click' , function(){
  if(nUtente < nPc){
    console.log('Ha vinto il PC!');
  document.getElementById('output-dice').innerHTML = `Ha vinto il PC poichè ha effettutato un ${nPc} mentre il giocatore ha effettuato un ${nUtente}`;
  }
  
  if(nUtente > nPc){
    console.log('Ha vinto il giocatore!');
    document.getElementById('output-dice').innerHTML = `Ha vinto il giocatore poichè ha effettutato un ${nUtente} mentre il PC ha effettuato un ${nPc}`;
  }

  if(nUtente === nPc){
    console.log('Parità!')
    document.getElementById('output-dice').innerHTML = `Esito di parità poichè il giocatore ha effettuato un  ${nUtente} mentre il PC ha effettuato un ${nPc}`;
  }
  })
