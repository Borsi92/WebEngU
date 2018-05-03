// Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt.

function identify_function(a){
    return function () {
        return a;
    }
}

// Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt.
// (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)

function addf(x) {
    return function (y) {
        return x+y;
    }
}

// Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet,
// die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern.
// Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.

function applyf(f) {
    return function (x) {
        return function (y) {
            return f(x,y);
        }
    }
}

// Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt,
// um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3); add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.

function curry(f, x) {
    return function (y) {
        return f(x,y);
    }
}

// Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben,
// ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich auch direkt implementieren.
// Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?

function inc1(x) {
    return addf(x)(1);
}

function inc2(x) {
    return applyf(function (a,b) {
        return a+b;
    })(x)(1);
}

function inc3(x) {
    return curry(function (a,b) {
        return a+b;
    }, x)(1);
}

// Schreiben Sie eine Funktion methodize(), die eine binäre Funktion (z.B. add, mul) in eine unäre Methode verwandelt.
// Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.

function methodize(f) {
    return function (x) {
        return f(this,x);
    }
}

// Schreiben Sie eine Funktion demethodize(), die eine unäre Methode (z.B. add, mul) in eine binäre Funktion umwandelt.
// demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.
//TODO
function demethodize(f) {
    return function (x,y) {
        return (x).f(y);
    }
}

// Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt,
// die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben;
// var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.

function twice(f) {
    return function (x) {
        return f(x,x);
    }
}

// Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert,
// die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.

function composeu(f, g) {
    return function (x) {
        return g(f(x));
    }
}

// Schreiben Sie eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert,
// die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.

function composeb(f,g) {
    return function (a,b,c) {
        return g(f(a,b), c);
    }
}

// Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden,
// z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben,
// beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.

function once(f) {
    var executed = false;
    if(!executed){
        executed = true;
        return f;
    }
    else{
        alert("Can only be executed once!");
    }
}