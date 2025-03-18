document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions[0].classList.add("active");
  const firstPanel = accordions[0].querySelector(".panel");
  firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const panel = this.querySelector(".panel");
      const isActive = this.classList.contains("active");

      accordions.forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".panel").style.maxHeight = null;
      });

      if (!isActive) {
        this.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
