const filmesSurpresa = [
    "A Bela e a Fera",
    "O Senhor dos Anéis",
    "O Diabo Veste Prada",
    "Forrest Gump",
    "De Repente 30",
    "Esqueceram de Mim",
    "Mamma Mia!",
    "Jurassic Park",
    "Dirty Dancing",
    "Titanic",
    "Harry Potter e a Pedra Filosofal"
];

function escolherFilmeSurpresa() {
    const indiceFilme = Math.floor(Math.random() * filmesSurpresa.length);
    return filmesSurpresa[indiceFilme];
}

document.querySelector(".descubra-button").addEventListener("click", function() {
    alert("Você merece uma fabrica de chocolate, mas ainda não cheguei lá, então aproveite uma barrinha pelo menos. Amo você!");
});

document.querySelector(".filme-button").addEventListener("click", function() {
    const filmeEscolhido = escolherFilmeSurpresa();
    // Utilizando a classe "filme-escolhido" para definir a cor do texto como preto
    document.querySelector("#filmeEscolhido").textContent = `Filme Surpresa: ${filmeEscolhido}`;
    document.querySelector("#mensagemEspecial").textContent = "Você merece esse descanso. Amo você, estresadinha!";
});
