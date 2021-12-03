"use strict";

const billInput = document.querySelector("#bill");
const partyInput = document.querySelector("#party-count");
const customTip = document.querySelector(".percent.custom");
const customTipInput = document.getElementById("custom-tip");
const container = document.querySelector(".percentages");
const tips = document.querySelectorAll(".percent");
const tipTotal = document.getElementById("tip-total");
const billTotal = document.getElementById("bill-total");
const resetBtn = document.getElementById("reset");
const err = document.querySelector(".err");
let selectedTip;

///// Functions

//Validate Bill Amount
function validate(value) {
  var rgx = /^[0-9]*\.?[0-9]*$/;
  return value.match(rgx);
}

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
  selectedTip = "";
  if (document.querySelector(".percent.selected"))
    document.querySelector(".percent.selected").classList.remove("selected");

  resetTotals();
});

///// Event Listeners
// Listen for billinPut
billInput.addEventListener("keyup", (e) => {
  validate(e.key) != [""] ? calcTotals() : NaN;
});

//Listen for custom tip
customTipInput.addEventListener("keyup", (e) => {
  selectedTip = e.target.value;
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
  if (e.target.classList.contains("percent") || e.target === customTipInput) {
    if (document.querySelector(".percent.selected")) {
      document.querySelector(".percent.selected").classList.remove("selected");
    }
    e.target !== customTip && e.target !== customTipInput
      ? e.target.classList.add("selected")
      : customTip.classList.add("selected");

    e.target !== customTipInput && e.target !== customTip
      ? (selectedTip = e.target.textContent)
      : (selectedTip = customTipInput.value);
  }
  calcTotals();
});
