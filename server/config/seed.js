/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Dare = require('../api/dare/dare.model');
var Video = require('../api/video/video.model');
var Tos = require('../api/tos/tos.model');

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
      key: "lemon",
      "name_en": "Lemon",
      "name_fr": "Citron",
      "info_en": "Eat a lemon without grimacing",
      "info_fr": "Manger 1 citron sans faire de grimace",
      "active": true,
      "image": "http://img0.gtsstatic.com/wallpapers/a4016ea98d5f313e4519123c5b273ded_large.jpeg",
    }, {
      key: "fishing",
      "name_en": "Fishing",
      "name_fr": "Pêche",
      "info_en": "Go fishing in a water fountain.",
      "info_fr": "Pêcher dans une fontaine, ou dans un trou d’eau.",
      "active": true,
      "image": "http://www.orbitnepal.com/wp-content/uploads/2015/03/jumpan-bungee-jumping-154639.jpg",
    }, function() {
      console.log('finished populating dares');
    });
});

Video.find({}).remove(function() {
  Video.create({
      dare: 'lemon',
      user: 'test@test.com',
      name: 'test',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/o2xmAWS4akE'
    }, {
      dare: 'lemon',
      user: 'test@test.com',
      name: 'test',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/mbWuGZhYbMw'
    }, {
      dare: 'fishing',
      user: 'test@test.com',
      name: 'test',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/zG22qQydPVQ'
    }, {
      dare: 'fishing',
      user: 'test@test.com',
      name: 'test',
      type: 'youtube',
      url: 'https://www.youtube.com/embed/Iue2b5ARxuo'
    }, function() {
      console.log('finished populating videos');
    });
});

Tos.find({}).remove(function() {
  Tos.create({
    text_en: 'These are the Terms of Use in English.',
    text_fr: "Longueur de vidéo Maximum\nAucune consommation excessive d'alcool ne doit être dans le vidéo\nAucune consommation d'alcool par un mineur\n Pas de vidéo qui pourrait enfreindre les droits d'autrui ou autrement enfreindre la loi\n Pas de comportement violent, explicite ou incitant à la haine\n"
  }, function() {
    console.log('finished populating TOS');
  });
});
