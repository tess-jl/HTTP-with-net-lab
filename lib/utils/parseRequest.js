module.exports = rawRequest => {
  let splitString = rawRequest.split(' ');
  const responseObj = {
    method: splitString[0],
    path: splitString[1]
  };
  if(!splitString[4].includes('\r')) {
    return responseObj;
  } else {
    splitString = splitString[splitString.length - 1].split('\n');
    responseObj.body = splitString[splitString.length - 1];
    return responseObj;
  }
};
