function calculateRetirement() {
  let currentAge = document.getElementById("currentage").value;
  let plannedRetirementAge = document.getElementById("retirementage").value;
  let monthlyContribution = document.getElementById("monthlycontribution").value;
  let expectedAnnualReturn = 0.12;
  let yearlyContribution = monthlyContribution * 12;
  let retirementSavings = 0;
  for(age = currentAge; age < plannedRetirementAge; age++) {
    let annualGrowth = (yearlyContribution + retirementSavings) * expectedAnnualReturn;
    let totalToDate = yearlyContribution + annualGrowth;
    retirementSavings += Math.round(totalToDate);
    
  }
  document.getElementById("result").innerHTML = `You will retire with $${retirementSavings.toLocaleString()}!`;
  document.getElementById("note").innerHTML = "Note: This calculation is based on a 12% annual return (the historical average annual return of the S&P 500 over 30 years) and no prior savings."
}

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

