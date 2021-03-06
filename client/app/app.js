'use strict';

angular.module('dareApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',
  'facebook'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $sceDelegateProvider, $facebookProvider, $translateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'https://www.youtube.com/embed/*',
      'https://player.vimeo.com/video/*',
      'https://www.facebook.com/video/embed?video_id=*'
    ]);
    $facebookProvider.init({
      appId: FACEBOOK_ID,
      version: 'v2.3'
    });
    $translateProvider.translations('en', {
      'DARE_SITE_TITLE': 'DARE MOJO SHOT',
      'BRAND_NAME' : 'Mojo',
      'VIDEOS' : 'Videos',
      'MY_VIDEOS' : 'My videos',
      'ADD_VIDEO' : 'Add video',
      'DARES' :  'Dares',
      'MADE_BY' : 'Made by',
      'VALUE_PROPOSITION' : 'Are you game?',
      'CALL_TO_ACTION' : 'Start dare!',
      'CHOOSE_DARE' : 'Choose dare',
      'CHOOSE_YOUR_DARE' : 'Choose your dare',
      'CHALLENGE_FRIENDS' : 'Dare your friends',
      'DO_IT' : 'Do it!',
      'THEY_DID_IT' : 'They did it',
      'FOLLOW_STEPS_VIDEO' : 'This dare is not completed! Follow the steps below:',
      'STEP1_VIDEO' : 'Film yourself doing this dare',
      'STEP2_VIDEO' : 'Share the video on your favorite platform (Youtube, Vimeo or Facebook)',
      'STEP3_VIDEO' : 'On Facebook, make sure you\'re tagged in the video',
      'STEP4_VIDEO' : 'Paste the video address (URL) below or choose from',
      'YOUTUBE_URL' : 'Add youtube url',
      'NAME' : 'Firstname',
      'NAME_REQUIRED' : 'A name is required',
      'LOGIN' : 'Login',
      'LOGOUT' : 'Logout',
      'SIGN_UP' : 'Sign up',
      'CONNECT_FACEBOOK' : 'Connect with facebook',
      'EMAIL' : 'Email',
      'EMAIL_ADDRESS' : 'What\'s your email address?',
      'EMAIL_VALIDATION' : 'Doesn\'t look like a valid email.',
      'EMAIL_REQUIRED' : 'Please enter your email and password.',
      'INVALID_EMAIL' : 'Please enter a valid email.',
      'PASSWORD' : 'Password',
      'CHANGE_PASSWORD' : 'Change password',
      'CURRENT_PASSWORD' : 'Current password',
      'NEW_PASSWORD' : 'New password',
      'SAVE_CHANGES' : 'Save changes',
      'PASSWORD_MUST' : 'Password must be at least 3 characters.',
      'AGREE' : 'I agree',
      'SUBMIT' : 'Submit',
      'CANCEL' : 'Cancel',
      'ADMIN_DESCRIPTION' : 'The delete user and user index api routes are restricted to users with the \'admin\' role.',
      'USERS' : 'Users',
      'TOS' : 'Terms',
      'SAVE' : 'Save',
      'SOME_COMPANY' : 'Blue Spike Beverages inc. All rights reserved.',
      'ENTER' : '18 & over',
      'LEAVE' : 'under 18',
      'YOU_MUST_BE_18' : 'Please verify your age to enter.',
      'CREATE' : 'Create',
      'LOCATION' : 'Contact us',
      'AROUND_THE_WEB' : 'Follow us',
      'ABOUT_MOJO' : 'About MOJO',
      'ABOUT_MOJO_DESCRIPTION' : 'Light up your party! Be the bartender without the hassle. Simply open, serve and enjoy. Cheers!',
      'TERM_OF_USE' : 'Terms of use',
      'AGE_VERIFICATION' : 'Welcome!',
      'REMOVE': 'Remove',
      'SWITCH_LANGUAGE': 'FR',
      'OTHER_LANG_KEY': 'fr',
    });
    $translateProvider.translations('fr', {
      'DARE_SITE_TITLE': 'DÉFIS MOJO SHOT',
      'BRAND_NAME' : 'Mojo',
      'VIDEOS' : 'Les vidéos',
      'MY_VIDEOS' : 'Mes vidéos',
      'ADD_VIDEO' : 'Ajouter un vidéo',
      'DARES' :  'Les défis',
      'MADE_BY' : 'Fait par',
      'VALUE_PROPOSITION' : 'T\'est pas game!',
      'CALL_TO_ACTION' : 'Releve le defi',
      'CHOOSE_DARE' : 'Choisissez votre défi',
      'CHOOSE_YOUR_DARE' : 'Choisi ton défi',
      'CHALLENGE_FRIENDS' : 'Défie tes amis',
      'DO_IT' : 'Je suis game!',
      'THEY_DID_IT' : 'Ils l\'ont fait',
      'FOLLOW_STEPS_VIDEO' : 'Le défi n\'a pas été completé ! Suivez les étapes ci-dessous:',
      'STEP1_VIDEO' : 'Filmez-vous entrain de faire le défi',
      'STEP2_VIDEO' : 'Partager la vidéo sur votre plateforme préférée (Youtube, Vimeo ou Facebook)',
      'STEP3_VIDEO' : 'Sur Facebook, assurez-vous d\'être identifié sur la vidéo',
      'STEP4_VIDEO' : 'Copier/coller l\'adresse de votre vidéo (URL) ci-dessous ou importer votre vidéo de',
      'YOUTUBE_URL' : 'Ajouter le lien youtube',
      'NAME' : 'Prénom',
      'NAME_REQUIRED' : 'Un nom est requis.',
      'LOGIN' : 'Se connecter',
      'LOGOUT' : 'Se déconnecter',
      'SIGN_UP' : 'S\'inscrire',
      'CONNECT_FACEBOOK' : 'Connectez-vous avec Facebook',
      'EMAIL' : 'Email',
      'EMAIL_ADDRESS' : 'Quelle est votre adresse e-mail?',
      'EMAIL_VALIDATION' : 'Ne ressemble pas à une adresse email valide.',
      'EMAIL_REQUIRED' : 'S\'il vous plaît entrer une adresse email et un mot de passe.',
      'INVALID_EMAIL' : 'S\'il vous plaît entrer une adresse email valide.',
      'PASSWORD' : 'Mot de passe',
      'CHANGE_PASSWORD' : 'Changer le mot de passe',
      'CURRENT_PASSWORD' : 'Mot de passe actuel',
      'NEW_PASSWORD' : 'Nouveau mot de passe',
      'SAVE_CHANGES' : 'Sauvegarder les changements',
      'PASSWORD_MUST' : 'Le mot de passe doit être d\'au moins 3 caractères.',
      'AGREE' : 'J\'accepte',
      'SUBMIT' : 'Soumettre',
      'CANCEL' : 'Annuler',
      'ADMIN_DESCRIPTION' : 'Les actions sur cette page sont restreints aux utilisateurs avec le rôle \'admin\'.',
      'USERS' : 'Utilisateurs',
      'TOS' : 'Termes',
      'SAVE' : 'Sauvegarder',
      'SOME_COMPANY' : 'Breuvages Blue Spike inc. Tous droits réservés.',
      'ENTER' : '18 ans et plus',
      'LEAVE' : 'moins de 18 ans',
      'YOU_MUST_BE_18' : 'S\'il vous plaît confirmer votre âge pour entrer.',
      'CREATE' : 'Créer',
      'LOCATION' : 'Contactez-nous',
      'AROUND_THE_WEB' : 'Suivez-nous',
      'ABOUT_MOJO' : 'Un peu plus sur MOJO',
      'ABOUT_MOJO_DESCRIPTION' : 'Soyez le barman sans les tracas . Il suffit d\'ouvrir , servir et déguster . Santé!',
      'TERM_OF_USE' : 'Conditions d\'utilisation',
      'AGE_VERIFICATION' : 'Bienvenue!',
      'REMOVE': 'Supprimer',
      'SWITCH_LANGUAGE': 'EN',
      'OTHER_LANG_KEY': 'en',
    });
    $translateProvider.registerAvailableLanguageKeys(['en', 'fr'], {
      'en_US': 'en',
      'en_UK': 'en',
      'en_CA': 'en',
      'fr_CA': 'fr',
      'fr_FR': 'fr'
    });
    $translateProvider.determinePreferredLanguage();
    $translateProvider.useSanitizeValueStrategy('escaped');
}).factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
  return {
    // Add authorization token to headers
    request: function (config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      if(response.status === 401) {
        $location.path('/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    }
  };
}).run(function ($rootScope, $location, $state, Auth, $cookieStore, $window, $translate, $modal) {

  // Show 18+ modal
  if(!$cookieStore.get('age_verified')) {
    var modal = $modal.open({
      templateUrl: 'app/age_modal.html'
    });
    modal.result.then(function() {
      $cookieStore.put('age_verified', true);
    }, function() {
      $window.location.href = 'http://google.ca';
    });
  }
  if ($window.opener && $cookieStore.get('token')) {
    $window.token = $cookieStore.get('token');
  }

  $rootScope.language = $translate.use();
  $rootScope.$on('$translateChangeEnd', function() {
    $rootScope.language = $translate.use();
  });

  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('$stateChangeStart', function (event, nextState, nextParams) {
    Auth.isLoggedInAsync(function(loggedIn) {
      if (nextState.authenticate && !loggedIn) {
        // store the requested url if not logged in
        if ($location.url() != '/login')
        {
          $cookieStore.put('returnUrl', $state.href(nextState.name, nextParams));
        }
        $location.path('/login');
      }
    });
  });

}).filter('localize', function($filter, $translate) {
  return function(input) {
    return input + '_' + $translate.use();
  };
});
