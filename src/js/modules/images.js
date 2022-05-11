const images = () => {
  const imgPopup = document.createElement('div');
  const bigImage = document.createElement('img');
  const workSection = document.querySelector('.works');

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (event) => {
    let target = event.target;
    event.preventDefault();

    if (target && target.classList.contains('preview')) {
      document.body.style.overflow = 'hidden';
      imgPopup.style.display = 'flex';

      const path = target.parentNode.getAttribute('href');

      bigImage.setAttribute('src', path);
      bigImage.style.height = '500px';
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    } 

  });
};

export default images;