function loadItems(items) {
    const container = document.getElementById('small-container');
  
  // Erasing whatever content exists first
  container.innerHTML = '';

  items.forEach((item, index) => {
    const smallItem = document.createElement('div');
    smallItem.className = 'small-item';

    const title = document.createElement('p');
    title.textContent = item.title;

    const link = document.createElement('a');
    link.id = `demo-btn`;
    link.href = `https://tuskrus799.github.io//freeCodeCamp/lessons/${item.url}`;
    link.textContent = 'Demo';

    smallItem.appendChild(title);
    smallItem.appendChild(link);
    container.appendChild(smallItem);
  });
}
  
  // Array of projects
  const itemsData = [
    { title: 'Calorie Counter', url: 'calorieCounter' },
    { title: 'Rock Paper Scissors', url: 'rockPaperScissors' },
    { title: 'Date Formatter', url: 'dateFormatter' },
    { title: 'Football Team Stat Cards', url: 'footballTeamCards' },
    { title: 'Todo List App', url: 'toDoList' },
    { title: 'Decimal To Binary Converter', url: 'decimalToBinary' },
    { title: 'Spam CHecker Mini Tool', url: 'spamChecker' },
    { title: 'Number Sorter', url: 'numberSorter' }
  ];
  
window.onload = loadItems(itemsData);