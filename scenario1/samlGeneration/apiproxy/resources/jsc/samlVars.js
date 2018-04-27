 function addHours(d,h) {
  var d1 = new Date();
  d1.setTime(d.getTime() + h * 60 * 60 * 1000); 
  return d1;
}

var now = moment().format('YYYYMMDDHH:mm:ssZ');
var later = moment().add(12, 'hours').format('YYYYMMDDHH:mm:ssZ')
context.setVariable('mysaml.now', now);
context.setVariable('mysaml.expiry', later);