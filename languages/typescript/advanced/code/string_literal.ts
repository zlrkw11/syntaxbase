// restrict the value to be one of the strings
type EventNames = "click" | "scroll" | "mousemove";

function handleEvent(ele: Element, event: EventNames) {
  // action
}

const element = document.getElementById("hello");
if (element) {
  handleEvent(element, "scroll");
}
