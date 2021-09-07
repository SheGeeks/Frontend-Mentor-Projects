const container = document.querySelector(".percentages");
let percentages;
const percent = document.querySelectorAll(".percent.selected");
let billInput, partyCount, tipTotal, selectedTip, customTip, billTotal;
// let partyCount;
// let tipTotal;
// let selectedTip;
// let customTip;
// let billTotal;

//Functions
// Calculate Tip Per Person
const calcTip = function (percent) {
  tipTotal = document.getElementById("tip-total").textContent = (
    (billInput / partyCount) *
    (percent / 100)
  )
    .toFixed(3)
    .slice(0, -1);
};

// Calculate Total Per Person
const calcTotal = function () {
  billTotal = document.getElementById("bill-total").textContent = (
    billInput / partyCount +
    Number(tipTotal)
  )
    .toFixed(3)
    .slice(0, -1);
};

container.addEventListener("click", (e) => {
  billInput = +document.querySelector("#bill").value;
  partyCount = +document.querySelector("#party-count").value;
  console.log(percentages);
  percentages = document.querySelector(".percent.selected");

  // Selected Percent Toggle
  if (
    e.target.classList.contains("percent") &&
    !e.target.classList.contains("custom")
  ) {
    if (percentages) {
      percentages.classList.remove("selected");
    }
    e.target.classList.toggle("selected");
    selectedTip = e.target.getAttribute("percentage");
    console.log(`Selected Tip: ${selectedTip}%`);
  } else if (
    e.target === document.getElementById("custom-tip") ||
    e.target.classList.contains("custom")
  ) {
    if (percentages) {
      percentages.classList.remove("selected");
    }

    selectedTip = customTip = +document.getElementById("custom-tip").value;

    document.querySelector(".percent.custom").classList.toggle("selected");
    document
      .querySelector(".percent.custom")
      .setAttribute("percentage", customTip / 100);

    console.log("Custom Tip: ", customTip);
  }

  //Update Values
  calcTip(selectedTip);
  calcTotal(Number(tipTotal));

  // Logs
  console.log("Total Bill: $" + billInput);
  console.log("Party of: " + partyCount);
  console.log("---------");
  console.log("Tip Per Person: $" + tipTotal);
  console.log("Total Per Person: $" + billTotal);
  console.log("--------------------------");
});
