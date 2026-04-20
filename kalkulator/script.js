// stworz tytuł
let title = document.createElement("h3");

// ustaw tytuł
title.textContent = "Kalkulator";

/*

Dodatkowe zmienne

*/

// utworz br aby przejsc do nastepnej linijki
let br = document.createElement("br");


/*

Wejscie danych -- tworzenie

*/

// utwórz elementy do inputu
let inp1 = document.createElement("input");
let inp2 = document.createElement("input");

// ustaw placeholder
inp1.placeholder = "Liczba x";
inp2.placeholder = "Liczba y";

// ustaw typ inputu
inp1.type = "number";
inp2.type = "number";

/*

Przyciski -- tworzenie

*/

// utworz przyciski
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");

// ustaw tekst na przcisku
btn1.innerText = "Dodawanie";
btn2.innerText = "Odejmowanie";
btn3.innerText = "Mnożenie";
btn4.innerText = "Dzielenie";

/*

Wyswietlanie wyniku -- tworzenie

*/

// utworz wynik
let output = document.createElement("p");

//ustaw początkowy tekst
output.textContent = "Wynik: ";

/*

Funkcje

*/

// wyswietla element na stronie
let appendElement = (node) => {
    document.body.appendChild(node); // wyswietl element na stronie
};

// konwertuje input na liczby
let convertInput = (input1, input2) => {
    // sprawdzamy czy dane się zgadzają, jeżeli nie to zwracamy zerowe liczby oraz informację że się nie zgadzają
    if (isNaN(input1) || isNaN(input2)) { return [0, 0, false]; };

    // zwracamy tabele z wartosciami przekształonymi na liczby oraz informacje ze dane się zgadzają
    return [Number(input1), Number(input2), true];
};

// aktualizuje wynik
let updateOutput = (value) => {
    // konwertuje wartosc na String i ją wyswietla
    output.textContent = "Wynik: " + String(value);
};

/*

Wstawianie elementow do body

*/

appendElement(title); //wyswietl tytul
appendElement(inp1); // wyswietl input 1
appendElement(br.cloneNode()); // wyswietl nastepna linijka
appendElement(br.cloneNode()); // wyswietl nastepna linijka
appendElement(inp2); // wyswietl input 2
appendElement(br.cloneNode()); // wyswietl nastepna linijka
appendElement(br.cloneNode()); // wyswietl nastepna linijka
appendElement(btn1); appendElement(btn2); appendElement(btn3); appendElement(btn4); // wyswietl przyciski
appendElement(br.cloneNode()); // wyswietl nastepna linijka
appendElement(br.cloneNode()); // wyswietl nastepna linijka
appendElement(output); // wyswietl wynik

/*

Funkcje przycisków (kalkulacja)

*/

// Dodawanie
btn1.onclick = () => {
    let inputs = convertInput(inp1.value, inp2.value); // konwertuje wejscia na liczby

    // Sprawdza czy wartosci są poprawne i jezeli sa to wyswietla wynik, a jezeli nie to wiadomosc ze dane nie sa poprawne
    if (inputs[2]) {
        updateOutput(inputs[0] + inputs[1]);
    } else {
        updateOutput("zły typ danych");
    }
}

// Odejmowanie
btn2.onclick = () => {
    let inputs = convertInput(inp1.value, inp2.value); // konwertuje wejscia na liczby

    // Sprawdza czy wartosci są poprawne i jezeli sa to wyswietla wynik, a jezeli nie to wiadomosc ze dane nie sa poprawne
    if (inputs[2]) {
        updateOutput(inputs[0] - inputs[1]);
    } else {
        updateOutput("zły typ danych");
    }
}

// Mnożenie
btn3.onclick = () => {
    let inputs = convertInput(inp1.value, inp2.value); // konwertuje wejscia na liczby

    // Sprawdza czy wartosci są poprawne i jezeli sa to wyswietla wynik, a jezeli nie to wiadomosc ze dane nie sa poprawne
    if (inputs[2]) {
        updateOutput(inputs[0] * inputs[1]);
    } else {
        updateOutput("zły typ danych");
    }
}

// Dzielenie
btn4.onclick = () => {
    let inputs = convertInput(inp1.value, inp2.value); // konwertuje wejscia na liczby

    // wyswietl specjalna wiadomosc jak ktos podzieli przez 0 oraz wyjdz z funkcji aby nie była kontynuowana
    if (isNaN(inputs[0] / inputs[1])) { updateOutput("woooow gratulacje za dzielenie przez zero oficialnie jestes debilem"); return; }

    // Sprawdza czy wartosci są poprawne i jezeli sa to wyswietla wynik, a jezeli nie to wiadomosc ze dane nie sa poprawne
    if (inputs[2]) {
        updateOutput(inputs[0] / inputs[1]);
    } else {
        updateOutput("zły typ danych");
    }
}