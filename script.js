//linking to html
const refreshBtn = document.getElementById("refreshBtn")
const calcBtn = document.getElementById("calcBtn")

//logic to calc percentage
function calcPercent() {
    //linking this here cos it didn't work in the global scope(i don't know why)
    var percentage = document.getElementById("percentageInput").value
    var number = document.getElementById("numInput").value
    const answer = document.getElementById("valueInput")

    answer.value = (percentage*number)/100

}
calcBtn.addEventListener("click", calcPercent)

//refresh logic

function refresh(){
    document.getElementById("percentageInput").value =""
    document.getElementById("numInput").value =""
    document.getElementById("valueInput").value=""
  }
  refreshBtn.addEventListener("click",refresh)