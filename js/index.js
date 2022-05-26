
const ratesList = document.querySelector('.content-wrapper .list #rates-table tbody');
const cryptoList = document.querySelector('.content-wrapper .list #crypto-table tbody');

async function getRates() {
  let returnedData = [];
  const res = await fetch('https://api.coincap.io/v2/rates?limit=200');
  if (res.ok) {
    returnedData = await res.json();
  }
  return returnedData;
}

async function getCryptos() {
  let returnedData = [];
  const res = await fetch('https://api.coincap.io/v2/assets?limit=500');
  if (res.ok) {
    returnedData = await res.json();
  }
  return returnedData;
}


async function rendRates() {
  const arr = await getRates()
  arr.data.forEach((item, i) => {
    const candidat = document.createElement('tr');
    candidat.innerHTML = `<td class="num">${i}</td>
                        <td class="symbol">${item.symbol}</td>
                        <td class="id">${item.id}</td>`
    ratesList.append(candidat);
  });
}
async function rendCrypto() {
  const arr = await getCryptos();
  arr.data.forEach((item, i) => {
    const candidat = document.createElement('tr');
    candidat.innerHTML = `<td class="name">${item.name}</td>
                        <td class="symbol">${item.symbol}</td>
                        <td class="id">${item.id}</td>`
    cryptoList.append(candidat);
  });
}

rendRates();
rendCrypto();