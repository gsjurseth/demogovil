# Scenario6
This scenario is about testing two things:

# Date Management
# Data masking

## Date Management
The following should either work or fail depending on the date.

### Fail
Should fail. The Start date cannot be newer than the end date
```bash
curl -H "Authorization: access_token" 'http://demo24-test.apigee.net/scenario6/payments/search?p_date_start=01-01-2018&p_date-end=01-01-2017'
```
### Fail
Should fail. There is no February 29 in 2017
```bash
curl -H "Authorization: access_token" 'http://demo24-test.apigee.net/scenario6/payments/search?p_date_start=29-02-2017&p_date-end=01-12-2017'
```
### Fail
Should succeed. Even though we've left off the year we should be able to add the year back in and assume it's this year
```bash
curl -H "Authorization: access_token" 'http://demo24-test.apigee.net/scenario6/payments/search?p_date_start=01-02&p_date-end=01-04-2018'
```

Replace access_token with an access token for two different users and in trace you should see it's being routed to two different backends.
