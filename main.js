document.querySelector(".registerForm").onsubmit = function (e) {
    e.preventDefault();
    var elements = e.target.elements;
    var amount = elements['amount'].value; 
    var exchange = elements['exchange'].value; 

    var result = 0;
    if (exchange === 'dinar') {
        result = amount *0.19;
        document.querySelector(".result").innerHTML = result + " dinar";
    } else if (exchange === 'dollar') {
        result = amount *0.27;
        document.querySelector(".result").innerHTML = result + " dollar";
    } else {
        document.querySelector(".result").innerHTML = amount + " NIS";
    }
}
