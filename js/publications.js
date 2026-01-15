const publications = [
  {
    title: "Title of Paper 1",
    authors: "O. Hartzell, A. Coauthor",
    abstract: "Short abstract here...",
    link: "https://ssrn.com/link-to-paper"
  },
  {
    title: "Title of Paper 2",
    authors: "O. Hartzell",
    abstract: "Another abstract here...",
    link: "https://ssrn.com/link-to-paper2"
  }
];

const container = document.getElementById("publications");

publications.forEach(pub => {
  const div = document.createElement("div");
  div.classList.add("publication");

  div.innerHTML = `
    <h2>${pub.title}</h2>
    <p><em>${pub.authors}</em></p>
    <button class="expand-btn">Read Abstract</button>
    <div class="abstract">${pub.abstract}</div>
    <p><a href="${pub.link}" target="_blank">View Paper</a></p>
  `;

  container.appendChild(div);
});

document.querySelectorAll(".expand-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("show");
  });
});
