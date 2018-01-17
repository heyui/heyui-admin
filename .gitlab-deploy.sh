#!/bin/bash

# . /etc/profile
npm install
# npm install
hey build
#cos-put /srv/cw-webui
rm -rf /var/www/heyui-demo
mv dist /var/www/heyui-demo