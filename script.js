
var search = document.querySelector('.input').addEventListener('keyup', pickTown);
var button = document.querySelector('.button');
button.addEventListener('click', );

function pickTown() {
    var placeholder = document.querySelector('.input');
    var placeValue = placeholder.value;
    var div = document.querySelector('.podaci');

    if(div) {
        div.remove();
    }

    var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + placeValue + '&units=metric&appid=a88ae1e24a05af2ea5015f71d0bb511f';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.addEventListener('load', getData);

    function getData() {
        var data = JSON.parse(xhr.response);

        var body = document.querySelector('body');
        var noviDiv = document.createElement('div');
        noviDiv.classList.add('podaci');

        var tablica = document.createElement('table');
        tablica.setAttribute('style', 'width:90%');
        var headRow = document.createElement('tr');

        //Vrijeme
        var vrijeme = document.createElement('th');
        vrijeme.innerText = 'Time';
        headRow.appendChild(vrijeme);

        //Temperatura
        var temp = document.createElement('th');
        temp.innerText = 'Temperature';
        headRow.appendChild(temp);

        //Opis
        var opis = document.createElement('th');
        opis.innerText = 'Description';
        headRow.appendChild(opis);

        //Image
        var img = document.createElement('th');
        img.innerText = 'Image';
        headRow.appendChild(img);

        tablica.appendChild(headRow);

        for(var i = 0; i < data.list.length; i++) {

        var dataRows = document.createElement('tr');
         

        var newVrijeme = document.createElement('td');
        newVrijeme.innerText = data.list[i].dt_txt;

        var newTemp = document.createElement('td');
        newTemp.innerText = data.list[i].main.temp + ' °C';

        var newOpis = document.createElement('td');
        newOpis.innerText = data.list[i].weather[0].description;
        
        var newImg = document.createElement('td');
        var newImg2 = 'http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png';
        var image = document.createElement('img');
        image.setAttribute('src', newImg2);
        
        newImg.appendChild(image);

        dataRows.appendChild(newVrijeme);
        dataRows.appendChild(newTemp);
        dataRows.appendChild(newOpis);
        dataRows.appendChild(newImg);

        tablica.appendChild(dataRows);
        
        noviDiv.appendChild(tablica);
        body.appendChild(noviDiv);
        }
    }


    xhr.send();
    
}

