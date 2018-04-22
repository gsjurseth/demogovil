var samlTokenObj = JSON.parse( context.getVariable('SAMLToken') );
 
context.setVariable('officeNumber', samlTokenObj.Assertion.AttributeStatement.Attribute[0].AttributeValue.content);
context.setVariable('department', samlTokenObj.Assertion.AttributeStatement.Attribute[1].AttributeValue.content);
context.setVariable('role', samlTokenObj.Assertion.AttributeStatement.Attribute[2].AttributeValue.content);
context.setVariable('fullName', samlTokenObj.Assertion.AttributeStatement.Attribute[3].AttributeValue.content);
context.setVariable('userId', samlTokenObj.Assertion.AttributeStatement.Attribute[4].AttributeValue.content);
