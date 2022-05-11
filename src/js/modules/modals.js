const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');

    trigger.forEach(item => {
        item.addEventListener('click', (event) => {
          if (event.target) {
            event.preventDefault();
          }

          windows.forEach(window => {
            window.style.display = 'none';
          });

          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
          // document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      closeModal();
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal && closeClickOverlay) {
        closeModal();
      }
    })

    function closeModal() {
      windows.forEach(window => {
        window.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.remove('modal-open'); // класс из bootstrap
    }
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }

  bindModal('.popup_engineer_btn','.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // showModalByTime('.popup', 60000);
};

export default modals;