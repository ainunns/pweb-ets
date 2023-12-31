const APIurl = "https://www.freeforexapi.com/api/live";

const supportedPairs = [
  "EURUSD",
  "EURGBP",
  "GBPUSD",
  "USDJPY",
  "AUDUSD",
  "USDCHF",
  "NZDUSD",
  "USDCAD",
  "USDZAR",
];

const allCurrencies = async () => {
  try {
    const res = await fetch(
      "http://apilayer.net/api/live?access_key=ff0c3c1268db0a8bdbfc31b4d6ab09d1&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR"
    );
    const data = await res.json();
    const currencies = data.quotes;

    const contents = document.getElementById("content");

    for (let x in currencies) {
      const el = document.createElement("div");
      el.classList.add(
        "col-12",
        "card",
        "border-0",
        "border-start",
        "border-primary",
        "border-2",
        "shadow-sm"
      );
      const el2 = document.createElement("div");
      el2.classList.add("card-body");
      const p = document.createElement("p");
      p.classList.add("card-title");
      p.innerText = `${x}`;
      const h5 = document.createElement("h5");
      h5.classList.add("card-text");
      h5.innerText = `${currencies[x]}`;
      el2.appendChild(p);
      el2.appendChild(h5);
      el.appendChild(el2);
      contents.appendChild(el);
    }
    console.log(forexData);
  } catch (err) {
    console.log(err);
  }
};

allCurrencies();
