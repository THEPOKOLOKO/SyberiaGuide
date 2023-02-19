// definir o idioma padrão (inglês)
let language = "en";

// alterar o idioma com base no valor do atributo "lang" na tag "html"
const htmlTag = document.querySelector("html");
if (htmlTag.lang) {
  language = htmlTag.lang;
}

// carregar o arquivo de tradução apropriado com base no idioma
let translations;
switch (language) {
  case "en":
    translations = fetch("en.json").then(response => response.json());
    break;
  case "pt":
    translations = fetch("pt.json").then(response => response.json());
    break;
    case "es":
    translations = fetch("es.json").then(response => response.json());
    break;
    case "ru":
    translations = fetch("ru.json").then(response => response.json());
    break;
  default:
    console.warn(`Translation not found for language '${language}', using English.`);
    translations = fetch("en.json").then(response => response.json());
}

// atualizar o conteúdo da página com as traduções
translations.then(data => {
  document.getElementById("title").innerText = data["welcome"];
  document.getElementById("welcome").innerText = data["welcome"];
  document.getElementById("continue").innerText = data["continue"];
  document.getElementById("image").setAttribute("alt", data["welcome_image_alt"]);
});
