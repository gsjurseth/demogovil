# Scenario3
This is really the same as scenario1 except that it only relies on the oauth bit

```bash
curl -H "Authorization: access_token" 'http://demo24-test.apigee.net/scenario3/payments/search?p_date_start=01-01-2016&p_date-end=01-01-2017'

```

Replace access_token with an access token for two different users and in trace you should see it's being routed to two different backends.
