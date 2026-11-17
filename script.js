const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const modalClose = document.querySelector(".modal-close");

function closeNav() {
  if (!mainNav || !navToggle) return;
  mainNav.classList.remove("open");
  navToggle.classList.remove("active");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.classList.toggle("active", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

function openModal(src) {
  modalImage.src = src;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  setTimeout(() => {
    modalImage.src = "";
  }, 200);
}

document.querySelectorAll("[data-image]").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.image));
});

modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});

const header = document.querySelector(".site-header");
window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);
