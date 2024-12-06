const depSelectSelect = document.getElementById("department")
const userInfo = document.querySelectorAll(".info")
const form = document.getElementById("regForm")
const disciplineSelector = document.getElementById("disciplineSelect");


// This function  is used to dynamically generate the available disciplines after selecting a department
if(disciplineSelector && depSelectSelect){
    const disciplines = [   ["Hackathon","Algo-Problem-solving","Cyber security"],
                        ["VI Design","UI/UX Design","3D modeling"],
                        ["Cinematography","Photography","Video Editing"]       ]

    depSelectSelect.addEventListener('change', e => {
    let temp
    switch (e.target.value) {
        case "Development":
            temp = disciplines[0]
            console.log(temp)
            disciplineSelector.innerHTML = "";
            temp.forEach(x => {
                const elt = document.createElement("option")
                elt.textContent = x
                disciplineSelector.append(elt)
            })

            break
        case "Design":
            temp = disciplines[1]
            disciplineSelector.innerHTML = "";
            temp.forEach(x => {
                const elt = document.createElement("option")
                elt.textContent = x
                disciplineSelector.append(elt)
            })

            break
        case "Multimedia":
            temp = disciplines[2]
            disciplineSelector.innerHTML = "";
            temp.forEach(x => {
                const elt = document.createElement("option")
                elt.textContent = x
                disciplineSelector.append(elt)
            })

            break
        default:
            disciplineSelector.innerHTML = "";
            const elt = document.createElement("option")
            elt.textContent = "Select a Department first"
            disciplineSelector.append(elt)

            break
    }
});


}

// this function is used to organize data and then send it to the backend if it exists :))
function submitInformation(){
    const prohibitedText = new Set(String(1234567890))
    let finalizedData = []
    form.addEventListener("submit", e => {
        e.preventDefault() 
    })

    // verify everything except for the motivation and the links
    for(let i = 0; i < 3; i++){
        if(userInfo[i].type != 'email'){
            if([...userInfo[i].value].some(char => prohibitedText.has(char))){
                window.alert("Numbers aren't allowed in name / last name fields")
                return
            }
            else if(userInfo[i].value.startsWith("choose your",0)){
                window.alert("Please fill the form!")
                return
            } 
            else {
                finalizedData.push(userInfo[i].value)
            }
        } else {
            finalizedData.push(userInfo[i].value)
        }

    }
    // then here we use fetch to send data to the backend, we can work on it later on 
}

// footer
const targetDate = new Date("2024-12-07T23:59:59").getTime(); 

function updateCountdown() {
    const now = new Date().getTime();

    const timeLeft = targetDate - now;
    if (timeLeft < 0) {
    
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }


    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);