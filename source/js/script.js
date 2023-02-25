// import Swiper from '../plugins/swiper/swiper-bundle.js';
"use strict";

// Preloader js
window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("loaded");
});

window.onload = () => {

  // sticky header
  const header = document.querySelector(".header_nav")
  if (header) {
    function classAdd() {
      window.addEventListener("scroll", () => {
        const header = document.querySelector(".header_nav")
        // let headerHeight = document.querySelector("header").offsetHeight;

        if (document.documentElement.scrollTop > 350) {
          header.classList.add("nav-fixed");
        } else if (header.classList.contains("nav-fixed") && document.documentElement.scrollTop < 350) {
          header.classList.remove("nav-fixed");
        }
      })
    }

    classAdd();
  }
  // videoPopup
  const myModalEl = document.getElementById('videoModal')
  if (myModalEl) {

    myModalEl.addEventListener('show.bs.modal', event => {
      const iframe = document.getElementById('showVideo');
      iframe.setAttribute("src", "https://www.youtube.com/embed/K4TOrB7at0Y?autoplay=1&amp;modestbranding=1&amp;showinfo=0")
    })

    myModalEl.addEventListener('hide.bs.modal', event => {

      const iframe = document.getElementById('showVideo');
      iframe.setAttribute("src", "")
    })
  }


  // .....testimonial slider start..... //
  new Swiper(".testimonial-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      1: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
      }
    }
  });
  // .....testimonial slider end..... //

  // .....sign-in slider start..... //
  new Swiper(".sign-in-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // .....sign-in slider end..... //

  // .....sign-up slider start..... //
  new Swiper(".sign-up-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // .....sign-up slider end..... //

  // ------ blog filter js start ------//
  var Shuffle = window.Shuffle;

  class Demo {
    constructor(element) {
      this.element = element;
      this.shuffle = new Shuffle(element, {
        itemSelector: '.shuffle-item',
        sizer: element.querySelector('.my-sizer-element'),
        isRTL: false,
      });

      this.addShuffleEventListeners();
      this._activeFilters = [];
      this.addFilterButtons();
      this.addSorting();
    }

    addShuffleEventListeners() {
      this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
        console.log('layout. data:', data);
      });
      this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
        console.log('removed. data:', data);
      });
    }

    addFilterButtons() {
      const options = document.querySelector('.filter-options');
      if (!options) {
        return;
      }

      const filterButtons = Array.from(options.children);
      const onClick = this._handleFilterClick.bind(this);
      filterButtons.forEach((button) => {
        button.addEventListener('click', onClick, false);
      });
    }

    _handleFilterClick(evt) {
      const btn = evt.currentTarget;
      const isActive = btn.classList.contains('active');
      const btnGroup = btn.getAttribute('data-group');

      this._removeActiveClassFromChildren(btn.parentNode);

      let filterGroup;
      if (isActive) {
        btn.classList.remove('active');
        filterGroup = Shuffle.ALL_ITEMS;
      } else {
        btn.classList.add('active');
        filterGroup = btnGroup;
      }

      this.shuffle.filter(filterGroup);
    }

    _removeActiveClassFromChildren(parent) {
      const {
        children
      } = parent;
      for (let i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove('active');
      }
    }

    addSorting() {
      const buttonGroup = document.querySelector('.sort-options');
      if (!buttonGroup) {
        return;
      }
      buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
    }

    _handleSortChange(evt) {
      const buttons = Array.from(evt.currentTarget.children);
      buttons.forEach((button) => {
        if (button.querySelector('input').value === evt.target.value) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }

    /**
     * Filter the shuffle instance by items with a title that matches the search input.
     * @param {Event} evt 
     */
    _handleSearchKeyup(evt) {
      const searchText = evt.target.value.toLowerCase();
      this.shuffle.filter((element, shuffle) => {
        if (shuffle.group !== Shuffle.ALL_ITEMS) {
          const groups = JSON.parse(element.getAttribute('data-groups'));
          const isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
          if (!isElementInCurrentGroup) {
            return false;
          }
        }
      });
    }
  }

  document.querySelectorAll(".data-filter").forEach(ele => {
    new Demo(ele);
  })
  // ------ blog filter js end ------//

  // ------ career single start ------//
  const openform = document.querySelector('#openForm')
  const form = document.querySelector('#applyForm')
  const openform1 = document.querySelector('#openForm1')

  function ScrollToEl(selector, yOffset = 0) {
    const l = document.querySelector(selector);
    const y = l.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
  if (openform) {
    openform.addEventListener('click', () => {
      form.classList.add('active')
      openform1.remove();
      ScrollToEl('#applyForm', -100);
    })
  }
  if (openform1) {
    openform1.addEventListener('click', () => {
      form.classList.add('active')
      openform1.remove();
    })
  }
  // ------ career single end ------//
}

// ------back-to-top button js start ------//
// Get the button
let mybutton = document.getElementById("myBtn");


window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// ------back-to-top button js end ------//
