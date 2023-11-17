let getUsername = document.querySelector(".get-repos input");
let btn = document.querySelector(".get-btn");
let showData = document.querySelector(".show-data");

btn.addEventListener("click", getRepos);

function getRepos() {
  if (getUsername.value == "") {
    showData.innerHTML = "<span>Please Write Github Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${getUsername.value}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        showData.innerHTML = "";
        repos.forEach((repo) => {
          let mainDiv = document.createElement("div");
          let repoName = document.createTextNode(repo.name);
          mainDiv.appendChild(repoName);

          let url = document.createElement("a");
          let urlText = document.createTextNode("visit");
          url.appendChild(urlText);
          url.href = `https://github.com/${getUsername.value}/${repo.name}`;
          url.setAttribute("target", "_blank");
          mainDiv.appendChild(url);

          let stars = document.createElement("span");
          let starsText = document.createTextNode(
            `Stras ${repo.stargazers_count}`
          );
          stars.appendChild(starsText);
          mainDiv.appendChild(stars);

          mainDiv.className = "repo-box";

          showData.appendChild(mainDiv);
        });
      });
  }
}
