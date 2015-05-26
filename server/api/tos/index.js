'use strict';

var express = require('express');
var controller = require('./tos.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.show);
router.post('/', auth.hasRole('admin'), controller.update);

module.exports = router;
