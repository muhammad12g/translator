let uzbek = document.querySelector('.uzbekiskiy_str')
let english = document.querySelector('.inglizkiy_str')
let ingBtn = document.querySelector('.ingliz_btn')
let uzbBtn = document.querySelector('.uzbek_btn')
let h2 = document.querySelector('.h2')

// uzbek.value = uzbek.value.toLowerCase()
function translateBtn(){
   if(english.value === "Hello".toLowerCase()){
        h2.innerHTML = "Salom"
       h2.style.display = "block"
   }else if(english.value === "Bye".toLowerCase()){
        h2.innerHTML = "Xayr"
       h2.style.display = "block"
   }else if(english.value === "See You".toLowerCase()){
       h2.innerHTML = "Ko'rishguncha"
       h2.style.display = "block"
   }else if(english.value === "Toy".toLowerCase()){
       h2.innerHTML = "O'yinchoq"
       h2.style.display = "block"
   }else if(english.value === "Bag".toLowerCase()){
       h2.innerHTML = "Halta"
       h2.style.display = "block"
   }else if(english.value === "Boy".toLowerCase()){
       h2.innerHTML = "O'gil Bola"
       h2.style.display = "block"
   }







   uzbek.value = ""
   english.value = ""
}
