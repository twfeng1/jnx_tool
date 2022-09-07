function formatTS2(nsecs){
    if ((nsecs===0)) return '0';
    if (nsecs==='') return nsecs;

    let d= new  Date(nsecs/1000000);
  //  let d= new  Date(epoch*1000);
    //return moment(d).local().format('Y/M/D_HH:mm:ss') + ' '
    return moment(d).local().format('HH:mm:ss') + ' '
        + moment.tz(moment.tz.guess()).zoneAbbr()
        + ' ('
        + moment(d).fromNow()
        + ')' ;
}




function formatTS(nsecs){
    if ((nsecs===0)) return '0';
    if (_.isEmpty(nsecs)) return '';


    let dtInt = BigInt(nsecs);
    //  console.log(parseInt(dtInt/1000000n));
    let dt = new Date(parseInt(dtInt/1000000n));
    //console.log(dt);
    let  formatted_time = dt.getUTCHours()+':'+ _.padStart(dt.getUTCMinutes(),2,"0") +":"
        + _.padStart(dt.getUTCSeconds(),2,"0")+"."
        + _.padStart(dt.getUTCMilliseconds(),3,"0")
        + " T " + (dtInt%1000000n).toString().padStart(6,'0') + "";
    return ( dtInt)+ ' ('+formatted_time+')';
    //return '000wei'
}

function formatMessageType(value){

    switch (value){
        case 'O' : return 'O (EnterOrder)';
        case 'A' : return 'A (OrderAccepted)';
        case 'U' : return value; //'U (Replaced)';
        case 'U' : return value; //'U (Replace)';
        case 'X' : return 'X (Cancel)';
        case 'C' : return 'C (Cancelled)';
        case 'S' : return 'S (SystemEvent)';
        case 'D' : return 'D (AIQ Cancelled)';
        default: return value;
    }
}

function formatDescription(value,a,b,c){
  //console.log(value,a,b,c);
    switch (value){
    //    case 'O' : return 'O (EnterOrder)';
    //    case 'A' : return 'A (OrderAccepted)';
        case 'U' : return value; //'U (Replaced)';
        case 'U' : return value; //'U (Replace)';
     //   case 'X' : return 'X (Cancel)';
     //   case 'C' : return 'C (Cancelled)';
     //   case 'S' : return 'S (SystemEvent)';
    //    case 'D' : return 'D (AIQ Cancelled)';
        default: return value;
    }
}

function formatTIF(value){

    switch (value+''){
            case '99999' : return '99999 (Day)';
            case '0' : return '0 (Immediate)';
            default: return value;
    }
}

function formatMessageTypeCSS(cellvalue, rowItem,rowid, columnid ){

    switch (true){
        case rowItem['PacketType']==='U' && rowItem['MessageType']==='O' : return 'CSS_MESSAGETYPE_ENTERORDER'
            break;
        case rowItem['PacketType']==='U' && rowItem['MessageType']==='X' : return 'CSS_MESSAGETYPE_CANCEL'
            break;
        case rowItem['PacketType']==='U' && rowItem['MessageType']==='U' : return 'CSS_MESSAGETYPE_REPLACE'
            break;
        case rowItem['PacketType']==='S' && rowItem['MessageType']==='A' : return 'CSS_MESSAGETYPE_ORDERACCEPTED'
            break;
        case rowItem['PacketType']==='S' && rowItem['MessageType']==='U' : return 'CSS_MESSAGETYPE_REPLACED'
            break;
        case rowItem['PacketType']==='S' && rowItem['MessageType']==='C' : return 'CSS_MESSAGETYPE_CANCELLED'
            break;
        case rowItem['PacketType']==='S' && rowItem['MessageType']==='D' : return 'CSS_MESSAGETYPE_AIQCANCELLED'
            break;
        case rowItem['PacketType']==='S' && rowItem['MessageType']==='E' : return 'CSS_MESSAGETYPE_EXECUTED'
            break;
        case rowItem['PacketType']==='S' && rowItem['MessageType']==='J' : return 'CSS_MESSAGETYPE_EXECUTED'
            break;
        case rowItem['PacketType']==='S' && rowItem['MessageType']==='S' : return 'CSS_MESSAGETYPE_SYSTEMEVENT'
            break;
        case rowItem['PacketType']==='A' : return 'CSS_PACKETTYPE_LOGONACCEPTED'
            break;
        case rowItem['PacketType']==='L' : return 'CSS_PACKETTYPE_LOGONREQUEST'
            break;
        case rowItem['PacketType']==='+' : return 'CSS_PACKETTYPE_DEBUG'
            break;
        case rowItem['PacketType']==='O' : return 'CSS_PACKETTYPE_LOGOUT'
            break;
        default : return;
    }


    /**
    if ((value===3) || (value.includes('UNKNOWN')) ){  return 'bg-secondary text-white' }
    if ((value===2) || (value.includes('CRITICAL')) ){  return 'bg-danger text-white' }
    if ((value===1) || (value.includes('WARN')) ){  return "bg-warning";}

    //  if ((value===0) || (value.includes('OK'))) {  return  "bg-success text-white";}
    if ((value===0) || (value.includes('OK'))) {  return  {"background":  "#18662b"}}
    **/
}

export { formatTS ,formatMessageType,formatDescription, formatMessageTypeCSS,formatTIF}
