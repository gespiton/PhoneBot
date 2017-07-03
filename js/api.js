document.bluetooth = [
  {id: 1, name: 'one-test'},
  {id: 2, name: 'two-test'},
  {id: 3, name: 'three-test'},
  {id: 4, name: 'four-test'},
  {id: 5, name: 'five-test'},
  {id: 6, name: 'six-test'},
];
function getBluetooths() {
  return document.bluetooth;
}

function currentBluetooth() {
  return document.bluetooth[document.connectedBluetoothID - 1];
}

function connectBluetooth(id, callBack) {
  document.connectedBluetoothID = id;
  if (callBack)
    return callBack(null);
}


function sendBluetooth(message, callBack){

  console.log(message);

  if (callBack) {
    return callBack(null);
  }else{
    console.log("send message failed");
  }
}

function readBluetooth(callBack){
  console.log("")
}
