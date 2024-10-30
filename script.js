const name=document.querySelector(".name")
const cracker=document.querySelector(".cracker")
const submitBtn = document.getElementById("submitBtn")
const modal = document.getElementById("modal")
const nameInput = document.getElementById("nameInput")
const deepak =document.querySelector(".deepak")
let inputName

function autoType(inputName,name){let characterIndex=0
    let skipupdate=0
    
    let reverseType=false
    setInterval(()=>{
     if (skipupdate){
        skipupdate--
        return
     }
     if(!reverseType){
        name.innerText= name.innerText+inputName[characterIndex]
    characterIndex++
    skipupdate=1
    
    }
    else{
        
    name.innerText=name.innerText.slice(0,name.innerText.length-1)
    characterIndex--
    
    }
    if(characterIndex===0){
        reverseType=false
    }
    
        if(characterIndex===inputName.length){
            skipupdate=8
            reverseType=true  
            
           
        }
      
        
    
    },100)
    } 
setTimeout(()=>{
    modal.style.display = "flex"; // Show the modal

    submitBtn.addEventListener("click", () => {
        const inputText = nameInput.value.toUpperCase().trim();

        if (inputText) {
            autoType(inputText, name);
            cracker.style.display = "block";
            deepak.style.display = "block";
            modal.style.display = "none"; // Hide the modal
        } else {
            alert("Please enter a valid name.");
        }
    });
    


},1000)



