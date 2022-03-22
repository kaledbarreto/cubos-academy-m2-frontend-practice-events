const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.big-nav');
const imagensGaleria = document.querySelectorAll('.img');
const imagemModal = document.querySelector('.img-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const cards = document.querySelectorAll('.card-img');
const likes = document.querySelectorAll('.like');
const likeModal = document.querySelector('.like-img');
const imagemGaleria = document.querySelector('.img');

openMenu.addEventListener('click', function () {
  menu.style.display = 'flex';
});

closeMenu.addEventListener('click', function () {
  menu.style.display = 'none';
});

function abrirModal(imagem) {
  modal.style.display = 'flex';
  imagemModal.src = imagem.src;

  prevBtn.style.display = 'flex';
  nextBtn.style.display = 'flex';

  let dataset = Number(imagem.dataset.id);

  nextBtn.addEventListener('click', function () {
    console.log("PROXIMO");
    modal.style.display = 'none';
    imagemModal.src = imagensGaleria[dataset + 1];
    console.log(imagensGaleria[dataset + 1]);
    // abrirModal(imagensGaleria[dataset + 1]);
  });

  prevBtn.addEventListener('click', function () {
    console.log("ANTERIOR");
    modal.style.display = 'none';
    abrirModal(imagensGaleria[dataset - 1]);
  });
}

imagensGaleria.forEach(function (imagem) {
  imagem.addEventListener('dblclick', function () {
    const id = imagem.dataset.id;

    if (likes[id].style.display === 'none') {
      likes[id].style.display = 'flex';
    } else {
      likes[id].style.display = 'none';
    }
  });
});

imagensGaleria.forEach(function (imagem) {
  imagem.addEventListener('click', function () {
    const id = imagem.dataset.id;
    if (likes[id].style.display === 'flex') {
      likeModal.style.display = 'flex';
    } else {
      likeModal.style.display = 'none';
    }
    abrirModal(imagem);
  });
});

modal.addEventListener('click', function () {
  // modal.style.display = 'none';
});

closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
});

