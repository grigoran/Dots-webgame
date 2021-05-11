import "../css/popup.css";

export function show(addres) {
  let textArea = document.createElement("input");
  textArea.setAttribute("type", "text");
  textArea.value = addres;
  textArea.setAttribute("readonly", "");
  textArea.classList.add("text-area");

  let gotoButton = document.createElement("button");
  gotoButton.classList.add("goto-button");
  gotoButton.innerText = "Скопировать и перейти";
  gotoButton.addEventListener("click", () => {
    textArea.select();
    document.execCommand("copy");
    window.location.href = addres;
  });

  let popupFrame = document.createElement("div");
  popupFrame.classList.add("popup-frame");
  popupFrame.append(textArea, gotoButton);

  document.body.append(popupFrame);
}
