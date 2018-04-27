# Scenario5_LoadBalancing
This scenario is simply showing that we can loadbalance. This proxy is relying on a couple of target servers and uses a loadbalancing scenario.

## Idea for the live demo
It might be worthwhile showing the different balancing algorithms for this ... And it's an easy change.

## Run the scenario

```bash
curl -H "Authorization: access_token" 'http://demo24-test.apigee.net/Scenario5_LoadBalancing/payments/search?p_date_start=01-01-2016&p_date-end=01-01-2017

```

Replace access_token with an access token after performing an oauth login.
