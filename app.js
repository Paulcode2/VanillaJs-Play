// const displayText = document.getElementsByClassName("display");
const displayNum = document.getElementById("display-num");
const deleteNum = document.getElementById("delete");
const numBtn = Array.from(document.getElementsByClassName("keypads"));
const operatorBtn = document.getElementById("operator");



// numBtn.forEach((item) =>{
//     item.addEventListener('click', (e) =>{
//         displayNum.innerHTML += e.target.textContent.trim();
//     })
// })

// const clearDisplay = () =>{
//     if(displayNum == deleteNum){
//         displayNum.style.display = "none"
//     }
// }

// clearDisplay

// deleteNum.addEventListener('click', (e) =>{
//     displayNum = ""
// })

numBtn.map(button =>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerHTML){
            case 'C':
                displayNum.innerText = '';
                break;
                case '=':
                try{
                    displayNum.innerText = eval(displayNum.innerText);
                }catch{
                    displayNum.innerText = 'Error!'
                }
                break;
                default:
                displayNum.innerText += e.target.innerText;
        }
        
    })
})

deleteNum.addEventListener('click', (e)=>{
    if(displayNum.innerText){
        displayNum.innerText = displayNum.innerText.slice(0, -1);
    }            
    })
    