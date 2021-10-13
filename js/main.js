window.onload = function () {
  const endpoints = document.querySelectorAll("code");
  endpoints.forEach((ep) => {
    ep.addEventListener("click", () => {
      const lnk = ep.textContent;
      window.open("https://" + lnk, "_blank").focus();
    });
  });
};
