let balance = 1000000; // Demo bakiye

function notify(message) {
  const el = document.getElementById('notification');
  el.innerText = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2000);
}

// Transfer işlemi
document.getElementById('transferButton').onclick = () => {
  const amount = parseInt(document.getElementById('amount').value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    document.getElementById('balance').innerText = balance + " MEGA.MAÇA";
    notify("Transfer başarılı (demo)!");
  } else {
    notify("Hata: Geçersiz miktar!");
  }
};

// Mint işlemi
document.getElementById('mintButton').onclick = () => {
  const amount = parseInt(document.getElementById('mintAmount').value);
  if (amount > 0) {
    balance += amount;
    document.getElementById('balance').innerText = balance + " MEGA.MAÇA";
    notify("Mint başarılı (demo)!");
  } else {
    notify("Hata: Geçersiz miktar!");
  }
};

// Burn işlemi
document.getElementById('burnButton').onclick = () => {
  const amount = parseInt(document.getElementById('burnAmount').value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    document.getElementById('balance').innerText = balance + " MEGA.MAÇA";
    notify("Burn başarılı (demo)!");
  } else {
    notify("Hata: Geçersiz miktar!");
  }
};
