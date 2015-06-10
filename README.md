Notes
*************

Accounts are reset on server restart from server/config/seed.js. Default account is test@test.com / test. Admin account is admin@admin.com / admin.

DARE platform
=============

This is the code for the DARE platform

Prerequisites
-------------

* node.js (I recommend NVM: https://github.com/creationix/nvm)
* mongodb (http://docs.mongodb.org/manual/administration/install-on-linux/ or http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
* grunt (`npm install -g grunt-cli`)
* bower (`npm install -g bower`)
* git (https://ekkescorner.wordpress.com/blog-series/git-mercurial/step-by-step-install-git-on-osx-ubuntu-and-windows/)

Installing dependencies
-----------------------

* `npm install`
* `bower install`

Running the app
---------------

* `grunt serve`


Deploying the app
-----------------

Prerequisites:

* Install the command-line heroku tools (https://toolbelt.heroku.com/)
* Make sure you're logged in: `heroku login`
* Add your SSH keys `heroku keys:add`
* clone the deployed app in the dist/ dir: `git clone -o heroku git@heroku.com:ancient-mesa-6465.git dist`

Deploy:
* `grunt deploy`