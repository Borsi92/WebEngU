var menues = {
    html: {
        headings: {t: "Headings werden mit dem h-Tag umgesetzt und als Überschriften benutzt."},
        paragraphs: {t: "Paragraphen werden mit dem p-Tag umgesetzt."},
        links: {t: "Links werden mit dem h-Tag umgesetzt"},
        images: {t: "Images werden mit dem img-Tag umgesetzt."},
        tables: {t: "Tables stellen Tabellen dar."}
    },
    css: {
        selectors: {t: "Mit Selectors können html-Elemente ausgewählt werden."},
        colors: {t: "Um Elemente zu färben."},
        boxes: {t: "Jedes HTML-Element wird von CSS-Boxen umhüllt."},
        display: {t: "Die Art, wie ein html-Element angezeigt wird."},
        float: {t: "Positionierung."}
    },
    javascript: {
        functions: {t: "Funktionen werden benutzt, um Aufgaben/Algorithmen auszuführen."},
        objects: {t: "Ermöglichen OOP."},
        scope: {t: "Bereich, in dem Variablen gültig sind."},
        events: {t: "Events, die ausgelöst werden und auf die reagiert werden können."},
        hoisting: {t: "Variablen- und Funktionendeklarationen werden nach oben geschoben."},
        strict_mode: {t: "Ein strengerer Modus, in dem Fehlerquellen reduziert werden sollen und vermehrt Errors geschmissen werden."},
        JSON: {t: "JSON ist die JavaScript Object Notation."}
    }
};

function search(thema){
    var funde = [];

    for(var key in menues){
        var obj = menues[key];
        for(var prop in obj){
            if(obj[prop]["t"].search(new RegExp(thema, "i")) != -1){ // RegExp für case insensitive Suche
                console.log("" + key + ": " + prop);
                funde.push("" + key + ": " + prop);
            }
        }
    }
    return funde;
}

function searchRekursiv(thema) {

}