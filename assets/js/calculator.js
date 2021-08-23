var hours = 8;
var days = 5;
var result;


/*hours*/

$('#plusHours').click(function() {
    hours++
    if (hours >= 5) { $('.hours').html(hours + ' ' + 'часов'); }
    else if (hours < 5) { $('.hours').html(hours + ' ' + 'часа'); }
    if (hours >= 10) {
        hours = 10;
        $('.hours').html(10 + ' ' + 'часов');
    }
    result = (1937 * hours) * days;
    resultNew = result.toLocaleString('ru-RU');
    $('#result').html(resultNew + ' ');
});

$('#minusHours').click(function() {
    hours--
    if (hours >= 5) { $('.hours').html(hours + ' ' + 'часов'); }
    else if (hours < 5) { $('.hours').html(hours + ' ' + 'часа'); }
    if (hours <= 2) {
        hours = 2;
        $('.hours').html(2 + ' ' + 'часа');
    }
    result = (1937 * hours) * days;
    resultNew = result.toLocaleString('ru-RU');
    $('#result').html(resultNew + ' ');
});

/*days*/

$('#plusDays').click(function() {
    days++
    if (days >= 5) { $('.days').html(days + ' ' + 'дней'); }
    else if (days < 5 || days > 1) { $('.days').html(days + ' ' + 'дня'); }
    if (days >= 7) {
        days = 7;
        $('.days').html(7 + ' ' + 'дней');
    }
    result = (1937 * hours) * days;
    resultNew = result.toLocaleString('ru-RU');
    $('#result').html(resultNew + ' ');
});

$('#minusDays').click(function() {
    days--
    if (days >= 5) { $('.days').html(days + ' ' + 'дней'); }
    else if (days < 5 || days > 1) { $('.days').html(days + ' ' + 'дня'); }
    else if (days = 1) { $('.days').html(days + ' ' + 'день')}
    if (days <= 1) {
        days = 1;
        $('.days').html(1 + ' ' + 'день');
    }
    result = (1937 * hours) * days;
    resultNew = result.toLocaleString('ru-RU');
    $('#result').html(resultNew + ' ');
});