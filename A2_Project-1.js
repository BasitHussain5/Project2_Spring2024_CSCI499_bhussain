function apisearch() {
    $.ajax({
        type: 'GET',
        dataType: "jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyCEZYIUHQ9nkrbXTgHGaWIPegonMvIIoto&cx=c3d3cd77eee87448c&q=" + $("#query").val(),
        success: function (result) {
            console.log('data: ', result);
            var searchOutput = '';
            var len = result.items.length;
            for (i = 0; i < len; i++) {
                searchOutput += `<p><a href="${result.items[i].link}">${result.items[i].title}</a>: ${result.items[i].snippet}</p>`;
            }

            $("#searchResults").html(searchOutput);
        }
    });
}

function changeBackgroundColor() {
    $("body").css("background-color", "lightgreen");
}

function toggleFade() {
    $("#searchResults").fadeToggle();
}

function lucky() {
    $.ajax({
        type: 'GET',
        dataType: "jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyCEZYIUHQ9nkrbXTgHGaWIPegonMvIIoto&cx=c3d3cd77eee87448c&q=" + $("#query").val(),
        success: function (result) {
            var luckyResult = `<p><a href="${result.items[0].link}">${result.items[0].title}</a>: ${result.items[0].snippet}</p>`;
            $("#searchResults").html(luckyResult);
        }
    });
}
