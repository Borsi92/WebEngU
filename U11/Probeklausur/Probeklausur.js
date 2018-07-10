// Aufgabe E
function fX(a,b){
    const m_a = a;
    const m_b = b;

    return {
        sum: function(){
            return a+b;
        }
    }
}

// Aufgabe F
function counterf(x){
    let cnt = x;

    return{
        inc: function () {
            cnt++;
            return cnt;
        },
        dec: function () {
            cnt--;
            return cnt;
        }
    }
}

// Aufgabe G
// Schreiben Sie einen Generator für Personen-Objekte.
// Der Generator soll eine Liste von Namen lesen
// und eine Liste von Personen-Objekten mit diesen Namen erzeugen.
// Außerdem soll jedes Personen-Objekt eine fortlaufende Nummer bekommen
// (die Stelle in der Liste)

function generate_persons(list) {
    return list.map(
            (value, index) => ({name:value, nummer: index})
    );
}

let persons = generate_persons(['Andrea','Anna','Anke','Carl']);


// Filtern Sie alle Personen heraus, deren Namen mit A beginnt.
function filter(x) {
    return x.filter(
        x => (x.name[0] == 'A')
    );
}

console.log( filter( persons ) ); // nur Personen, deren Namen mit A beginnt.

// Geben Sie allen Personen, deren Namen mit A beginnt,
// das Alter 23 (als neue Eigenschaft dieser Personen)
// und den anderen Personen das Alter 21.

function map(liste){
    const personenMitA = filter(liste);
    return liste.map(
        function (element) {
            if(personenMitA.includes(element)){
                element["alter"] = 23;
            }
            else{
                element["alter"] = 21;
            }
            return element;
        }
    );
}

console.log( map( persons ) ); // alle Personen

// Addieren Sie alle Altersangaben mittels reduce

function reduce(persons) {
    return persons.reduce((x,y) => (x.alter + y.alter), 0)
}

console.log( reduce( persons ) ); // 90




// Aufgabe J
function stackF() {

    let stack = [];

    return {

    }

}