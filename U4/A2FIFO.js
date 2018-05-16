function queueFactory() {
    var array = [];

    return {
        put: function (item) {
            array.push(item);
        },
        get: function () {
            if(array.length === 0) return "LEER!";
            return array.shift();
        }
    };
}

function queueTest(){
    var schlange = queueFactory();
    console.log("Es werden 1,2,3,4,5 in die Schlange gepackt.");
    for(var i = 1; i <= 5; i++){
        schlange.put(i);
    }
    console.log("Elemente werden rausgeholt. Reihenfolge sollte sein: 1,2,3,4,5");
    for(var i = 1; i <= 5; i++){
        console.log(schlange.get());
    }
    console.log("Es wird versucht 2 weitere Elemente aus Schlange zu holen, diese sollte jedoch nun leer sein.")
    console.log(schlange.get());
    console.log(schlange.get());
}