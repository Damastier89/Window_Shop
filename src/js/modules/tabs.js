const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });

    tab.forEach(item => {
      item.classList.remove(activeClass);
    })
  }

  function showTabContent(indexElem = 0) {
    content[indexElem].style.display = display;
    tab[indexElem].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (event) => {
    const target = event.target;
    const condition = target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, ""));
      if (target && condition) {
        tab.forEach((item, index) => {
          if (target === item || target.parentNode === item) {
            hideTabContent();
            showTabContent(index);
          }
        });
      }
  });
};

export default tabs;