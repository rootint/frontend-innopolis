var code_lines = document.getElementById("codelines");
var lines = "";
for (var i = 1; i < 120; ++i) {
  lines += i + "<br>"
}
code_lines.innerHTML = lines;