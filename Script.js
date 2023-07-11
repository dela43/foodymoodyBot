var i=0, text;
text='Selamat Datang Di Foody Moody';

function mengetik(){
    if(i < text.length){
        document.getElementById('app').innerHTML += text.charAt(i);
        i++;
        setTimeout(mengetik, 70)
    }
}
mengetik();