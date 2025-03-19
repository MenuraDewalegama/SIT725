//Function for the add button
function add() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    //Sending GET request to the add 
    fetch(`add?a=${a}&b=${b}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('result').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Function for the sub button
function sub() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    //Sending GET request to the sub 
    fetch(`sub?a=${a}&b=${b}`) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('result').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Function for the mul button
function mul() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    //Sending GET request to the mul 
    fetch(`mul?a=${a}&b=${b}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('result').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Function for the div button
function div() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    //Sending GET request to the div
    fetch(`div?a=${a}&b=${b}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('result').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}