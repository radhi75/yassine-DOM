var btn = document.querySelector("button");
function test() {
  if (btn.innerText == "click me") {
    return (btn.innerText = "you clicked me");
  } else return (btn.innerText = "click me");
}
