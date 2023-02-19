// Definir o idioma padrão (inglês)
let language = "en";

// Alterar o idioma com base no valor do atributo "lang" na tag "html"
const htmlTag = document.querySelector("html");
if (htmlTag.lang) {
  language = htmlTag.lang;
}

// Carregar o arquivo de tradução apropriado com base no idioma
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

// Atualizar o conteúdo da página com as traduções
translations.then(data => {
  document.getElementById("title").innerText = data["welcome"];
  document.getElementById("welcome").innerText = data["welcome"];
  document.getElementById("continue").innerText = data["continue"];
  document.getElementById("langSelect").querySelectorAll("option").forEach(option => {
    option.text = data[option.value];
  });
});

// Adicionar evento de clique para atualizar as traduções
document.querySelectorAll(".language-options a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const newLanguage = event.target.dataset.lang;
    document.documentElement.lang = newLanguage;
    window.location.search = `lang=${newLanguage}`;
  });
});

// Atualizar a seleção do idioma com base na query string
const queryString = window.location.search;
if (queryString) {
  const newLanguage = queryString.substring(6);
  const langSelect = document.getElementById("langSelect");
  langSelect.value = newLanguage;
  langSelect.dispatchEvent(new Event("change"));
}

