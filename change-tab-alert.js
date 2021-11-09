let output = document.querySelector("#output");
let switchTabsCount = 0;

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState) {
    switchTabsCount++;

    output.innerHTML = `You have switch tabs ${switchTabsCount / 2} times.`;
  }
});
