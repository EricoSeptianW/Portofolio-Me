// Clear Before Unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Toggle Navbar
const navSlide = () => {
  const slider = document.querySelector(".slider");
  const navList = document.querySelector("nav");

  slider.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    slider.classList.toggle("toggle-slider");
  });
};

navSlide();

// Scroll Script
ScrollNav();
/**
 * Adjusts the CSS custom property `--scroll-padding` to match the height of the primary navigation.
 * This ensures proper spacing for scroll-based navigation.
 *
 * The function selects the element with the class `primary-navigation`,
 * calculates its height, and sets the `--scroll-padding` property on the
 * root element (`:root`) to the height of the navigation in pixels.
 *
 * Usage:
 * Call this function after the DOM has fully loaded to ensure the navigation
 * element is available and its height is correctly calculated.
 */
function ScrollNav() {
  const navigation = document.querySelector(".nav");

  if (navigation) {
    const navigationHeight = navigation.offsetHeight;
    document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");
  } else {
    console.warn("Element with class 'primary-navigation' not found.");
  }
}
