let countTotalIncome = 0;
let countTotalExpenses = 0;

// wyświetlanie przychodów w formie listy i zsumowanie przychodów

let displayIncome = () => {
  let incomeName = document.querySelector("#inputName");
  let incomeAmount = document.querySelector("#inputAmount");

  if (!incomeAmount.value) {
    return false;
  }

  let ul = document.querySelector("#displayIncome");
  let li = document.createElement("li");
  li.style.marginBottom = "20px";
  li.style.listStyleType = "none";
  li.style.fontSize = "20px";
  let span = document.createElement("span");
  li.appendChild(span);
  span.textContent = incomeName.value + ": " + incomeAmount.value + " zł ";
  li.dataset.amount = incomeAmount.value;
  li.dataset.name = incomeName.value;
  ul.appendChild(li);

  // button do edytowania pozycji
  let buttonEdit = document.createElement("button");
  buttonEdit.textContent = "edytuj";
  buttonEdit.style.borderRadius = "4px";
  buttonEdit.style.border = "1px solid black";
  buttonEdit.style.marginLeft = "10px";
  buttonEdit.style.width = "60px";
  buttonEdit.style.padding = "5px";
  buttonEdit.style.fontSize = "16px";
  buttonEdit.addEventListener("click", (event) => {
    let liElement = event.target.parentNode;

    buttonRemove.style.display = "none";
    const inputIncome = document.createElement("input");
    inputIncome.value = liElement.dataset.name;
    inputIncome.style.borderRadius = "4px";
    inputIncome.style.border = "1px solid black";
    inputIncome.style.marginLeft = "10px";
    inputIncome.style.width = "120px";
    inputIncome.style.padding = "5px";
    const inputAmount = document.createElement("input");
    inputAmount.value = liElement.dataset.amount;
    inputAmount.style.borderRadius = "4px";
    inputAmount.style.border = "1px solid black";
    inputAmount.style.marginLeft = "10px";
    inputAmount.style.width = "120px";
    inputAmount.style.padding = "5px";
    const buttonConfirm = document.createElement("button");
    buttonConfirm.textContent = "zapisz";
    buttonConfirm.style.borderRadius = "4px";
    buttonConfirm.style.border = "1px solid black";
    buttonConfirm.style.marginLeft = "10px";
    buttonConfirm.style.width = "60px";
    buttonConfirm.style.padding = "5px";
    buttonConfirm.style.fontSize = "16px";
    /// dodawanie div'a
    let inputDiv = document.querySelector(".inputContainer");
    inputDiv.style.marginBottom = "20px";
    inputDiv.appendChild(inputIncome);
    inputDiv.appendChild(inputAmount);
    inputDiv.appendChild(buttonConfirm);

    buttonConfirm.addEventListener("click", (event) => {
      updateSumOfAmounts(
        "#displayTotalIncome",
        inputAmount.value,
        "edit",
        liElement.dataset.amount
      );

      liElement.querySelector("span").textContent =
        inputIncome.value + ": " + inputAmount.value + " zł ";
      liElement.dataset.amount = inputAmount.value;
      liElement.dataset.name = inputIncome.value;

      inputIncome.remove();
      inputAmount.remove();
      buttonConfirm.remove();
    });
  });
  li.appendChild(buttonEdit);

  // button do usuwania pozycji
  let buttonRemove = document.createElement("button");
  buttonRemove.textContent = "usuń";
  buttonRemove.style.borderRadius = "4px";
  buttonRemove.style.border = "1px solid black";
  buttonRemove.style.marginLeft = "10px";
  buttonRemove.style.width = "60px";
  buttonRemove.style.padding = "5px";
  buttonRemove.style.fontSize = "16px";
  buttonRemove.addEventListener("click", (event) => {
    let liElement = event.target.parentNode;
    const incomeToRemove = liElement.dataset.amount;
    updateSumOfAmounts("#displayTotalIncome", incomeToRemove, "minus");
    liElement.remove();
  });
  li.appendChild(buttonRemove);

  console.log(incomeAmount.value);

  updateSumOfAmounts("#displayTotalIncome", incomeAmount.value);

  incomeAmount.value = null;
  incomeName.value = null;

  return countTotalIncome;
};
document.querySelector("#button").addEventListener("click", displayIncome);

// wyświetlanie wyadtków w formie listy i zsumowanie wydatków

let displayExpenses = () => {
  let expensesName = document.querySelector("#inputNameBis");
  let expensesAmount = document.querySelector("#inputAmountBis");

  if (!expensesAmount.value) {
    return false;
  }

  let ul = document.querySelector("#displayExpenses");
  let li = document.createElement("li");
  li.style.marginBottom = "20px";
  li.style.listStyleType = "none";
  li.style.fontSize = "20px";
  let span = document.createElement("span");
  li.appendChild(span);
  span.textContent = expensesName.value + ": " + expensesAmount.value + " zł ";
  li.dataset.amount = expensesAmount.value;
  li.dataset.name = expensesName.value;
  ul.appendChild(li);

  // button do edytowania pozycji
  let buttonEdit = document.createElement("button");
  buttonEdit.textContent = "edytuj";
  buttonEdit.style.borderRadius = "4px";
  buttonEdit.style.border = "1px solid black";
  buttonEdit.style.marginLeft = "10px";
  buttonEdit.style.width = "60px";
  buttonEdit.style.padding = "5px";
  buttonEdit.style.fontSize = "16px";
  buttonEdit.addEventListener("click", (event) => {
    let liElement = event.target.parentNode;

    buttonRemove.style.display = "none";
    const inputExpenses = document.createElement("input");
    inputExpenses.value = liElement.dataset.name;
    inputExpenses.style.borderRadius = "4px";
    inputExpenses.style.border = "1px solid black";
    inputExpenses.style.marginLeft = "10px";
    inputExpenses.style.width = "120px";
    inputExpenses.style.padding = "5px";
    const inputAmountBis = document.createElement("input");
    inputAmountBis.value = liElement.dataset.amount;
    inputAmountBis.style.borderRadius = "4px";
    inputAmountBis.style.border = "1px solid black";
    inputAmountBis.style.marginLeft = "10px";
    inputAmountBis.style.width = "120px";
    inputAmountBis.style.padding = "5px";
    const buttonConfirm = document.createElement("button");
    buttonConfirm.textContent = "zapisz";
    buttonConfirm.style.borderRadius = "4px";
    buttonConfirm.style.border = "1px solid black";
    buttonConfirm.style.marginLeft = "10px";
    buttonConfirm.style.width = "60px";
    buttonConfirm.style.padding = "5px";
    buttonConfirm.style.fontSize = "16px";

    let inputDiv = document.querySelector(".inputContainerBis");
    inputDiv.style.marginBottom = "20px";
    inputDiv.appendChild(inputExpenses);
    inputDiv.appendChild(inputAmountBis);
    inputDiv.appendChild(buttonConfirm);

    buttonConfirm.addEventListener("click", (event) => {
      updateSumOfAmounts(
        "#displayTotalExpenses",
        inputAmountBis.value,
        "edit",
        liElement.dataset.amount
      );

      liElement.querySelector("span").textContent =
        inputExpenses.value + ": " + inputAmountBis.value + " zł ";
      liElement.dataset.amount = inputAmountBis.value;
      liElement.dataset.name = inputExpenses.value;

      inputExpenses.remove();
      inputAmountBis.remove();
      buttonConfirm.remove();
    });
  });
  li.appendChild(buttonEdit);

  // button do usuwania pozycji
  let buttonRemove = document.createElement("button");
  buttonRemove.textContent = "usuń";
  buttonRemove.style.borderRadius = "4px";
  buttonRemove.style.border = "1px solid black";
  buttonRemove.style.marginLeft = "10px";
  buttonRemove.style.width = "60px";
  buttonRemove.style.padding = "5px";
  buttonRemove.style.fontSize = "16px";
  buttonRemove.addEventListener("click", (event) => {
    const liElement = event.target.parentNode;
    const expenseToRemove = liElement.dataset.amount;
    updateSumOfAmounts("#displayTotalExpenses", expenseToRemove, "minus");
    liElement.remove();
  });
  li.appendChild(buttonRemove);

  updateSumOfAmounts("#displayTotalExpenses", expensesAmount.value);

  expensesAmount.value = null;
  expensesName.value = null;

  return countTotalExpenses;
};
document.querySelector("#buttonBis").addEventListener("click", displayExpenses);

let updateSumOfAmounts = (element, amount, type, existingAmount) => {
  let textLabel = "wydatków";
  let countToUpdate = countTotalExpenses;
  if (element === "#displayTotalIncome") {
    textLabel = "przychodów";
    countToUpdate = countTotalIncome;
  }

  let displayTotalExpenses = document.querySelector(element);
  if (type === "minus") {
    countToUpdate -= parseInt(amount);
  } else if (type === "edit") {
    countToUpdate -= parseInt(existingAmount);
    countToUpdate += parseInt(amount);
  } else {
    countToUpdate += parseInt(amount);
  }
  displayTotalExpenses.textContent =
    `suma ${textLabel}: ` + countToUpdate + " zł";
  displayTotalExpenses.dataset.amount = parseInt(countToUpdate);

  if (element === "#displayTotalIncome") {
    countTotalIncome = countToUpdate;
  } else {
    countTotalExpenses = countToUpdate;
  }

  updateWallet();
};

let updateWallet = (value) => {
  let totalExpenses = document.querySelector("#displayTotalExpenses").dataset
    .amount;
  let totalIncome = document.querySelector("#displayTotalIncome").dataset
    .amount;
  const totalAmount = totalIncome - totalExpenses;

  if (totalAmount > 0) {
    document.querySelector("#totalResult").innerHTML =
      "Możesz jeszcze wydać " + totalAmount + " zł.";
  } else if (totalAmount == 0) {
    document.querySelector("#totalResult").innerHTML = "Bilans wynosi zero.";
  } else {
    document.querySelector("#totalResult").innerHTML =
      "Bilans jest ujemny. Jesteś na minusie " + Math.abs(totalAmount) + " zł.";
  }
};
