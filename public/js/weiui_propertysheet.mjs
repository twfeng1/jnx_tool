
function createPropertySheet({id}){
    return  { scroll:'xy',  rows: [ {


            view:"property",  id:id,   width:300, nameWidth:180,
            scroll:'xy',
            elements:[

                { label:"Field Definitions", type:"label" },
                { label:"Name", type:"text", id:"PacketLength", value: 158},
                { label:"Description", type:"text", id:"PacketType", value: 'U'},

                { label:"ValidValues", type:"text", id:"MessageType" , height:300,
                    value: ['A - ABC','B-Brid','C-Chris'].join('<br>')},
/**
                { label:"OpenClose", type:"combo", id:"OpenClose", options:['Buy'], value: '0'},
                { label:"ClientAccount", type:"text", id:"ClientAccount", value: 300},
                { label:"CustomerInfo", type:"text", id:"CustomerInfo", value: 300},
                { label:"ExchangeInfo", type:"text", id:"ExchangeInfo", value: 300},
                { label:"ClearingParticipant", type:"text", id:"ClearingParticipant", value: '16000'},
                { label:"CrossingKey", type:"text", id:"CrossingKey", value: 11},
                { label:"OpenClose", type:"combo", id:"OpenClose", options:['Buy'], value: '0'},
                { label:"ClientAccount", type:"text", id:"ClientAccount", value: 300},
                { label:"CustomerInfo", type:"text", id:"CustomerInfo", value: 300},
                { label:"ExchangeInfo", type:"text", id:"ExchangeInfo", value: 300},
                { label:"ClearingParticipant", type:"text", id:"ClearingParticipant", value: '16000'},
                { label:"CrossingKey", type:"text", id:"CrossingKey", value: 11},
                { label:"OpenClose", type:"combo", id:"OpenClose", options:['Buy'], value: '0'},
                { label:"ClientAccount", type:"text", id:"ClientAccount", value: 300},
                { label:"CustomerInfo", type:"text", id:"CustomerInfo", value: 300},
                { label:"ExchangeInfo", type:"text", id:"ExchangeInfo", value: 300},
                { label:"ClearingParticipant", type:"text", id:"ClearingParticipant", value: '16000'},
                { label:"CrossingKey", type:"text", id:"CrossingKey", value: 11},
 **/
            ]
        }]
    }

}

export { createPropertySheet };