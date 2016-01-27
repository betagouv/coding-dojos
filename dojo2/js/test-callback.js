// Objet pour les tests

var dojo2 = {
    process: function(callback) {
        callback.apply(this);
    }
};

// Autre objet utilisé juste pour faire un '.not.toEqual'

var dojo3 = {
    process: function(callback) {
        callback.apply(this);
    }
};

// Usage de 'function' pour faire ensuite un 'niew'

function Dojo4() {
    this.process = function(callback) {
        callback.apply(this);
    }
}
