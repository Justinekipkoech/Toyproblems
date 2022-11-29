let speed =300
if (speed<=80){
    console.log('OK')
}
else {

    var dmrt =speed-70
    let dmrtPoints=dmrt/5
    if(dmrtPoints>12){
        console.log('License is suspended', dmrtPoints)
    }


else {
    console.log('${dmrtPoints} Has been deducted');

}
}
