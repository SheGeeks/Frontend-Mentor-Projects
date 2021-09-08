"use strict";

const container = document.querySelector(".percentages");
const percent = document.querySelectorAll(".percent.selected");
const billInput = document.querySelector("#bill");
const partyInput = document.querySelector("#party-count");
const resetBtn = document.querySelector("#reset");
const customTipInput = document.querySelector("#custom-tip");
const err = document.querySelector(".err");
let billAmount,
  partyCount,
  tipTotal,
  selectedTip,
  customTip,
  billTotal,
  percentages;

////// Functions
// Calculate Tip Per Person
const calcTip = function (percent) {
  tipTotal = document.getElementById("tip-total").textContent = (
    (billAmount / partyCount) *
    (percent / 100)
  )
    .toFixed(3)
    .slice(0, -1);
};

// Calculate Total Per Person
const calcBill = function () {
  billTotal = document.getElementById("bill-total").textContent = (
    billAmount / partyCount +
    Number(tipTotal)
  )
    .toFixed(3)
    .slice(0, -1);
};

//Calculate Tip & Total Per Person
const calcTotals = function () {
  billAmount = +document.querySelector("#bill").value;
  partyCount = +document.querySelector("#party-count").value;

  if (billAmount && partyCount && selectedTip) {
    calcTip(selectedTip);
    calcBill(Number(tipTotal));
    //Check for empty inputs
  } else if (!billAmount) {
    resetTotals();
  } else if (!selectedTip) {
    resetTotals();
  } else {
    resetTotals();
  }
};

// Reset Totals
const resetTotals = function () {
  document.getElementById("tip-total").textContent = "0.00";
  document.getElementById("bill-total").textContent = "0.00";
};

// Reset Everything
resetBtn.addEventListener("click", (e) => {
  document.getElementById("bill").value = "";
  document.getElementById("party-count").value = "";
  document.querySelector(".percent.selected").classList.remove("selected");
  resetTotals();
});

//// Event Listeners
// Listen for billinPut
billInput.addEventListener("keyup", (e) => calcTotals());

//Listen for custom tip
customTipInput.addEventListener("keyup", (e) => {
  selectedTip = customTip = +document.getElementById("custom-tip").value;
  calcTotals();
});

// Listen for party input
partyInput.addEventListener("keyup", (e) => {
  if (partyInput.value > 0 || partyInput.value === "") {
    err.style.display = "none";
    document.querySelector("#party-count").classList.remove("input-err");
    calcTotals();
  } else {
    err.style.display = "inline";
    document.querySelector("#party-count").classList.add("input-err");
  }
});

// Toggle Tip Percentage
container.addEventListener("click", (e) => {
  percentages = document.querySelector(".percent.selected");
  // Selected Tip Toggle
  if (
    e.target.classList.contains("percent") ||
    e.target === document.getElementById("custom-tip")
  ) {
    if (percentages) percentages.classList.remove("selected");
    e.target.classList.toggle("selected");
    selectedTip = !e.target.classList.contains("custom")
      ? e.target.getAttribute("percentage")
      : (customTip = +document.getElementById("custom-tip").value);

    //select custom tip from input as selected tip
    if (e.target === document.getElementById("custom-tip")) {
      selectedTip = customTip = +document.getElementById("custom-tip").value;
      document.querySelector(".percent.custom").classList.toggle("selected");
      document
        .querySelector(".percent.custom")
        .setAttribute("percentage", customTip / 100);
    }
  }
  calcTotals();
});
