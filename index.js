const container = document.getElementById("coloredContainer");
const button = document.getElementById("hexgen");
const hexmessage = document.getElementById("givenHexCode");
const congrats = document.getElementById("message");

function createHex(length) {
  const characters = "0123456789abcdef";
  let result = ``;
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

button.addEventListener("click", () => {
  const hexvalue = createHex(6);
  const hexcode = `#${hexvalue}`;
  container.style.backgroundColor = hexcode;
  hexmessage.textContent = `${hexcode}`;
  congrats.textContent = "Congrats! this is your new hex code!";
});
