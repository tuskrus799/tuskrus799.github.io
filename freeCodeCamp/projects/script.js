// Array of projects
const itemsData = [
    { title: 'Sample Title 1', desc: 'Description 1', url: 'blank' },
    { title: 'Machine Learning Model for Stock Prediction', desc: 'Implemented a machine learning model using Python and TensorFlow to predict stock prices.', url: 'mlStock' }
  ];


document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('project-list');
  
  // Erasing whatever content exists first
  container.innerHTML = '';

  itemsData.forEach((item, index) => {
    const smallItem = document.createElement('div');
    smallItem.className = 'project-item';

    const title = document.createElement('h3');
    title.textContent = item.title;

    const desc = document.createElement('p');
    desc.textContent = item.desc;

    const link = document.createElement('a');
    link.id = `demo-btn`;
    link.href = `https://tuskrus799.github.io//freeCodeCamp/projects/${item.url}`;
    link.textContent = 'Demo';

    smallItem.appendChild(title);
    smallItem.appendChild(desc);
    smallItem.appendChild(link);
    container.appendChild(smallItem);
  });
});
  
  