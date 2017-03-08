//get querystring url
location.querystring= function (url) {    //if ommit url target current page        if not exist query string return null
  var querystring;
  if (url === undefined) {
    querystring= (location.toString().slice(location.toString().indexOf('?') + 1, location.toString().length))
    if(querystring==location.href){
      return null;
    } else {
      return  querystring;
    }
  }
  querystring= (url.toString().slice(url.toString().indexOf('?') + 1, url.toString().length));
  if(querystring==url){
    return null;
  } else {
    return  querystring;
  }
}
// location.querystring()            //return query string  current url
location.querystring('http://google.com?id=20&firstName=mahdi&lastName=kavousi')    //return id=20&firstName=mahdi&lastName=kavousi