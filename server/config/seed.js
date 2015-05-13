/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Dare = require('../api/dare/dare.model');
var Video = require('../api/video/video.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Dare.find({}).remove(function() {
  Dare.create({
      key: "parachute",
      "name": "Parachute",
      "info": "Sauter en parachute",
      "active": true,
      "image": "http://img0.gtsstatic.com/wallpapers/a4016ea98d5f313e4519123c5b273ded_large.jpeg",
    },
    {
      key: "bungee",
      "name": "Bungee",
      "info": "Saut de Bungee",
      "active": true,
      "image": "http://www.orbitnepal.com/wp-content/uploads/2015/03/jumpan-bungee-jumping-154639.jpg",
    },
    {
      key: "wake",
      "name": "Wake",
      "info": "Faire du wake",
      "active": true,
      "image": "https://d1w5usc88actyi.cloudfront.net/wp-content/uploads/2011/02/Patrick-Hall-Wakeboard-Tube-9.jpg",
    },
    {
      key: "sail",
      "name": "Voile",
      "info": "Faire de la voile",
      "active": true,
      "image": "http://www.sasksail.com/wordpress/wp-content/uploads/Laserfun.jpg",
    },
    {
      key: "snow",
      "name": "Snowboard",
      "info": "Faire du snowboard",
      "active": true,
      "image": "http://t1.uccdn.com/images/9/6/3/img_como_empezar_a_hacer_snowboard_17369_orig.jpg",
    }, function() {
      console.log('finished populating dares');
    });
});

Video.find({}).remove(function() {
  Video.create({
      dare: 'parachute',
      user: 'test@test.com',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/o2xmAWS4akE'
    }, {
      dare: 'bungee',
      user: 'test@test.com',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/zG22qQydPVQ'
    }, {
      dare: 'wake',
      user: 'test@test.com',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/wAo8M1Duc1g'
    }, {
      dare: 'sail',
      user: 'test@test.com',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/qT1ruckcya0'
    }, {
      dare: 'snow',
      user: 'test@test.com',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/Zl6xwuBJVIY'
    }, function() {
      console.log('finished populating videos');
    });
});
