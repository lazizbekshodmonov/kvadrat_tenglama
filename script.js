// ax^2 + bx + c = 0 ko'rinishidagi tenglamani yechadigan dastur tuzamiz!

let a = prompt("a ni kiriting?"),
    b = prompt("b ni kiriting?"),
    c = prompt("c ni kiriting?");

let D = b**2 - 4*a*c;

if ( D < 0 ){
    alert( "Tenglama yechimga ega emas!" );
}else if ( D === 0 ){
    alert( `Tenglama bitta yechimga ega! x=${ -b/2*a }` );
}else if ( D > 0 ){
    alert(`Tenglama ikkita yechimga ega! x1=${ (-b + D)/2*a}, x2=${ (-b - D)/2*a }` );
}