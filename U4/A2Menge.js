function mengenFactory() {
    var menge = [];

    return {
      isEmpty: function () {
          if(menge.length === 0) return true;
          return false;
      },
      contains: function (item) {
          for(var i = 0; i < menge.length; i++){
              if(item === menge[i]) return true;
          }
          return false;
      },
      size: function () {
          return menge.length;
      },
      add: function (item) {
          if(!this.contains(item)) menge.push(item);
      },
      remove: function (item) {
          var index = menge.indexOf(item);
          if (index > -1) {
              menge.splice(index, 1)
              return true;
          }
          return false;
      }
    };
}

function mengeTest() {
    var menge = mengenFactory();
    console.log("menge.isEmpty(): " + menge.isEmpty());
    console.log("Es werden 1,2,'drei' in die Menge gepackt");
    menge.add(1);
    menge.add(2);
    menge.add("drei");
    console.log("menge.isEmpty(): " + menge.isEmpty());
    console.log("Mengen Größe: " + menge.size());
    console.log("menge.contains('drei'): " + menge.contains("drei"));
    console.log("menge.remove('drei'): " + menge.remove("drei"));
    console.log("Mengen Größe: " + menge.size());
}