// Array of projects
const itemsData = [
    { title: 'Palindrome Checker', desc: 'A simple palindrome checker built from scratch using two pointer algorithm checking', url: 'palindromeChecker' },
    { title: 'Integer to Roman Numeral Converter', desc: 'An integer number to Roman Numeral converter (0 to 3999), using a Javascript key value pair object.', url: 'intToNumeral' },
    { title: 'US Phone Number Checker Tool', desc: 'A tool written to check reasonably valid US Phone Numbers entered into the input field. It uses a regex test on the input to determine validity.', url: 'numberValidator' }
  ];


document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('projects');
  
  // Set up first certificate project section
  container.innerHTML = `<h2>JS Algorithms and Data Structures Certificate Projects</h2>`;

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
  
  