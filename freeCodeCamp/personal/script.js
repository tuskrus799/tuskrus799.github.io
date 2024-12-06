function loadItems(items) {
    const container = document.getElementById('small-container');
  
  // Erasing whatever content exists first
  container.innerHTML = '';

  items.forEach((item, index) => {
    const smallItem = document.createElement('div');
    smallItem.className = 'small-item';

    const title = document.createElement('p');
    title.textContent = item.title;

    const desc = document.createElement('p');
    desc.textContent = item.desc;

    const link = document.createElement('a');
    link.id = `demo-btn`;
    link.href = `${item.url}`;
    link.textContent = `${item.btntext}`;

    smallItem.appendChild(title);
    smallItem.appendChild(desc);
    smallItem.appendChild(link);
    container.appendChild(smallItem);
  });
}
  
  // Array of projects
  const itemsData = [
    { title: 'Baldurs Gate 3 Mod', desc: 'A World Tree Barbarian addition modification for the Video Game Baldur\'s Gate 3', url: 'https://www.nexusmods.com/baldursgate3/mods/14099?tab=description', btntext: 'Website Page'
     }
  ];
  
window.onload = loadItems(itemsData);