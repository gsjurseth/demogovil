var start   = context.getVariable('p_date_start');
var end     = context.getVariable('p_date_end');

if ( start.split('-').length !== 3 ) {
    start = start + "-" + moment().format('YYYY');
    context.setVariable('p_date_start', start);
}
if ( end.split('-').length !== 3 ) {
    end = end + "-" + moment().format('YYYY');
    context.setVariable('p_date_end', end);
}


// First we check if the dates are sane
var start_date  = moment(start,'DD-MM-YYYY');
var end_date    = moment(end,'DD-MM-YYYY');

if ( !(Date.parse(start_date)) || !(Date.parse(end_date)) ) {
    context.setVariable("triggerError", "true");
}
else if ( start_date > end_date ) {
    context.setVariable("triggerError", "true");
}
else {
    context.setVariable("triggError", "false");
}

context.setVariable('startDate', start_date.toString());
context.setVariable('endDate', end_date.toString());
