(() =>{
 
    const openNavMenu = document.querySelector(".nav__menu-open"),
    closeNavMenu = document.querySelector(".nav__menu-close"),
    navMenu = document.querySelector(".nav__menu"),
    menuOverlay = document.querySelector(".nav__menu-overlay"),
    mediaSize = 991;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);

    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){

              event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;

            if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{

            if(navMenu.querySelector(".nav__item-child.active")){
              collapseSubMenu();
            }

            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".nav__dropdown");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".nav__item-child.active .nav__dropdown")
        .removeAttribute("style");
        navMenu.querySelector(".nav__item-child.active")
        .classList.remove("active");
    }
    function resizeFix(){

      if(navMenu.classList.contains("open")){
             toggleNav();
         }

         if(navMenu.querySelector(".nav__item-child.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });
  
  })();
  
  