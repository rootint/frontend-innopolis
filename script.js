var code_lines = document.getElementById("codelines");
var code_snippet = document.getElementById("codesnippet");
var lines = "";
for (var i = 1; i < 100; ++i) {
  lines += i + "<br>";
}
code_lines.innerHTML = lines;

window.onload = async function () {
  var response = await (await fetch("https://favqs.com/api/qotd")).json();
  console.log(response["quote"]);
  code_snippet.innerText = "Quote of the day: \n\n";
  code_snippet.innerText += JSON.stringify(response["quote"]["body"]) + '\n\n';
  code_snippet.innerText += JSON.stringify(response["quote"]["author"]);
};
