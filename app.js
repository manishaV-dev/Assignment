// Ensure script runs when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarNav = document.getElementById("navbarNav");
  
  menuToggle.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
    menuToggle.innerHTML = navbarNav.classList.contains("show")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  
  document.querySelector("#menu1").addEventListener("click", function (e) {
    e.preventDefault();
    let dropdownMenu = this.nextElementSibling;
    
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu !== dropdownMenu) menu.classList.remove("show");
    });

    dropdownMenu.classList.toggle("show");
    this.parentElement.classList.toggle("open"); // Rotate icon
  });
  
  
  // Breadcrumb opens from right side
  document.querySelectorAll(".breadcrumb-item").forEach((item) => {
    item.addEventListener("click", function () {
      document.body.classList.add("breadcrumb-open-right");
    });
  });

  // Swiper Initialization
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2.2 },
      1024: { slidesPerView: 2.5 },
    },
  });
});

  




