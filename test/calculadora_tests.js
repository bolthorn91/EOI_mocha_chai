var assert   = require('assert');
var expect    = require("chai").expect;
var calculadora = require("../app/calculadora");

describe("Calculadora tests", function() {
	
	describe("Suma", function() {
			it("suma 2 a un entero", function() {
				var resultado   = calculadora.suma(2);
				expect(resultado).to.equal(4);
			});
	});
	
	describe("Multiplica", function() {
			it("multiplica por 2 un entero", function() {
				var resultado   = calculadora.multiplica(2);
				expect(resultado).to.equal(4);
			});
	});
});