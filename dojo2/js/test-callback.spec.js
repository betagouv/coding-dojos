describe("'JavaScript : exploration des callback et de 'this'", function() {
    
    // Appel simple et vérification de 'this'
    
    it('should callback me', function(done) {
        dojo2.process(function callback() {
            expect(this).not.toEqual(dojo3);
            expect(this).toEqual(dojo2);
            done();
        });
    });
    
    /*
    
    En ES6, on pourrait écrire (à voir dans un prochain Dojo) :
    
    it('should callback me', function(done) {
        
        dojo2.process(() => {
            expect(this).not.toEqual(dojo3);
            expect(this).toEqual(dojo2);
            done();
        });
        
    });
    
    */
    
    // Appel avec 'call' et vérification de 'this'
    
    it('should callback me', function(done) {
        var s = 'salut';
        dojo2.process.call(s, function callback() {
            expect(this).toEqual(s);
            done();
        });
        
    });
    
    // Appel avec 'bind' et vérification de 'this'
    
    it('should callback me', function(done) {
        var s = 'salut';
        var f = dojo2.process.bind(s);
        f(function callback() {
            expect(this).toEqual(s);
            done();
        });
        
    });
    
    // Appel avec 'bind' et vérification de 'this'

    it('should callback me', function(done) {
        var dojo = new Dojo4(); // <=> (function() { var result = new Object(Dojo4.prototype); Dojo4.apply(result, arguments); return result; })();
        dojo.process(function() { 
            expect(this).toEqual(dojo);
            done();
        });
        
    });
});
