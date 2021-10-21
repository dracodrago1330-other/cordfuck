#!/bin/sh

php -v || ( echo "Install PHP!" ; exit 1 )
php -S localhost:8000 -t . & disown
xdg-open http://localhost:8000 || open http://localhost:8000