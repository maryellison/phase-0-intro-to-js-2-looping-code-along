const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

const birthdayThankYou = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        birthdayThankYou.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }

    return birthdayThankYou
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}   

countDown (11);
