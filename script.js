
const instagramFeed = document.getElementById('instagram-feed');

// Images de test (simulant les images de Notion)
const images = [
    'https://via.placeholder.com/300x300?text=Photo+1',
    'https://via.placeholder.com/300x300?text=Photo+2',
    'https://via.placeholder.com/300x300?text=Photo+3',
    'https://via.placeholder.com/300x300?text=Photo+4',
    'https://via.placeholder.com/300x300?text=Photo+5',
    'https://via.placeholder.com/300x300?text=Photo+6',
    'https://via.placeholder.com/300x300?text=Photo+7',
    'https://via.placeholder.com/300x300?text=Photo+8',
    'https://via.placeholder.com/300x300?text=Photo+9',
];

// Affiche chaque image dans la grille
images.forEach((url) => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('instagram-photo');
    photoDiv.innerHTML = `<img src="${url}" alt="Photo Instagram">`;
    instagramFeed.appendChild(photoDiv);
});
