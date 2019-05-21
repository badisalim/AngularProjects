window.addEventListener("DOMContentLoaded", () => {
    const [form] = document.getElementsByTagName("form");
    const button = document.getElementById("button");
    const p = document.getElementById("textArea");
    const [input] = document.getElementsByTagName("input");
    let name = "You";
  
    form.addEventListener("submit", event => {
      name = input.value;
      event.preventDefault();
      p.innerHTML = `Hello ${name}`;
    });
  
    button.addEventListener("click", () => (p.innerHTML = `${name} clicked me`));
  });
  