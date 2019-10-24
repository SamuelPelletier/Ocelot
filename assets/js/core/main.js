$(document).ready(function () {
    showTime();
    $('.menu-chat').on('click',function(){
        toggleChat();
    })
});

function toggleChat() {
    var steamContainerRow = $('.stream-container .row');
    if (steamContainerRow.find('.chat').length > 0) {
        steamContainerRow.find('.col-md-3').remove()
    } else {
        steamContainerRow.append('<div class="col-md-3">'+
        '<iframe frameborder="0"'+
                'scrolling="no"'+
                'id="chat_embed"'+
                'src="https://www.twitch.tv/embed/thefrenchtonneau/chat"'+
                'height="500"'+
                'width="350" class="chat">'+
        '</iframe>'+
    '</div>')
    }
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}