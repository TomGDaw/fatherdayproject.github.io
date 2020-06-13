const requestURL = 'js/dad.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const dad = jsonObject['dad'];
    let rowNumber = 0;
    for (let i = 0; i < dad.length; i++) {
      if (dad[i].name == 'Pie Town' || dad[i].name == "Dad at Lagoon") {

        rowNumber = rowNumber + 1;

        let card = document.createElement('div');
        card.setAttribute('class', 'row' + rowNumber + ' dad');

        let info = document.createElement('section');
        card.appendChild(info);

        let image = document.createElement('img');
        image.setAttribute('src', 'images/' + dad[i].photo);
        image.setAttribute('alt', 'Adventure ' + dad[i].name)
        card.appendChild(image);

        let h3 = document.createElement('h3');
        h3.textContent = dad[i].motto;
        info.appendChild(h3);
        
        document.querySelector('div.dad').appendChild(card);
      }
    }
  });