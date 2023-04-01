const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileLoader = document.querySelector('.img-upload__wrapper input[type=file]');
const imgSetup = document.querySelector('.setup-image');
// const imgSetup = document.querySelector('.img-upload__preview img');

fileLoader.addEventListener('change', () => {
  const file = fileLoader[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if(matches) {
    //ссылка на содержимое
    imgSetup.src = URL.createObjectURL(file);
  }
});
