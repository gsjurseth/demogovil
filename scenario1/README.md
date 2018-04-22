# Scenario Number 1 – Exposing the Payments Service on the API GW (REST Service)

## The System Context
Once again here is the system context
![alt text](resources/images/SystemContext.png "System Context")

## Overview
Examples of a request made to the payments service (each request will send back an XML that includes all the relevant records that meet the query criterion, in a uniform and complete structure – with all the fields appearing in the table):
Obtaining all the payments made by a civilian with a specific ID number
/payments/search?tz=123456789
Obtaining all the payments made in 2016
/payments/search?p_date_start=01-01-2016&p_date-end=31-12-2016
Obtaining all the payments made in 2016 to Authority no. 2
/payments/search?p_date_start=01-01-2016&p_date-end=31-12-2016&authority=2
In this scenario identification is to be implemented with the SAML 2.0 protocol between Office B (the client) and Office A (the information provider). The communication protocol between the office making the request and the API GW component will be HTTPS and the identification method will be based on one of the two following options:
Use of a smart card.
Use of a username and password.

## Scenario Details
The scenario is to be implemented in the following manner:
- The client’s representative logs in to the web application – by inserting the smartcard into the card reader, or by using the alternative identification method with a username and password, as noted above. If a smartcard is used, the app will identify the smartcard and perform a user identification reading from the card and translate it into the office number, department, role and name. If the username and password method is used, the app will perform the translation into the office number, department, role and name. The translation can be done according to the candidate’s choice (for the lab tests only), such as by using a local management table, etc.
In any case, in the SAML token the office number, department, role and name details will always go through when requests are made for the various services.

- The client’s representative performs a query – enters the query details in the designated window (office, date range and other parameters).
- The client’s query service (component no. 10) – sends a request to the payments service through the API GW, upon implementation of the identification process that includes the SAML 2.0 token containing the number of the office making the request, the department, role and name of the user making the call to the information service. 

- The API GW component opens the SAML 2.0 token (after checking it’s validity) and records the request in the log (time, office details and user making the request, the query parameters).

- The API GW checks whether the office making the request is permitted access to the requested service, by contacting the access permissions component (component no. 8). If there is no access permission, an error message will be sent back to the user making the request, and the appropriate record identification will be noted in the log component.

- The API GW component transfers the call details to the payments service (including all the query parameters and details of the user making the request).

- The payments service contacts the information permissions component (component no. 4) and receives the list of authorities permitted for viewing by Office B.

- The payments service returns an XML that constitutes a list of all the payments matching the query, only for the authorities permitted for viewing by Office B.

- The query results are displayed on the user’s web station in Office B. 
