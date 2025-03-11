// Bagian pertama - Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

// Bagian kedua - Switch dan Tabel
(() => {
  HTMLElement.prototype.toggle = function(on) {
    switch(on) {
      case undefined:
        this.classList.toggle('hidden');
        break;
      case true:
        this.classList.remove('hidden');
        break;
      case false:
        this.classList.add('hidden');
        break;
      default:
        break;
    }
  }

  HTMLElement.prototype.hide = function() {
    this.toggle(false);
  }

  HTMLElement.prototype.show = function() {
    this.toggle(true);
  }

  const table = {
    checkboxes: document.querySelectorAll('.checkbox'),
    labelItemsSelected: document.getElementById('labelItemsSelected'),
    numberItemsSelected: 0,
    bulkActions: document.getElementById('bulkActions'),
    title: document.getElementById('title'),
  };

  let bulkActionsShown = table.numberItemsSelected > 0;
  console.log(`bulkActionsShown: ${bulkActionsShown}`);

  table.checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      table.numberItemsSelected = event.currentTarget.checked
        ? ++table.numberItemsSelected
        : --table.numberItemsSelected;

      table.labelItemsSelected.innerHTML = table.numberItemsSelected === 1
          ? `${table.numberItemsSelected} item selected`
          : `${table.numberItemsSelected} items selected`;

      bulkActionsShown = table.numberItemsSelected > 0;
      console.log(`bulkActionsShown: ${bulkActionsShown}`);

      if (bulkActionsShown) {
        table.bulkActions.show();
        table.title.hide();
      }
      else {
        table.bulkActions.hide();
        table.title.show();
      }
    });
  });
})();


// action-menu and action filter
document.addEventListener("DOMContentLoaded", function () {
  const actionButtons = document.querySelectorAll(".action");
  
  actionButtons.forEach(function (button) {
      const actionMenu = button.querySelector(".action-menu");
      const dotsIcon = button.querySelector(".bx");
      
      dotsIcon.addEventListener("click", function (event) {
          event.stopPropagation(); // Stop event from bubbling up
          
          if (actionMenu.style.display === "block") {
              actionMenu.style.display = "none";
          } else {
              actionMenu.style.display = "block";
          }
      });
  });

  // Close the menu if user clicks anywhere else on the page
  document.addEventListener("click", function () {
      actionButtons.forEach(function (button) {
          const actionMenu = button.querySelector(".action-menu");
          actionMenu.style.display = "none";
      });
  });
});

// toggle button
const toggle = document.getElementById('toggle');
    toggle.addEventListener('change', function() {
      if (this.checked) {
        // Kode yang akan dijalankan saat toggle diaktifkan
        console.log('Toggle diaktifkan');
      } else {
        // Kode yang akan dijalankan saat toggle dinonaktifkan
        console.log('Toggle dinonaktifkan');
      }
    });

  
// footer languagev
const selectBahasa = document.getElementById('bahasa');
  const konten = document.getElementById('konten');
        const pesan = {
            id: 'Selamat datang!',
            en: 'Welcome!',
            es: '¡Bienvenido!'
        };

        // Fungsi untuk mengubah bahasa
        selectBahasa.addEventListener('change', function () {
            const selectedBahasa = selectBahasa.value;
            konten.innerText = pesan[selectedBahasa];
        });