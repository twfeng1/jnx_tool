
 //  const _ = await import ('./lodash.js');
//  console.log();


 const KEYWORDS = {
     wRootOrder :'wRootOrder'
 }



 const sample_messages='{"PacketLength":47,"PacketType":"L (Login Request)","Username":"USER01","Password":"PASSWORD01","RequestedSession":" ","RequestedSequenceNumber":" 1"}\n' +
     '{"PacketLength":31,"PacketType":"A (Login Accepted)","Session":"1659297701","SequenceNumber ":" 1"}\n' +
     '{"PacketLength":11,"PacketType":"S (Sequenced)","MessageType":"S (System Event )","Timestamp":"30000000006000","SystemEvent":"S (Start Of Day - Always the first message. Indicates the market is open and ready to start accepting orders)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":46451047,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"46452020663000","OrderToken":46451047,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000000849","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":48591716,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"48592775464000","OrderToken":48591716,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001062","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":10,"PacketType":"U (UnSequenced)","MessageType":"X (Cancel Order )","OrderToken":48591716,"Quantity":0}\n' +
     '{"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"48915802968000","OrderToken":48591716,"DecrementQuantity":200,"OrderCanceledReason":"U (User requested the order to be canceled. Sent in response to a Cancel Order Message or a Replace Order Message.)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":49862004,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"49862968308000","OrderToken":49862004,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001210","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":49862004,"ReplacementOrderToken":49862005,"Quantity":200,"Price":11674,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0}\n' +
     '{"PacketLength":53,"PacketType":"S (Sequenced)","MessageType":"U (Replaced)","Timestamp":"49960251256000","ReplacementOrderToken":49862005,"BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11674,"TimeinForce":"99999 (Day)","Display":" ","OrderNumber":"202208010000001215","MinimumQuantity":0,"OrderState":"L (Live )","PreviousOrderToken":49862004}\n' +
     '{"PacketLength":10,"PacketType":"U (UnSequenced)","MessageType":"X (Cancel Order )","OrderToken":49862005,"Quantity":0}\n' +
     '{"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"50087253639000","OrderToken":49862005,"DecrementQuantity":200,"OrderCanceledReason":"U (User requested the order to be canceled. Sent in response to a Cancel Order Message or a Replace Order Message.)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":50186678,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"50187919663000","OrderToken":50186678,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001221","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":50186678,"ReplacementOrderToken":50186679,"Quantity":100,"Price":11675,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0}\n' +
     '{"PacketLength":53,"PacketType":"S (Sequenced)","MessageType":"U (Replaced)","Timestamp":"50234923754000","ReplacementOrderToken":50186679,"BuySellIndicator":"B (Buy)","Quantity":100,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","Display":" ","OrderNumber":"202208010000001221","MinimumQuantity":0,"OrderState":"L (Live )","PreviousOrderToken":50186678}\n' +
     '{"PacketLength":10,"PacketType":"U (UnSequenced)","MessageType":"X (Cancel Order )","OrderToken":50186679,"Quantity":0}\n' +
     '{"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"50276931275000","OrderToken":50186679,"DecrementQuantity":100,"OrderCanceledReason":"U (User requested the order to be canceled. Sent in response to a Cancel Order Message or a Replace Order Message.)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":50315668,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"50316934129000","OrderToken":50315668,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001224","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":50315668,"ReplacementOrderToken":50315669,"Quantity":0,"Price":11673,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0}\n' +
     '{"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"50379935232000","OrderToken":50315668,"DecrementQuantity":200,"OrderCanceledReason":"Z (Invalid quantity.)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":50594316,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"50595280598000","OrderToken":50594316,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001227","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":50594316,"ReplacementOrderToken":50315669,"Quantity":100,"Price":0,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0}\n' +
     '{"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":50594316,"ReplacementOrderToken":50594317,"Quantity":100,"Price":0,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0}\n' +
     '{"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"50711160621000","OrderToken":50594316,"DecrementQuantity":200,"OrderCanceledReason":"X (Invalid price.)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":51211761,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"51213004471000","OrderToken":51211761,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001273","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":51221231,"ClientReference":"FIXNETIX ","BuySellIndicator":"S (Sell)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"51222195588000","OrderToken":51221231,"ClientReference":"FIXNETIX ","BuySellIndicator":"S (Sell)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001274","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":31,"PacketType":"S (Sequenced)","MessageType":"E (Order Executed )","Timestamp":"51222195588000","OrderToken":46451047,"ExecutedQuantity":200,"ExecutionPrice":11675,"LiquidityIndicator":"A (Added (for the passive firm))","MatchNumber":"202208010000000117"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":36084502,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":9999,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":15,"PacketType":"S (Sequenced)","MessageType":"J (Order Rejected )","Timestamp":"36085481980000","OrderToken":36084502,"OrderRejectedReason":"53"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":39095604,"ClientReference":"FIXNETIX ","BuySellIndicator":"S (Sell)","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":"99999 (Day)","FirmId":201,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"39096826407000","OrderToken":39095604,"ClientReference":"FIXNETIX ","BuySellIndicator":"S (Sell)","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":"99999 (Day)","FirmId":201,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208030000000774","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":39114597,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":"99999 (Day)","FirmId":201,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"39115829994000","OrderToken":39114597,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":"99999 (Day)","FirmId":201,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208030000000782","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)"}\n' +
     '{"PacketLength":28,"PacketType":"S (Sequenced)","MessageType":"D (Order AIQ Canceled)","Timestamp":"39115829994000","OrderToken":39114597,"DecrementQuantity":1000,"OrderCanceledReason":"M (Order expired during match.)","QuantityPreventedfromTrading":1000,"ExecutionPrice":3655,"LiquidityIndicator":"R (Removed (for the aggressor))"}\n' +
     '{"PacketLength":28,"PacketType":"S (Sequenced)","MessageType":"D (Order AIQ Canceled)","Timestamp":"39115829994000","OrderToken":39095604,"DecrementQuantity":1000,"OrderCanceledReason":"M (Order expired during match.)","QuantityPreventedfromTrading":1000,"ExecutionPrice":3655,"LiquidityIndicator":"A (Added (for the passive firm))"}\n' +
     '{"PacketLength":29,"PacketType":"+ (Debug Packet)","Text":"THIS_IS_A_DEBUG_PKT_FIXNETIX"}\n' +
     '{"PacketLength":1,"PacketType":"O (Logout Request)"}\n';




    function isBrowser() {

     // Check if the environment is Node.js
     if (typeof process === "object" &&
         typeof require === "function") {
         return false;
     }

     // Check if the environment is
     // a Service worker
     if (typeof importScripts === "function") {
         return false;
     }

     // Check if the environment is a Browser
     if (typeof window === "object") {
         return true;
     }

     return false;
 }


//alert( window.hasOwnProperty('_'));

    if (  (typeof window !== "undefined") &&  !window.hasOwnProperty('_')) {

        global['_'] = (await import('./lodash.js')).default;
        console.log('loaded lodash lib into global scope!!')
    }

 if (  (typeof parseOUCHBuffer !== "undefined") ) {
     console.log('Fn parseOUCHBuffer is imported!!')
 }
 //if (isBrowser()){ await import('./lodash.js') }else{ global['_'] = (await import('./lodash.js')).default;}
// if (isBrowser()){  console.log('Running Browser'); }else{ console.log('running nodejs');global['_'] = (await import('./lodash.js')).default;}


 //Array.prototype.groupBy = function (x) {return _.groupBy(this,x) }
 //Object.prototype.toPairs = function (x) {return _.toPairs(this) }

// groupBy_ouch_order_token(  sample_messages.trim().split('\n').map(e=>JSON.parse(e)));



function groupBy_ouch_order_token (wEntries){

    let root_map = {};


    const transform_fn = ( ouch_msg, idx )=> {


        let PacketType = _.first(ouch_msg['PacketType']);
        let MessageType = _.first(ouch_msg['MessageType']);
        //  console.log(PacketType+MessageType)

        switch (PacketType + MessageType) {

            case 'UO' : {
                let wRootOrder = ouch_msg.OrderToken;
                ouch_msg.wRootOrder = wRootOrder
                root_map[wRootOrder] = ouch_msg.OrderToken;
            }
                break;


            case 'UX' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }
            }
                break;

            case 'UU' : {
                let ExistingOrderToken = ouch_msg.ExistingOrderToken;
                let ReplacementOrderToken = ouch_msg.ReplacementOrderToken;

                if (_.has(root_map, ExistingOrderToken)) {
                    ouch_msg.wRootOrder = root_map[ExistingOrderToken];
                    root_map[ReplacementOrderToken] = root_map[ExistingOrderToken];
                    break;
                }

                if (_.has(root_map, ReplacementOrderToken)) {
                    ouch_msg.wRootOrder = root_map[ReplacementOrderToken];
                    root_map[ReplacementOrderToken] = root_map[ReplacementOrderToken];
                    break;
                }

                if (!_.has(root_map,ExistingOrderToken)){
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.ExistingOrderToken;
                    ouch_msg.wRootOrder = ouch_msg.ExistingOrderToken;
                }

            }
                break;

            case 'SA' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }

            }
                break;

            case 'SD':
            case 'SC' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }
            }

                break;

            case 'SU' : {
                let ReplacementOrderToken = ouch_msg.ReplacementOrderToken;
                if (_.has(root_map, ReplacementOrderToken)) {
                    let wRootOrder = root_map[ReplacementOrderToken];
                    ouch_msg.wRootOrder = wRootOrder;
                } else {
                    let wRootOrder = ouch_msg.ReplacementOrderToken;
                    root_map[wRootOrder] = wRootOrder;
                    ouch_msg.wRootOrder = wRootOrder
                }
            }

                break;

            case 'SE' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }
            }
                break;

            case 'SJ' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }
            }
                break;

            case 'SS' : {
                //System Event
            }
                break;
            case 'L' : {
                //Login
            }
                break;
            case 'A' : {
                //Login Accepted
            }
                break;

            case '+' : {
                //Soupbin Debug
            }

                break;

            default: {
            }

        }


        ouch_msg = {...{id:idx+1,wLine :idx+1},...ouch_msg}
     //   ouch_msg.wLine = (idx+1);
     //   ouch_msg.id = (idx+1);

        if (!_.has (ouch_msg,'wRootOrder')){ ouch_msg.wRootOrder="ADMIN"}
        return ouch_msg;

    }



   return wEntries.map( transform_fn)


}

function tryParseJSON (str){ try{ return JSON.parse(str); }catch(e){ return undefined; }}

function testm (){
  //  let _=lodash;
  // if (isBrowser()){
       return _.chunk(['a', 'b', 'c', 'd'], 2);
  // }else{
    //   return lodash.chunk(['a', 'b', 'c', 'd'], 2);
  // }

   //return  _.groupBy(sample_messages.trim().split('\n').map(e=>JSON.parse(e)),'OrderToken');


}

function test (){
    let data=groupBy_ouch_order_token(sample_messages.trim().split('\n').map(e=>JSON.parse(e)));
    console.log(JSON.stringify(data));
}
//console.log( groupBy_ouch_order_token(sample_messages.trim().split('\n').map(e=>JSON.parse(e))))

 //test()
export {  groupBy_ouch_order_token, testm};
// => { '4': [4.2], '6': [6.1, 6.3] }

