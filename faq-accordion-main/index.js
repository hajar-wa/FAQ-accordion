import data from "./data.js"

const section = document.getElementById("section")
const icons = document.getElementsByClassName("icons")
const answer = document.getElementsByClassName("answer")


for(let i = 0; i < data.length; i++){

    section.innerHTML += `

                    <div class = "part">
                        <div class = "question-div"> 
                            <h2 class = "question">${data[i].question}</h2>
                            <img src="./assets/images/icon-plus.svg" alt="minus-icon" class = "icons">
                        </div>
                        <p class = "answer">${data[i].answer}</p>
                    </div>

    `
}


for (let i = 0; i < icons.length; i++){
    icons[i].addEventListener("click", function(){
        //toggle answer display
        answer[i].style.display === "none"? 
            answer[i].style.display = "block":
            answer[i].style.display = "none"
        // toggle icon
        icons[i].getAttribute("src") === "./assets/images/icon-minus.svg"?
            icons[i].setAttribute("src", "./assets/images/icon-plus.svg"):
            icons[i].setAttribute("src", "./assets/images/icon-minus.svg")

        
    })
}



