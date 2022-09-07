const samples2 = [{"id":1,"wLine":1,"PacketLength":47,"PacketType":"L (Login Request)","Username":"USER01","Password":"PASSWORD01","RequestedSession":" ","RequestedSequenceNumber":" 1","wRootOrder":"UNGROUPED"},{"id":2,"wLine":2,"PacketLength":31,"PacketType":"A (Login Accepted)","Session":"1659297701","SequenceNumber ":" 1","wRootOrder":"UNGROUPED"},{"id":3,"wLine":3,"PacketLength":11,"PacketType":"S (Sequenced)","MessageType":"S (System Event )","Timestamp":"30000000006000","SystemEvent":"S (Start Of Day - Always the first message. Indicates the market is open and ready to start accepting orders)","wRootOrder":"UNGROUPED"},{"id":4,"wLine":4,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":46451047,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":46451047},{"id":5,"wLine":5,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"46452020663000","OrderToken":46451047,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000000849","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":46451047},{"id":6,"wLine":6,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":48591716,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":48591716},{"id":7,"wLine":7,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"48592775464000","OrderToken":48591716,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001062","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":48591716},{"id":8,"wLine":8,"PacketLength":10,"PacketType":"U (UnSequenced)","MessageType":"X (Cancel Order )","OrderToken":48591716,"Quantity":0,"wRootOrder":48591716},{"id":9,"wLine":9,"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"48915802968000","OrderToken":48591716,"DecrementQuantity":200,"OrderCanceledReason":"U (User requested the order to be canceled. Sent in response to a Cancel Order Message or a Replace Order Message.)","wRootOrder":48591716},{"id":10,"wLine":10,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":49862004,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":49862004},{"id":11,"wLine":11,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"49862968308000","OrderToken":49862004,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001210","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":49862004},{"id":12,"wLine":12,"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":49862004,"ReplacementOrderToken":49862005,"Quantity":200,"Price":11674,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0,"wRootOrder":49862004},{"id":13,"wLine":13,"PacketLength":53,"PacketType":"S (Sequenced)","MessageType":"U (Replaced)","Timestamp":"49960251256000","ReplacementOrderToken":49862005,"BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11674,"TimeinForce":"99999 (Day)","Display":" ","OrderNumber":"202208010000001215","MinimumQuantity":0,"OrderState":"L (Live )","PreviousOrderToken":49862004,"wRootOrder":49862004},{"id":14,"wLine":14,"PacketLength":10,"PacketType":"U (UnSequenced)","MessageType":"X (Cancel Order )","OrderToken":49862005,"Quantity":0,"wRootOrder":49862004},{"id":15,"wLine":15,"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"50087253639000","OrderToken":49862005,"DecrementQuantity":200,"OrderCanceledReason":"U (User requested the order to be canceled. Sent in response to a Cancel Order Message or a Replace Order Message.)","wRootOrder":49862004},{"id":16,"wLine":16,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":50186678,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":50186678},{"id":17,"wLine":17,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"50187919663000","OrderToken":50186678,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001221","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":50186678},{"id":18,"wLine":18,"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":50186678,"ReplacementOrderToken":50186679,"Quantity":100,"Price":11675,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0,"wRootOrder":50186678},{"id":19,"wLine":19,"PacketLength":53,"PacketType":"S (Sequenced)","MessageType":"U (Replaced)","Timestamp":"50234923754000","ReplacementOrderToken":50186679,"BuySellIndicator":"B (Buy)","Quantity":100,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","Display":" ","OrderNumber":"202208010000001221","MinimumQuantity":0,"OrderState":"L (Live )","PreviousOrderToken":50186678,"wRootOrder":50186678},{"id":20,"wLine":20,"PacketLength":10,"PacketType":"U (UnSequenced)","MessageType":"X (Cancel Order )","OrderToken":50186679,"Quantity":0,"wRootOrder":50186678},{"id":21,"wLine":21,"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"50276931275000","OrderToken":50186679,"DecrementQuantity":100,"OrderCanceledReason":"U (User requested the order to be canceled. Sent in response to a Cancel Order Message or a Replace Order Message.)","wRootOrder":50186678},{"id":22,"wLine":22,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":50315668,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":50315668},{"id":23,"wLine":23,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"50316934129000","OrderToken":50315668,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001224","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":50315668},{"id":24,"wLine":24,"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":50315668,"ReplacementOrderToken":50315669,"Quantity":0,"Price":11673,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0,"wRootOrder":50315668},{"id":25,"wLine":25,"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"50379935232000","OrderToken":50315668,"DecrementQuantity":200,"OrderCanceledReason":"Z (Invalid quantity.)","wRootOrder":50315668},{"id":26,"wLine":26,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":50594316,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":50594316},{"id":27,"wLine":27,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"50595280598000","OrderToken":50594316,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001227","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":50594316},{"id":28,"wLine":28,"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":50594316,"ReplacementOrderToken":50315669,"Quantity":100,"Price":0,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0,"wRootOrder":50594316},{"id":29,"wLine":29,"PacketLength":27,"PacketType":"U (UnSequenced)","MessageType":"U (Replace)","ExistingOrderToken":50594316,"ReplacementOrderToken":50594317,"Quantity":100,"Price":0,"TimeinForce":"99999 (Day)","Display":" ","MinimumQuantity":0,"wRootOrder":50594316},{"id":30,"wLine":30,"PacketLength":19,"PacketType":"S (Sequenced)","MessageType":"C (Order Canceled )","Timestamp":"50711160621000","OrderToken":50594316,"DecrementQuantity":200,"OrderCanceledReason":"X (Invalid price.)","wRootOrder":50594316},{"id":31,"wLine":31,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":51211761,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":51211761},{"id":32,"wLine":32,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"51213004471000","OrderToken":51211761,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001273","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":51211761},{"id":33,"wLine":33,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":51221231,"ClientReference":"FIXNETIX ","BuySellIndicator":"S (Sell)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":51221231},{"id":34,"wLine":34,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"51222195588000","OrderToken":51221231,"ClientReference":"FIXNETIX ","BuySellIndicator":"S (Sell)","Quantity":200,"OrderbookId":6758,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208010000001274","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":51221231},{"id":35,"wLine":35,"PacketLength":31,"PacketType":"S (Sequenced)","MessageType":"E (Order Executed )","Timestamp":"51222195588000","OrderToken":46451047,"ExecutedQuantity":200,"ExecutionPrice":11675,"LiquidityIndicator":"A (Added (for the passive firm))","MatchNumber":"202208010000000117","wRootOrder":46451047},{"id":36,"wLine":36,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":36084502,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":200,"OrderbookId":9999,"Group":"DAY ","Price":11675,"TimeinForce":"99999 (Day)","FirmId":0,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":36084502},{"id":37,"wLine":37,"PacketLength":15,"PacketType":"S (Sequenced)","MessageType":"J (Order Rejected )","Timestamp":"36085481980000","OrderToken":36084502,"OrderRejectedReason":"53","wRootOrder":36084502},{"id":38,"wLine":38,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":39095604,"ClientReference":"FIXNETIX ","BuySellIndicator":"S (Sell)","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":"99999 (Day)","FirmId":201,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":39095604},{"id":39,"wLine":39,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"39096826407000","OrderToken":39095604,"ClientReference":"FIXNETIX ","BuySellIndicator":"S (Sell)","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":"99999 (Day)","FirmId":201,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208030000000774","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":39095604},{"id":40,"wLine":40,"PacketLength":49,"PacketType":"U (UnSequenced)","MessageType":"O (Enter Order)","OrderToken":39114597,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":"99999 (Day)","FirmId":201,"Display":" ","Capacity":"A (Agency)","MinimumQuantity":0,"OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":39114597},{"id":41,"wLine":41,"PacketLength":66,"PacketType":"S (Sequenced)","MessageType":"A (Order Accepted)","Timestamp":"39115829994000","OrderToken":39114597,"ClientReference":"FIXNETIX ","BuySellIndicator":"B (Buy)","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":"99999 (Day)","FirmId":201,"Display":" ","Capacity":"A (Agency)","OrderNumber":"202208030000000782","MinimumQuantity":0,"OrderState":"L (Live )","OrderClassification":"6 (HFT other strategy)","CashMarginType":"1 (Cash)","wRootOrder":39114597},{"id":42,"wLine":42,"PacketLength":28,"PacketType":"S (Sequenced)","MessageType":"D (Order AIQ Canceled)","Timestamp":"39115829994000","OrderToken":39114597,"DecrementQuantity":1000,"OrderCanceledReason":"M (Order expired during match.)","QuantityPreventedfromTrading":1000,"ExecutionPrice":3655,"LiquidityIndicator":"R (Removed (for the aggressor))","wRootOrder":39114597},{"id":43,"wLine":43,"PacketLength":28,"PacketType":"S (Sequenced)","MessageType":"D (Order AIQ Canceled)","Timestamp":"39115829994000","OrderToken":39095604,"DecrementQuantity":1000,"OrderCanceledReason":"M (Order expired during match.)","QuantityPreventedfromTrading":1000,"ExecutionPrice":3655,"LiquidityIndicator":"A (Added (for the passive firm))","wRootOrder":39095604},{"id":44,"wLine":44,"PacketLength":29,"PacketType":"+ (Debug Packet)","Text":"THIS_IS_A_DEBUG_PKT_FIXNETIX","wRootOrder":"UNGROUPED"},{"id":45,"wLine":45,"PacketLength":1,"PacketType":"O (Logout Request)","wRootOrder":"UNGROUPED"}];

var samples =[
{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":64451542,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":64451542,"ReplacementOrderToken":64451543,"Quantity":7900,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":64451543,"ReplacementOrderToken":64451544,"Quantity":7800,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":64451544,"ReplacementOrderToken":64451545,"Quantity":7700,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"64452678206000","OrderToken":64451542,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","OrderNumber":"202208190000000003","MinimumQuantity":0,"OrderState":"L","OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":53,"PacketType":"S","MessageType":"U","Timestamp":"64452678225000","ReplacementOrderToken":64451543,"BuySellIndicator":"B","Quantity":7900,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"Display":" ","OrderNumber":"202208190000000003","MinimumQuantity":0,"OrderState":"L","PreviousOrderToken":64451542}
,{"PacketLength":53,"PacketType":"S","MessageType":"U","Timestamp":"64452678247000","ReplacementOrderToken":64451544,"BuySellIndicator":"B","Quantity":7800,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"Display":" ","OrderNumber":"202208190000000003","MinimumQuantity":0,"OrderState":"L","PreviousOrderToken":64451543}
,{"PacketLength":53,"PacketType":"S","MessageType":"U","Timestamp":"64452678270000","ReplacementOrderToken":64451545,"BuySellIndicator":"B","Quantity":7700,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"Display":" ","OrderNumber":"202208190000000003","MinimumQuantity":0,"OrderState":"L","PreviousOrderToken":64451544}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":64883508,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":64883508,"ReplacementOrderToken":64883509,"Quantity":7900,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":64883508,"ReplacementOrderToken":64883510,"Quantity":7800,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":64883508,"ReplacementOrderToken":64883511,"Quantity":7700,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"64884960241000","OrderToken":64883508,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","OrderNumber":"202208190000000005","MinimumQuantity":0,"OrderState":"L","OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":53,"PacketType":"S","MessageType":"U","Timestamp":"64884960266000","ReplacementOrderToken":64883509,"BuySellIndicator":"B","Quantity":7900,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"Display":" ","OrderNumber":"202208190000000005","MinimumQuantity":0,"OrderState":"L","PreviousOrderToken":64883508}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":56203959,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":201,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"1","CashMarginType":"1"}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":56203960,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":700,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":201,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"1","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"56205094232000","OrderToken":56203959,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":201,"Display":" ","Capacity":"A","OrderNumber":"202208180000020267","MinimumQuantity":0,"OrderState":"L","OrderClassification":"1","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"56205094255000","OrderToken":56203960,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":700,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":201,"Display":" ","Capacity":"A","OrderNumber":"202208180000020268","MinimumQuantity":0,"OrderState":"L","OrderClassification":"1","CashMarginType":"1"}
,{"PacketLength":28,"PacketType":"S","MessageType":"D","Timestamp":"56205094255000","OrderToken":56203960,"DecrementQuantity":700,"OrderCanceledReason":"M","QuantityPreventedfromTrading":700,"ExecutionPrice":3655,"LiquidityIndicator":"R"}
,{"PacketLength":28,"PacketType":"S","MessageType":"D","Timestamp":"56205094255000","OrderToken":56203959,"DecrementQuantity":700,"OrderCanceledReason":"M","QuantityPreventedfromTrading":700,"ExecutionPrice":3655,"LiquidityIndicator":"A"}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":56203959,"ReplacementOrderToken":56203961,"Quantity":800,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":53,"PacketType":"S","MessageType":"U","Timestamp":"56398977082000","ReplacementOrderToken":56203961,"BuySellIndicator":"S","Quantity":800,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"Display":" ","OrderNumber":"202208180000020267","MinimumQuantity":0,"OrderState":"L","PreviousOrderToken":56203959}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":56203961,"ReplacementOrderToken":56203962,"Quantity":700,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":53,"PacketType":"S","MessageType":"U","Timestamp":"56496652272000","ReplacementOrderToken":56203962,"BuySellIndicator":"S","Quantity":700,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"Display":" ","OrderNumber":"202208180000020267","MinimumQuantity":0,"OrderState":"D","PreviousOrderToken":56203961}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":56203959,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":201,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"1","CashMarginType":"1"}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":56203960,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":700,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":201,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"1","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"56205094232000","OrderToken":56203959,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":201,"Display":" ","Capacity":"A","OrderNumber":"202208180000020267","MinimumQuantity":0,"OrderState":"L","OrderClassification":"1","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"56205094255000","OrderToken":56203960,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":700,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":201,"Display":" ","Capacity":"A","OrderNumber":"202208180000020268","MinimumQuantity":0,"OrderState":"L","OrderClassification":"1","CashMarginType":"1"}
,{"PacketLength":28,"PacketType":"S","MessageType":"D","Timestamp":"56205094255000","OrderToken":56203960,"DecrementQuantity":700,"OrderCanceledReason":"M","QuantityPreventedfromTrading":700,"ExecutionPrice":3655,"LiquidityIndicator":"R"}
,{"PacketLength":28,"PacketType":"S","MessageType":"D","Timestamp":"56205094255000","OrderToken":56203959,"DecrementQuantity":700,"OrderCanceledReason":"M","QuantityPreventedfromTrading":700,"ExecutionPrice":3655,"LiquidityIndicator":"A"}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":56203959,"ReplacementOrderToken":56203961,"Quantity":800,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":53,"PacketType":"S","MessageType":"U","Timestamp":"56398977082000","ReplacementOrderToken":56203961,"BuySellIndicator":"S","Quantity":800,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"Display":" ","OrderNumber":"202208180000020267","MinimumQuantity":0,"OrderState":"L","PreviousOrderToken":56203959}
,{"PacketLength":27,"PacketType":"U","MessageType":"U","ExistingOrderToken":56203961,"ReplacementOrderToken":56203962,"Quantity":700,"Price":3655,"TimeinForce":99999,"Display":" ","MinimumQuantity":0}
,{"PacketLength":53,"PacketType":"S","MessageType":"U","Timestamp":"56496652272000","ReplacementOrderToken":56203962,"BuySellIndicator":"S","Quantity":700,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"Display":" ","OrderNumber":"202208180000020267","MinimumQuantity":0,"OrderState":"D","PreviousOrderToken":56203961}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":51140621,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":51140622,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"51141762217000","OrderToken":51140621,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","OrderNumber":"202208180000012471","MinimumQuantity":0,"OrderState":"L","OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"51141762243000","OrderToken":51140622,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":1000,"OrderbookId":1301,"Group":"DAY ","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","OrderNumber":"202208180000012472","MinimumQuantity":0,"OrderState":"L","OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":31,"PacketType":"S","MessageType":"E","Timestamp":"51141762243000","OrderToken":51140621,"ExecutedQuantity":1000,"ExecutionPrice":3655,"LiquidityIndicator":"A","MatchNumber":"202208180000000125"}
,{"PacketLength":31,"PacketType":"S","MessageType":"E","Timestamp":"51141762243000","OrderToken":51140622,"ExecutedQuantity":1000,"ExecutionPrice":3655,"LiquidityIndicator":"R","MatchNumber":"202208180000000125"}


,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":69111075,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":69111076,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":69111077,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":49,"PacketType":"U","MessageType":"O","OrderToken":69111078,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","MinimumQuantity":0,"OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"69112564062000","OrderToken":69111075,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","OrderNumber":"202208190000000026","MinimumQuantity":0,"OrderState":"L","OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"69112564082000","OrderToken":69111076,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","OrderNumber":"202208190000000027","MinimumQuantity":0,"OrderState":"L","OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":31,"PacketType":"S","MessageType":"E","Timestamp":"69112564082000","OrderToken":69111075,"ExecutedQuantity":8000,"ExecutionPrice":3655,"LiquidityIndicator":"A","MatchNumber":"202208190000000011"}
,{"PacketLength":31,"PacketType":"S","MessageType":"E","Timestamp":"69112564082000","OrderToken":69111076,"ExecutedQuantity":8000,"ExecutionPrice":3655,"LiquidityIndicator":"R","MatchNumber":"202208190000000011"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"69112564101000","OrderToken":69111077,"ClientReference":"FIXNETIX ","BuySellIndicator":"B","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","OrderNumber":"202208190000000028","MinimumQuantity":0,"OrderState":"L","OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":66,"PacketType":"S","MessageType":"A","Timestamp":"69112564121000","OrderToken":69111078,"ClientReference":"FIXNETIX ","BuySellIndicator":"S","Quantity":8000,"OrderbookId":1301,"Group":"NGHT","Price":3655,"TimeinForce":99999,"FirmId":0,"Display":" ","Capacity":"A","OrderNumber":"202208190000000029","MinimumQuantity":0,"OrderState":"L","OrderClassification":"6","CashMarginType":"1"}
,{"PacketLength":31,"PacketType":"S","MessageType":"E","Timestamp":"69112564121000","OrderToken":69111077,"ExecutedQuantity":8000,"ExecutionPrice":3655,"LiquidityIndicator":"A","MatchNumber":"202208190000000012"}
,{"PacketLength":31,"PacketType":"S","MessageType":"E","Timestamp":"69112564121000","OrderToken":69111078,"ExecutedQuantity":8000,"ExecutionPrice":3655,"LiquidityIndicator":"R","MatchNumber":"202208190000000012"}

]

var samples3 =  (
    "002f4c55534552303150415353574F52443031202020202020202020202020202020202020202020202020202020202031\n" +
    "001f41313635393239373730312020202020202020202020202020202020202031\n" +
    "000b535300001b48eb57f77053\n" +
    "0031554f030c580d4649584e45544958202042000003e8000005154441592000008ec60001869f000000002041000000003631\n" +
    "0031554f030c580e4649584e45544958202053000003e8000005154441592000008ec60001869f000000002041000000003631\n" +
    "0042534100002e835e91f428030c580d4649584e45544958202042000003e8000005154441592000008ec60001869f00000000204102ce6344b39438b7000000004c3631\n" +
    "0042534100002e835e9259b8030c580e4649584e45544958202053000003e8000005154441592000008ec60001869f00000000204102ce6344b39438b8000000004c3631\n" +
    "001f534500002e835e9259b8030c580d000003e800008ec64102ce6344b394087d\n" +
    "001f534500002e835e9259b8030c580e000003e800008ec65202ce6344b394087d\n"+

    "0031554f02c4c9674649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
    "0042534100002a3f7430d2d802c4c9674649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e751000000004c3631\n" +
    "0031554f02e573644649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
    "0042534100002c31e31ec44002e573644649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e826000000004c3631\n" +
    "000a555802e5736400000000\n" +
    "0013534300002c7d190f4fc002e57364000000c855\n" +
    "0031554f02f8d5744649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
    "0042534100002d59a083712002f8d5744649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8ba000000004c3631\n" +
    "001b555502f8d57402f8d575000000c80001c8040001869f2000000000\n" +
    "0035535500002d7047076cc002f8d57542000000c800001a66444159200001c8040001869f2002ce631d1ec9e8bf000000004c02f8d574\n" +
    "000a555802f8d57500000000\n" +
    "0013534300002d8dd8f5ff5802f8d575000000c855\n" +
    "0031554f02fdc9b64649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
    "0042534100002da5491f9f9802fdc9b64649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8c5000000004c3631\n" +
    "001b555502fdc9b602fdc9b7000000640001c80e0001869f2000000000\n" +
    "0035535500002db03ac9221002fdc9b7420000006400001a66444159200001c80e0001869f2002ce631d1ec9e8c5000000004c02fdc9b6\n" +
    "000a555802fdc9b700000000\n" +
    "0013534300002dba02a108f802fdc9b70000006455\n" +
    "0031554f02ffc1944649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
    "0042534100002dc352fc256802ffc1944649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8c8000000004c3631\n" +
    "001b555502ffc19402ffc195000000000001c7fa0001869f2000000000\n" +
    "0013534300002dd1fe24b00002ffc194000000c85a\n" +
    "0031554f0304020c4649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
    "0042534100002e0421ba33f00304020c4649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8cb000000004c3631\n" +
    "001b55550304020c02ffc19500000064000000000001869f2000000000\n" +
    "001b55550304020c0304020d00000064000000000001869f2000000000\n" +
    "0013534300002e1f1cb707c80304020c000000c858\n" +
    "0031554f030d6df14649584e45544958202042000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
    "0042534100002e93f4f07ad8030d6df14649584e45544958202042000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8f9000000004c3631\n" +
    "0031554f030d92ef4649584e45544958202053000000c800001a66444159200001c80e0001869f000000002041000000003631\n" +
    "0042534100002e9618c5cba0030d92ef4649584e45544958202053000000c800001a66444159200001c80e0001869f00000000204102ce631d1ec9e8fa000000004c3631\n" +
    "001f534500002e9618c5cba002c4c967000000c80001c80e4102ce631d1ec9e475001f534500002e9618c5cba0030d92ef000000c80001c80e5202ce631d1ec9e475\n" +
    "0031554f02269b164649584e45544958202042000000c80000270f444159200001c80e0001869f000000002041000000003631\n" +
    "000f534a000020d1ce55c06002269b1653\n" +
    "0031554f02548d344649584e45544958202053000003e8000005154441592000008ec60001869f000000c92041000000003631\n" +
    "004253410000238ef073285802548d344649584e45544958202053000003e8000005154441592000008ec60001869f000000c9204102ce6321c6e1af06000000004c3631\n" +
    "0031554f0254d7654649584e45544958202042000003e8000005154441592000008ec60001869f000000c92041000000003631\n" +
    "00425341000023935d26e2100254d7654649584e45544958202042000003e8000005154441592000008ec60001869f000000c9204102ce6321c6e1af0e000000004c3631\n" +
    "001c5344000023935d26e2100254d765000003e84d000003e800008ec652\n" +
    "001c5344000023935d26e21002548d34000003e84d000003e800008ec641\n" +
    "001d2b544849535f49535f415f44454255475f504b545f4649584e45544958\n" +
    "00014f\n"+

    "0031554f03d773d64649584e4554495820204200001f40000005154e47485400008ec60001869f000000002041000000003631\n" +
    "001b555503d773d603d773d700001edc00008ec60001869f2000000000\n" +
    "001b555503d773d703d773d800001e7800008ec60001869f2000000000\n" +
    "001b555503d773d803d773d900001e1400008ec60001869f2000000000\n" +
    "0042534100003a9e8efd423003d773d64649584e4554495820204200001f40000005154e47485400008ec60001869f00000000204102ce6347079fec03000000004c3631\n" +
    "0035535500003a9e8efd8c6803d773d74200001edc000005154e47485400008ec60001869f2002ce6347079fec03000000004c03d773d6\n" +
    "0035535500003a9e8efde25803d773d84200001e78000005154e47485400008ec60001869f2002ce6347079fec03000000004c03d773d7\n" +
    "0035535500003a9e8efe3c3003d773d94200001e14000005154e47485400008ec60001869f2002ce6347079fec03000000004c03d773d8\n" +
    "0031554f03de0b344649584e4554495820204200001f40000005154e47485400008ec60001869f000000002041000000003631\n" +
    "001b555503de0b3403de0b3500001edc00008ec60001869f2000000000\n" +
    "001b555503de0b3403de0b3600001e7800008ec60001869f2000000000\n" +
    "001b555503de0b3403de0b3700001e1400008ec60001869f2000000000\n" +
    "0042534100003b033501a56803de0b344649584e4554495820204200001f40000005154e47485400008ec60001869f00000000204102ce6347079fec05000000004c3631\n" +
    "0035535500003b033502071003de0b354200001edc000005154e47485400008ec60001869f2002ce6347079fec05000000004c03de0b34\n" +
    "0031554f03599ab74649584e45544958202053000003e8000005154441592000008ec60001869f000000c92041000000003131\n" +
    "0031554f03599ab84649584e45544958202042000002bc000005154441592000008ec60001869f000000c92041000000003131\n" +
    "004253410000331e44ad1fc003599ab74649584e45544958202053000003e8000005154441592000008ec60001869f000000c9204102ce6344b394572b000000004c3131\n" +
    "004253410000331e44ad799803599ab84649584e45544958202042000002bc000005154441592000008ec60001869f000000c9204102ce6344b394572c000000004c3131\n" +
    "001c53440000331e44ad799803599ab8000002bc4d000002bc00008ec652\n" +
    "001c53440000331e44ad799803599ab7000002bc4d000002bc00008ec641\n" +
    "001b555503599ab703599ab90000032000008ec60001869f2000000000\n" +
    "003553550000334b68fea29003599ab95300000320000005154441592000008ec60001869f2002ce6344b394572b000000004c03599ab7\n" +
    "001b555503599ab903599aba000002bc00008ec60001869f2000000000\n" +
    "003553550000336226e3c18003599aba53000002bc000005154441592000008ec60001869f2002ce6344b394572b000000004403599ab9\n"
).trim()
        .split('\n')


samples= samples3;
//console.log(samples)
export { samples };