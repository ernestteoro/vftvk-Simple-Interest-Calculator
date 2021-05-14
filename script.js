function interestRateValue() {
    document.getElementById('interestValue').innerHTML = document.getElementById('interestRate').value
}

function compute() {
    amount = document.getElementById("principal").value;
    rateValue = document.getElementById("interestRate").value
    year = document.getElementById("years").value

    var interestAmount = (amount * (rateValue / 100)) * year

    console.log(amount)
    console.log(rateValue)
    console.log(year)
    console.log(interestAmount)

    const moonLanding = new Date();

    document.getElementById("result").innerHTML = interestAmount
    document.getElementById("depositAmount").innerHTML = document.getElementById("principal").value;
    document.getElementById("depositRate").innerHTML = document.getElementById("interestRate").value
    document.getElementById("numYears").innerHTML = (moonLanding.getFullYear() + year)


}