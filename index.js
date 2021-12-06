const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelector(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1]

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount.value > 0){ // 12
        if (cashGiven.value > billAmount.value){  // 2022 > 12 => true
            const amountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);
        } else {
            showMessage("Do you wanna wash plates ? ");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }   
});

function calculateChange(amountToBeReturn){
    // console.log(amountToBeReturn)       //2010 / 2000 = 1
    // go over all the available 
    for (let i=0; i < availableNotes.length; i++){
        // console.log(availableNotes[i])


        // no of notes need for the denomination
        const numberOfNotes = Math.floor(
            amountToBeReturn / availableNotes[i]
        );
        
        //2010 / 2000 = 1  || 10 / 500 = 0
        //amount left after calculatingthenumberof notes needed
        amountToBeReturn =  amountToBeReturn % availableNotes[i];   //2010 % 2000 = 10
        console.log(amountToBeReturn)
        console.log(numberOfNotes)

        //updating the noof notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
        
        // console.log(noOfNotes)
    }
}
function hideMessage (){
    message.style.display = "none";
}

function showMessage (msg){
    message.style.display = "block";
    message.innerText = msg;

}