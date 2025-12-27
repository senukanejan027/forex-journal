let pipValue = 0;

function setPipValue() {
  let pair = document.getElementById("pair").value;

  if (pair === "EURUSD" || pair === "GBPUSD") {
    pipValue = 10; // 1 lot = $10 per pip
  }
  else if (pair === "USDJPY") {
    pipValue = 9; // approx
  }
  else if (pair === "XAUUSD") {
    pipValue = 1; // Gold: 1 lot = $1 per 0.01
  }

  document.getElementById("pipDisplay").innerText =
    "Pip Value per 1 Lot: $" + pipValue;
}

function calculateLot() {
  let balance = document.getElementById("balance").value;
  let risk = document.getElementById("risk").value;
  let sl = document.getElementById("sl").value;

  if (pipValue === 0) {
    alert("Please select a currency pair");
    return;
  }

  let lot = (balance * (risk / 100)) / (sl * pipValue);

  document.getElementById("result").innerText =
    "Recommended Lot Size: " + lot.toFixed(2);
}
