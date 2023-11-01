// write your JavaScript here
const form = document.getElementById("subscribe-form");
form.addEventListener("submit", subscribe);

function subscribe(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  alert(data.get("email") + " subscribed successfully!");
}
