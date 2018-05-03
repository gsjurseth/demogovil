var page = context.getVariable("request.queryparam.page");

if (page === null)
{
context.setVariable("page","1");
}
else
{

context.setVariable("page",page);
}