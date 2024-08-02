const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");

const resultFrame = document.getElementById("result");
const consoleDiv = document.getElementById("console");
const functionsDiv = document.getElementById("functions");

editor.on("change", () => {
  const code = editor.getValue();
  resultFrame.srcdoc = code;

  // Reset console
  consoleDiv.innerHTML = "";

  // Capture console logs from iframe
  resultFrame.onload = () => {
    resultFrame.contentWindow.console.log = function () {
      consoleDiv.innerHTML += Array.from(arguments).join(" ") + "<br>";
    };
  };

  // Extract and display functions
  extractFunctions(code);
});

function extractFunctions(code) {
  functionsDiv.innerHTML = "";
  try {
    const ast = acorn.parse(code, { ecmaVersion: 2020 });
    walk.simple(ast, {
      FunctionDeclaration(node) {
        const functionName = node.id.name;
        functionsDiv.innerHTML += `<div class="function-block">${functionName}</div>`;
      },
    });
  } catch (error) {
    console.error("Error parsing code:", error);
  }
}

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}