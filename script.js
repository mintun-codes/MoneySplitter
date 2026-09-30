const peopleInput = document.getElementById("total-people");
const participantSection = document.getElementById("participants");
const moneyPaidTotal = document.getElementById("total-money");

peopleInput.addEventListener("input", () => {
    totalPeople(Number(peopleInput.value));
});

function totalPeople(numberOfPeople) {
    const deleteGeneratedPerson = document.querySelectorAll(".generated-person");
    deleteGeneratedPerson.forEach((person) => person.remove());
    for (let i = 1; i < numberOfPeople; i++) {
        const peopleNameDiv = document.createElement("div");
        const nameLabel = document.createElement("label");
        const nameInput = document.createElement("input");
        const moneylabel = document.createElement("label");
        const moneyInput = document.createElement("input");
        peopleNameDiv.classList.add("person-detail");
        nameLabel.textContent = "Participant name:";
        moneylabel.textContent = "Amount paid:";
        nameInput.setAttribute("type", "text");
        moneyInput.setAttribute("type", "number");
        participantSection.appendChild(peopleNameDiv);
        peopleNameDiv.appendChild(nameLabel);
        peopleNameDiv.appendChild(nameInput);
        peopleNameDiv.appendChild(moneylabel);
        peopleNameDiv.appendChild(moneyInput);

        peopleNameDiv.classList.add("person-detail");
        peopleNameDiv.classList.add("text-container");
        peopleNameDiv.classList.add("generated-person");
        nameInput.classList.add("participant-name");
        moneyInput.classList.add("participant-money");


    }
}

const textContentPeopleInput = peopleInput.value;
const calculateSplit = document.getElementById("btn-click");


function participantDetails() {

    const objArray = [];
    const nameInputs = document.querySelectorAll(".participant-name");
    const moneyInputs = document.querySelectorAll(".participant-money");

    if (
        peopleInput.value === "" || Number(peopleInput.value) <= 0 || moneyPaidTotal.value === "" || Number(moneyPaidTotal.value) <= 0
    ) {
        alert("Please enter valid Total money and Total people.");
        return;
    }
    nameInputs.forEach((person, index) => {
        const participantObj = {};
        participantObj.name = person.value;
        participantObj.amountPaid = Number(moneyInputs[index].value);
        objArray.push(participantObj);
    })

    return calculation(objArray)
}
calculateSplit.addEventListener("click", participantDetails);

function calculation(data) {
    const totalMoney = Number(document.getElementById("total-money").value);
    const totalNoOfPeople = Number(document.getElementById("total-people").value);
    const paidMoreMoney = [];
    const paidLessMoney = [];
    const moneyOwes = [];

    const fairShare = totalMoney / totalNoOfPeople;
    data.forEach((moneyObj, index) => {
        if (moneyObj.amountPaid > fairShare) {
            paidMoreMoney.push(index);

        }
        if (moneyObj.amountPaid < fairShare) {
            paidLessMoney.push(index);
            moneyOwes.push(fairShare - moneyObj.amountPaid);
        }
    })

    const resultSplit = document.querySelector(".result-row");
    const generatedresult = document.querySelectorAll(".generated-result");

    generatedresult.forEach((result) => {
        result.remove();
    })

    if (paidLessMoney.length === 0) {
        const resultMessage = document.createElement("div");
        resultMessage.textContent = "Everyone has paid their fair share.";
        resultMessage.classList.add("generated-result");
        resultSplit.appendChild(resultMessage);
        return;
    }

    paidLessMoney.forEach((arrAmount, index) => {
        const resultElement = document.createElement("div");
        const resultElementGenerated = document.createElement("div");
        const resultMoney = document.createElement("div");
        resultElement.textContent = data[arrAmount].name;
        resultMoney.textContent = "-₹" + moneyOwes[index].toFixed(2);
        resultElementGenerated.appendChild(resultElement);
        resultElementGenerated.appendChild(resultMoney);
        resultElementGenerated.classList.add("result-row");
        resultElementGenerated.classList.add("generated-result");
        resultSplit.appendChild(resultElementGenerated);

    })

}