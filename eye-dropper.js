const output = document.querySelector("#output");

const openEyeDropper = () => {
  new EyeDropper().open().then((color) => (output.innerHTML = color.sRGBHex));
};
