function highlightService(service) {
  service.style.borderColor = "#e70e0e";
}

function unhighlightService(service) {
  service.style.borderColor = "transparent";
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5,
});

const elementsToObserve = document.querySelectorAll(".observe-fade-in");

elementsToObserve.forEach((element) => {
  observer.observe(element);
});
