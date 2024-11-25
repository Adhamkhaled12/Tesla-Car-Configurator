const topBar = document.querySelector("#top-bar");

// Handle Top bar on scroll
const handleScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar");
};
