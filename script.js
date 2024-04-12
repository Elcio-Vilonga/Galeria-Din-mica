const inputFile = document.getElementById("fileInput");
const pictureImage = document.querySelector(".picture-image");
const pictureImageTxt = "Selecionar imagem";
pictureImage.innerHTML = pictureImageTxt;

// previsualiza a imagem
inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      // cria uma "imagem"
      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture-img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    // lê a imagem
    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

// salva a galeria no localStorage
function saveGalleryToLocalStorage() {
    const galleryImages = document.querySelectorAll('#gallery img');
    const imageSources = [];
    galleryImages.forEach(img => {
        imageSources.push(img.src);
    });
    localStorage.setItem('galleryImages', JSON.stringify(imageSources));
}

// carrega a galeria do localStorage
function loadGalleryFromLocalStorage() {
    const storedImages = JSON.parse(localStorage.getItem('galleryImages'));
    if (storedImages) {
        const gallery = document.getElementById('gallery');
        storedImages.forEach(src => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');

            const img = document.createElement('img');
            img.src = src;

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function() {
                imgContainer.remove();
                saveGalleryToLocalStorage();
            });

            imgContainer.appendChild(img);
            imgContainer.appendChild(deleteButton);
            gallery.appendChild(imgContainer);
        });
    }
}

// chama a função que carrega a galeria ao carregar a página
window.addEventListener('load', loadGalleryFromLocalStorage);

// upload de imagem
function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');

    const files = fileInput.files;
    if (files.length === 0) return;

    const file = files[0];
    if (file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');

            const img = document.createElement('img');
            img.src = event.target.result;

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function() {
                imgContainer.remove();
                saveGalleryToLocalStorage();
            });

            imgContainer.appendChild(img);
            imgContainer.appendChild(deleteButton);
            gallery.appendChild(imgContainer);
            saveGalleryToLocalStorage();
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload an image file.');
    }
}
