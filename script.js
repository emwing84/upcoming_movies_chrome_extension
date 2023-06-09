
async function fetchData(number) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '[INSERT API KEY]',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    

    const res = await fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?year=' + number, options)
    const record = await res.json();
    console.log(record);
    let results = record.results;
    let html = '';
    for (let id in results) {
        console.log(results[id].titleText.text);
        let title =results[id].titleText.text;
        html += '<li>' + title + '</li>';
    }

    document.getElementById("movies").innerHTML = html;
}

function year() {
    document.getElementById('year').onchange = function () {        
        number = document.getElementById('year').value;
        fetchData(number);
    }
}

year();
