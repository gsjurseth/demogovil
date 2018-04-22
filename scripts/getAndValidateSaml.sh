#!/bin/bash

CRED_STRING=$1

access_token=$(curl -s -u $CRED_STRING http://demo24-test.apigee.net/oauth/token?grant_type=client_credentials | fgrep access_token | awk -F '"' '{print $4}')

# base64 encoded or no
#samlToken=$(curl -s -H "Authorization: Bearer ${access_token}" http://demo24-test.apigee.net/saml | tr -d '\n' | base64)
curl -s -H "Authorization: Bearer ${access_token}" http://demo24-test.apigee.net/saml > saml.xml
