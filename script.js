function interestRateValue() {
    document.getElementById('interestValue').innerHTML = document.getElementById('interestRate').value
}

function principalOnChangeEvent() {
    amount = parseInt(document.getElementById("principal").value);
    if (amount <= 0) {
        alert("Please inter a valide amount greater than 0")
        document.getElementById("principal").value = ""
    }

}

function compute() {
    amount = document.getElementById("principal").value;
    rateValue = document.getElementById("interestRate").value
    year = document.getElementById("years").value

    /// Calculating the interest amount
    var interestAmount = (parseInt(amount) * (parseInt(rateValue) / 100)) * parseInt(year)

    // getting the current date
    const moonLanding = new Date();
    // Displaying computed data
    document.getElementById("result").innerHTML = interestAmount
    document.getElementById("depositAmount").innerHTML = document.getElementById("principal").value;
    document.getElementById("depositRate").innerHTML = document.getElementById("interestRate").value
    document.getElementById("numYears").innerHTML = (parseInt(moonLanding.getFullYear()) + parseInt(year))


}