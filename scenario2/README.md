# Scenario2
This scenario is a classic REST -> SOAP conversion.

## Scenario details
Scenario No. 2 – Exposing the Payments Service on the API GW (SOAP Service)
The supplier needs to implement a SOAP type service, which receives a data structure containing all the possible query fields. After that, the supplier needs to implement a list of new URLs that represent a REST request made to the SOAP service, while the API GW performs parsing of the parameters line in the REST request, and transfers the parsing results to the SOAP service. 

The REST requests will be as follows (the supplier can propose a different structure, if he believes there is a better suggestion):
- Obtaining all the payments made by a civilian with a specific ID number

  /payments/soap/search?tz=123456789

- Obtaining all the payments made in 2016

  /payments/soap/search?p_date_start=01-01-2016&p_date-end=31-12-2016

- Obtaining all the payments made in 2016 to Authority no. 2

  /payments/soap/search?p_date_start=01-01-2016&p_date-end=31-12-2016&authority=2


The communication protocol between the office making the request and the API GW component will be HTTPS. The scenario is to be implemented in the following manner:
- Implementation of the SOAP service that receives a complete data structure representing all the possible query details, including the details of the user making the request (office, department, role, name).
- A request made by the client from the web app to the SOAP service after filling in the query details.
- Implementation of the SAML 2.0 identification process as stated in Scenario no. 1. Recording in the log. 
- Checking the access permission for the office making the request for the desired service using the access permissions component. Recording in the log. 
- Parsing of the URL line by the API GW and building an appropriate data structure for the SOAP service. 
- Calling the SOAP service with the synthetic data structure.
- The SOAP service performs a similar action to that of the REST service – contacting the access permissions component, effectively performing the query and sending back a data structure that includes a specification of the payments according to the query.
- The data structure, in XML form, is sent back to the service making the request in Office B, similarly to how it is described in section 7 above, and is displayed in the user’s web station in Office B.

## Executing this test
Calling scenario2 requires the bearer token. Once you have that simply do the following:

```bash
curl -H "Authorization: Bearer access_token" 'http://demo24-test.apigee.net/scenario2/payments?p_date_start=01-01-2016&p_date-end=31-12-2016&authority=9'

```

Where access_token is the token you got back following the login.
