// SPS Generators Interactive Script
document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Header
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isVisible = mobileDrawer.style.display === "block";
      mobileDrawer.style.display = isVisible ? "none" : "block";
    });
  }

  // 3. Quote Modal
  const modalOverlay = document.getElementById("quoteModalOverlay");
  const modalClose = document.getElementById("modalCloseBtn");
  const openButtons = document.querySelectorAll(".open-quote-modal");

  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modalOverlay) modalOverlay.classList.add("active");
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }

  // 4. Hero Slide Selection
  const heroIndicators = document.querySelectorAll(".hero-indicator-item");
  heroIndicators.forEach((btn) => {
    btn.addEventListener("click", () => {
      heroIndicators.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // 5. Client Marquee Scroll Arrows
  const clientTrack = document.getElementById("clientTrack");
  const prevBtn = document.getElementById("clientPrevBtn");
  const nextBtn = document.getElementById("clientNextBtn");

  if (clientTrack && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      clientTrack.parentElement.scrollBy({ left: -320, behavior: "smooth" });
    });
    nextBtn.addEventListener("click", () => {
      clientTrack.parentElement.scrollBy({ left: 320, behavior: "smooth" });
    });
  }

  // 6. Lead Form Submit
  const leadForm = document.getElementById("leadQuoteForm");
  const statusMsg = document.getElementById("formStatusMsg");
  if (leadForm && statusMsg) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      statusMsg.textContent = "Thank you! Our engineering team will contact you shortly.";
      statusMsg.style.color = "#10b981";
      statusMsg.style.marginTop = "1rem";
      statusMsg.style.fontWeight = "bold";
      leadForm.reset();
    });
  }
});
