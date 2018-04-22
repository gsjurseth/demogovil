//var encAss = context.getVariable('assertion');

/*
 * tried with base64 but not working for some reason
 */
//var decAss = atob(encAss);

/*
var decAss = encAss;
*/
var oldContentType = context.getVariable('request.header.Content-Type');
var token = context.getVariable('SAML');
context.setVariable('request.content', token);
context.setVariable('oldContentType', oldContentType);
context.setVariable("request.header.Content-Type", "application/xml");
