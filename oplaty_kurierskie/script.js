let cena; // cena koncowa
let waga = 7; // waga paczki
let pobr = true; // czy paczka jest za pobraniem

if (waga <= 5) {
    cena = 15;
} else {
    cena = 22;
}

if (pobr) {
    console.log(`Koszt wysyłki paczki za pobraniem o wadze ${waga} kg wynosi: ${cena + 5} zł`);
} else {
    console.log(`Koszt wysyłki paczki o wadze ${waga} kg wynosi: ${cena} zł`);
}