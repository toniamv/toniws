document.addEventListener("DOMContentLoaded", function () {
    const repoList = document.getElementById("repo-list");

    fetch("https://api.github.com/users/toniamv/repos").then(response => response.json()).then(data => {
            repoList.innerHTML = "";
            data.forEach(repo => {
                const listItem = document.createElement("li");
                if(repo.name != "toniamv"){
                    listItem.innerHTML = `<div class="repo-item">
                                        <p class="p_titulo">${repo.name}</p>
                                        <p class = "p_descricao"> ${repo.description}</p>
                                        </div>`;
                    repoList.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error("Error fetching repos:", error));
});
