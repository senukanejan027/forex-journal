function calculateLot() {
  let balance = document.getElementById("balance").value;
  let risk = document.getElementById("risk").value;
  let sl = document.getElementById("sl").value;
  let pip = document.getElementById("pip").value;

  let lot = (balance * (risk / 100)) / (sl * pip);
  document.getElementById("result").innerText =
    "Recommended Lot Size: " + lot.toFixed(2);
}

