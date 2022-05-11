import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeigth = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElements(element, event, property) {
    element.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN':
            state[property] = index;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0 ? state[property] = 'Холодное' : state[property] = 'Теплое';
                element.forEach((box, j) => {
                  box.checked = false;
                    if (index == j) {
                      box.checked = true;
                    }
                })
              } else {
                state[property] = item.value;
              }
            break;
          case 'SELECT':
            state[property] = item.value;
            break;
        } 
        // if (element.length > 1) {
        //   state[property] = index;
        // } else {
        //   state[property] = item.value;
        // }
        
        console.log(`state : `, state);
      });
    });
  }

  bindActionToElements(windowForm, 'click', 'form');
  bindActionToElements(windowWidth, 'input', 'width');
  bindActionToElements(windowHeigth, 'input', 'heigth');
  bindActionToElements(windowType, 'change', 'type');
  bindActionToElements(windowProfile, 'change', 'profile');

};

export default changeModalState;