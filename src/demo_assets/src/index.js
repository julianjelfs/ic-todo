import { demo } from "../../declarations/demo";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with demo actor, calling the greet method
  const greeting = await demo.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
