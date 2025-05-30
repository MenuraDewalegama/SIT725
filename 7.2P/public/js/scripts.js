const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card small"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text grey-text text-darken-4">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

// $(document).ready(function () {
//     $('.materialboxed').materialbox();
//     $('#formSubmit').click(() => {
//         submitForm();
//     })
//     addCards(cardList);
//     $('.modal').modal();
// });

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    getProjects();
    addCars();
    $('.modal').modal();
});


$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

const getProjects = () => {
    $.get('/cars', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}

const addCars = () => {
    $.get('/cars/add', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}

const socket = io();
socket.on('number', (msg) => {
    console.log('Random number:', msg);
    // if(msg){
    //     document.getElementById('number').innerText = msg;
    // } 
    if(document.getElementById("number") != null){
        document.getElementById("number").innerHTML = msg;
    }
});