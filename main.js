const tabs = document.querySelectorAll(".tab");
const contentTabs = document.querySelectorAll(".content-tab");
const input = document.querySelector("input");
const formBtn = document.getElementById('sub-btn');
const hamIcon = document.getElementById('hamburger');
const navLogo = document.getElementById('nav-logo'),
      menuLogo = document.getElementById('menu-logo');
const hamMenu = document.getElementById('menu');
const simpleBTab = document.getElementById("simple-b"),
speadySTab = document.getElementById("speady-s"),
  easySTab = document.getElementById("easy-s");


hamIcon.addEventListener('click',()=>{
  hamMenu.classList.toggle('active');
  menuLogo.classList.toggle('active');
  navLogo.classList.toggle('active');
  hamIcon.classList.toggle('active');
  hamIcon.classList.contains('active') ? hamIcon.setAttribute('src','images/icon-close.svg') : hamIcon.setAttribute('src','images/icon-hamburger.svg');
})




const quests = document.querySelectorAll(".faq");

quests.forEach((quest) => {
  quest.addEventListener("click", () => {
    quest.parentNode.classList.toggle("active");
  });
});

formBtn.addEventListener('click',(e) => {
    e.preventDefault()
    const msg = document.getElementById('message');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(mailformat)) {
        msg.classList.remove('error')
        input.focus()
        return true;
    } else {
        input.focus()
        msg.classList.add('error')
    return false;
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    contentTabs.forEach((contentTab) => {
      contentTab.classList.remove("activated-tab");
    });
    tab.classList.add("active-tab");
    if (e.target.id == "s-b") {
      simpleBTab.classList.add("activated-tab");
    } else if (e.target.id == "s-s") {
      speadySTab.classList.add("activated-tab");
    } else {
      easySTab.classList.add("activated-tab");
    }
  });
});
