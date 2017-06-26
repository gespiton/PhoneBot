document.bluetooth = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 3, name: 'three'},
  {id: 4, name: 'four'},
  {id: 5, name: 'five'},
  {id: 6, name: 'six'},
];
function getBluetooths() {
  return document.bluetooth;
}


function connectBluetooth(id, callBack) {
  document.connectedBluetoothID = id;
  if (callBack)
    return callBack(null);
}

function currentBluetooth() {
  return document.bluetooth[document.connectedBluetoothID - 1];
}

