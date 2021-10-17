// Callback function – to funkcja która wyłowuje się po wyłowaniu innej funcji; która jest parametrem dla innej funkcji. 
//=====================================================================================================

// Atrybut key w React jest istotny bo pamaga Reactowi zdefiniować jakie elementy były zmienione, dodane lub usunięte.  Pozwala zestawić ze sobą elementu listy z płynem czasu. Czyli React porównuje dzieci oryginalnego drzewa z dziećmi następująego drzewa.
//=====================================================================================================

// POST/PUT/PATCH
// POST – tworzenie nowych obiektów;
// PUT – aktualizacja (jeśli taki obiekt istnieje) lub stworzenie nowego obiekta
// PATCH – aktualizacja obiektu który już istnieje
//====================================================================================================

// Testy:
// Fazy testów:

// -arrange – przygotowanie;
// -act – działanie testu;
// -assert – (zapewnienie) porównianie oczekowanego rezultatu z tym co wyszło po działaniu testu;

// Test typu input-output

const isPalindrom = str => str === str.split('').reverse().join('')

console.log(isPalindrom('abba'));

//====================================================================================================

const assert = (actual, expected) => {
if(actual === expected) {
return console.log('pass');
} else {
return console.log('test failed');
}
}

const shouldReturnPalindrom = () => {
const expected = true;

const actual = isPalindrom('abba');

assert(actual, expected)
}

shouldReturnPalindrom()