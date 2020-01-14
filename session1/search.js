const books = [
  { author: "Bill Gates", title: "The Road Ahead" },
  { author: "Steve Jobs", title: "Walter Isaacson" },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games"
  }
];
function keyCode(event) {
  var x = event.keyCode;
  if (x == 13) {
    findBook();
  }
}
function findBook() {
  const inputText = document.getElementById("searchInput").value.trim();
  console.log(inputText);
  const found = books.find(
    element => element.author === inputText || element.title === inputText
  );
  console.log(found);
  document.getElementById("result").innerHTML =
    "<strong>Author:</strong>" +
    found.author +
    ", <strong>Title:</strong>" +
    found.title;
}
