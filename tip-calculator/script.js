"use strict";

const billInput = document.querySelector("#bill");
const partyInput = document.querySelector("#party-count");
const container = document.querySelector(".percentages");
const customTipInput = document.getElementById("custom-tip");
const tipTotal = document.getElementById("tip-total");
const billTotal = document.getElementById("bill-total");
const resetBtn = document.getElementById("reset");
const err = document.querySelector(".err");

let selectedTip;

////// Functions
// Calculate Tip Per Person
const calcTip = function (percent) {
  tipTotal.textContent = (
    (billInput.value / partyInput.value) *
    (percent / 100)
  )
    .toFixed(3)
    .slice(0, -1);
};

// Calculate Total Per Person
const calcBill = function () {
  billTotal.textContent = (
    billInput.value / partyInput.value +
    Number(tipTotal.textContent)
  )
    .toFixed(3)
    .slice(0, -1);
};

//Calculate Tip & Total Per Person
const calcTotals = function () {
  if (billInput.value && partyInput.value && selectedTip) {
    calcTip(selectedTip);
    calcBill(Number(tipTotal));
    document.getElementById("reset").removeAttribute("disabled");
    //Check for empty inputs
  } else {
    resetTotals();
  }
};

// Reset Totals
const resetTotals = function () {
  tipTotal.textContent = billTotal.textContent = "0.00";
  resetBtn.setAttribute("disabled", "disabled");
};

// Reset Everything
resetBtn.addEventListener("click", (e) => {
  billInput.value = partyInput.value = customTipInput.value = "";
  document.querySelector(".percent.selected").classList.remove("selected");

  resetTotals();
});

//// Event Listeners
// Listen for billinPut
billInput.addEventListener("keyup", (e) => calcTotals());

//Listen for custom tip
customTipInput.addEventListener("keyup", (e) => {
  selectedTip = customTipInput.value / 100;
  calcTotals();
});

// Listen for party input
partyInput.addEventListener("keyup", (e) => {
  if (partyInput.value > 0 || partyInput.value === "") {
    err.style.display = "none";
    partyInput.classList.remove("input-err");
    calcTotals();
  } else {
    err.style.display = "inline";
    partyInput.classList.add("input-err");
  }
});

// Toggle Tip Percentage
container.addEventListener("click", (e) => {
  let perSelected = document.querySelector(".percent.selected");
  // Selected Tip Toggle
  if (e.target.classList.contains("percent") || e.target === customTipInput) {
    if (perSelected) perSelected.classList.remove("selected");
    e.target.classList.toggle("selected");
    selectedTip = e.target.textContent;
    //select custom tip from input
    if (e.target === customTipInput) {
      selectedTip = customTipInput.value;
      document.querySelector(".percent.custom").classList.toggle("selected");
      document.querySelector(".percent.custom").textContent =
        customTipInput.value;
    }
  }
  calcTotals();
});
