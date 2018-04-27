# Scenario5_SLA
This scenario is simply showing that we can route based on some metadata returned for a user. Basically, this will route to the 2nd endpoint if the officeNumber == 2 otherwise it routes to the default route.

```bash
curl -H "Authorization: access_token" 'http://demo24-test.apigee.net/scenario5_SLA/payments/search?p_date_start=01-01-2016&p_date-end=01-01-2017'

```

Replace access_token with an access token for two different users and in trace you should see it's being routed to two different backends.
