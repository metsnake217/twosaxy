var dates = require('../config/staticvariables');
var moment = require('moment-timezone');
var jstz = require('jstimezonedetect');

var express = require('express');
var util = require('util');
var router = express.Router();

module.exports = function(router) {

	router.get('/', function(req, res) {
		res.redirect('/home');
	});

	router.get('/home', function(req, res) {
		res.render('home', {
			title : 'Home',
			menu : 'home'
		});
	});

	router.get('/about', function(req, res) {
		res.render('about', {
			title : 'About Us',
			menu : 'about'
		});
	});

};
