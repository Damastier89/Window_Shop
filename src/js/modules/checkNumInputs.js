const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/, ""); // заменяет вводимые значения(не числа) на пустую строку
    });
  });
};

export default checkNumInputs;