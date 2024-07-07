const features = document.getElementById("features");
const featuresMenu = document.getElementById("featuresMenu");
features.addEventListener("click", () => {
  featuresMenu.classList.toggle("show");
  features.classList.toggle("toggled");
});
const company = document.getElementById("company");
const companyMenu = document.getElementById("companyMenu");
company.addEventListener("click", () => {
  companyMenu.classList.toggle("showcompanymenu");
  company.classList.toggle("toggled");
});

document.addEventListener("click" , (event)=>{
   if (
        !features.contains(event.target) && 
        !featuresMenu.contains(event.target) &&
        !company.contains(event.target) &&
        !companyMenu.contains(event.target)
      ) {
    companyMenu.classList.remove("showcompanymenu");
    featuresMenu.classList.remove("show");
    company.classList.remove("toggled");
    features.classList.remove("toggled");  // to close the dropdown menu if clicked outside the menu items  // and to remove the toggled class if present  // (if the menu was open when the user clicked outside)  // this will ensure that the menu closes even when clicked on a menu item // and also prevents the menu from closing when clicked on a submenu item  // (since the submenu is a child of the main menu)  // without this check, the menu would close when clicked on a submenu item  // and the toggled class would be removed, making it impossible to open the menu again  // (because the menu would have been closed when the user clicked outside)  // thus, we only remove the toggled class when the user clicks outside the menu items  // and not
      } 
})
const menu = document.getElementById("menu");
const nav = document.querySelector("nav")
menu.addEventListener("click", ()=>{
  nav.classList.toggle("shownav");
})


