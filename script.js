const peopleInput = document.getElementById("total-people");
const participantSection = document.getElementById("participants");

peopleInput.addEventListener("input", () => {
    totalPeople(Number(peopleInput.value));
});

function totalPeople(peopleInput) {
    for (let i = 1; i < peopleInput; i++) {
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

    }
}
totalPeople(peopleInput);