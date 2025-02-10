// document.addEventListener("DOMContentLoaded", function () {
//     const botoes = document.querySelectorAll(".header-buttons button");

//     botoes.forEach(botao => {
//         botao.addEventListener("click", function () {
//             botoes.forEach(btn => btn.classList.remove("active"));
//             this.classList.add("active");
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const repoList = document.getElementById("repo-list");

    fetch("https://api.github.com/users/toniamv/repos")
        .then(response => response.json())
        .then(data => {
            repoList.innerHTML = ""; // Clear previous content
            data.forEach(repo => {
                const listItem = document.createElement("li");
                if(repo.name != "toniamv"){
                    listItem.innerHTML = `<p>${repo.name}</p>`;
                    repoList.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error("Error fetching repos:", error));
});
