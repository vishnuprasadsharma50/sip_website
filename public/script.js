function calculateSIP() {
    const monthlyInvestment = parseFloat(document.getElementById("monthlyInvestment").value);
    const returnRate = parseFloat(document.getElementById("returnRate").value) / 100 / 12;
    const years = parseFloat(document.getElementById("years").value);
    const months = years * 12;

    // SIP formula: FV = P × [(1 + r)^n - 1] × (1 + r) / r
    const futureValue = monthlyInvestment * (((1 + returnRate) ** months - 1) * (1 + returnRate) / returnRate);

    // Display result
    document.getElementById("resultValue").innerText = `₹${futureValue.toFixed(2)}`;
}
