
Notes
*************

Accounts are reset on server restart from server/config/seed.js. Default account is test@test.com / test. Admin account is admin@admin.com / admin.

DARE platform
=============

This is the code for the DARE platform

Prerequisites
-------------

* node.js (I recommend NVM: https://github.com/creationix/nvm)
* mongodb
* grunt (`npm install -g grunt-cli`)
* bower (`npm install -g bower`)

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

* Install the command-line heroku tools
* Make sure you're logged in: `heroku login`
* Add your SSH keys `heroku keys:add`
* clone the deployed app in the dist/ dir: `git clone -o heroku git@heroku.com:ancient-mesa-6465.git dist`

Deploy:
* `grunt build`
* `grunt buildcontrol:heroku`
