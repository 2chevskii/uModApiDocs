window.onload = function () {
  let vars = {
    game: "",
    plugin1: "",
    plugin2: "",
    page1: "",
    page2: "",
    tags: "",
  };
  const endpoints = document.querySelectorAll("code");
  endpoints.forEach((ep) => {
    ep.addEventListener("click", () => {
      const lnk = ep.textContent;
      window.open("https://" + lnk, "_blank").focus();
    });
  });

  const spagein = document.querySelector("#search-page-in");

  spagein.addEventListener("change", () => {});
};
