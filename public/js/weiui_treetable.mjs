function textLength(a,b){
    a = a.title.toString().length;
    b = b.title.toString().length;
    return a>b?1:(a<b?-1:0);
}

const {formatTS,  formatTIF, formatMessageType,formatDescription,formatMessageTypeCSS} =  await import('./weiui_formatters.mjs');

const {DEFAULT_COLUMNS, DEFAULT_COLUMNS_CONFIG} =  await import('./weiui_defaults.mjs');

function createTreeTable({id}){

    let calculated_display_fields =  DEFAULT_COLUMNS;
    let calculated_display_fields_config =[];
    try {
        if (webix.storage.local.get("display_fields")) {
            calculated_display_fields = webix.storage.local.get("display_fields").map(e=>e.value)
        }
       // console.log(calculated_display_fields);
        calculated_display_fields_config = calculated_display_fields.map( fieldname => {
          let col_config = DEFAULT_COLUMNS_CONFIG.find(f => f.id === fieldname);
          if (col_config === undefined){
              return { id:fieldname, header:fieldname, width:100}
          }else{
              return {...col_config};
          }

        });
    }catch(e){}





 // alert( window.hasOwnProperty('_'));

    return   {
        view:"treetable",
        id: id,  // "grida",
        scroll:"xy",
         leftSplit:2,
        border: true,
       // autoheight:true,
      //  minHeight:500,
        fillSpace:true,
        resizeColumn:true,
       // rowLineHeight:23,
        css:"webix_header_border webix_data_border",
        select:"row",
        hover: "myhover",
        columns: [ ...[
            {

                id:"id",
                header:"id" ,
                //fillspace:false,
                sort:'int',
                width:50,

                template:function(obj, common){
                    //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                    //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                    if (obj.$group) return common.treetable(obj, common) + obj.value;
                    return obj.id;
                }

            },
            {
                id:"MessageType", header:"MessageType", fillspace:false,
                format: formatDescription,
                cssFormat: formatMessageTypeCSS,
                sort:'string',
                width:200,

                template:function(obj, common){
                    //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                    if (obj.$group) return '';
                    return obj.MessageType || obj.PacketType;
                }
            } ], ...calculated_display_fields_config,...[{ fillspace:true }]
            //... DEFAULT_COLUMNS_CONFIG

            /**
            { id:"Timestamp", header:"Timestamp", width:350,    sort:"string" , format: formatTS},
            { id:"OrderToken", header:"OrderToken", width:100,    sort:"string" },
            { id:"OrderbookId", header:"OrderbookId", width:100},
            { id:"Price", header:"Price", width:100},
            { id:"Quantity", header:"Quantity", width:100},

            { id:"TimeinForce", header:"TimeinForce", width:100, format: formatTIF},
            { id:"OrderNumber", header:"OrderNumber", width:220},
            { id:"ExistingOrderToken", header:"ExistingOrderToken", width:150},
            { id:"ReplacementOrderToken", header:"ReplacementOrderToken", width:150},
            { id:"PreviousOrderToken", header:"PreviousOrderToken", width:150},

            { id:"OrderState", header:"OrderState", width:100},
            { id:"ClientReference", header:"ClientReference", width:100},
            { id:"BuySellIndicator", header:"BuySellIndicator", width:100},
            { id:"Group", header:"Group", width:100},
            { id:"OrderClassification", header:"OrderClassification", width:100},
            { id:"Capacity", header:"Capacity", width:100},
            { id:"FirmId", header:"FirmId", width:100},
**/

        ],
        on:{
            "data->onGroupCreated":function(id, value, data){


                this.getItem(id).value = "OrderToken# <u style='color:dodgerblue'>"+value+'</u>';
               // console.log(this.getItem(id).css);
                this.addRowCss(id,'highlight');


            }
        },


        data: [],// big_film_set
    };



}


function createTreeTable2({id}){

    return   {
        view:"treetable",
        id: id,  // "grida",
       // leftSplit:2,
        border: true,
        css:"webix_header_border webix_data_border",
        select:"row",
        columns:[
            {
                id:"id",
                header:"id" ,
                //fillspace:false,
                sort:'int',
                width:50,
                template:function(obj, common){
                    //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                    //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                    if (obj.$group) return common.treetable(obj, common) + obj.value;
                    return obj.id;
                }
            },
            {
                id:"MessageType", header:"MessageType", fillspace:false,

                width:500,
                sort:'string',
                template:function(obj, common){
                    //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                    if (obj.$group) return '';
                    return obj.MessageType || obj.PacketType;
                }
            },
            { id:"OrderToken", header:"OrderToken", width:100,    sort:"string"  },
            { id:"OrderbookId", header:"OrderbookId", width:100},
            { id:"OrderId", header:"OrderId", width:100},
            { id:"Price", header:"Price", width:100},
            { id:"Quantity", header:"Quantity", width:100},

            { id:"TimeInForce", header:"TimeInForce", width:100},
            { id:"year", header:"OrderId", width:100},
            { id:"year", header:"OrderId", width:100},
            { id:"year", header:"OrderId", width:100},
            { id:"year", header:"OrderId", width:100},
            { id:"year", header:"OrderId", width:100},
        ],
        on:{
            "data->onGroupCreated":function(id, value, data){
                this.getItem(id).value = "<div style='background-color: red'>OrderToken12# <u style='color:red'>"+value+'</u></div>';
               // console.log(this.getItem(id).css);
            }
        },

        scroll:"xy",
        data: [],// big_film_set
    };



}

export { createTreeTable };


/**
 function createTreeTable2({id}){


    return   {
        view:"treetable",
        id: id,  // "grida",
        leftSplit:2,
        border: true,
        select:"row",
        columns:[
            {
                id:"wLine", header:"Id", fillspace:false,
                width:50,
                template:function(obj, common){
                 //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                 //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                    if (obj.$group) return common.treetable(obj, common) + obj.value;
                    return obj.wLine;
                }
            },
            {
                id:"MessageType", header:"MessageType", fillspace:false,
                width:500,
                template:function(obj, common){
                 //   if (obj.$group) return common.treetable(obj, common) + obj.value;
                    if (obj.$group) return '';
                    return obj.MessageType || obj.PacketType;
                }
            },
            { id:"OrderToken", header:"OrderToken", width:100},
            { id:"OrderbookId", header:"OrderbookId", width:100},
            { id:"OrderId", header:"OrderId", width:100},
            { id:"Price", header:"Price", width:100},
            { id:"Quantity", header:"Quantity", width:100},

            { id:"TimeInForce", header:"TimeInForce", width:100},
            { id:"year", header:"OrderId", width:100},
            { id:"year", header:"OrderId", width:100},
            { id:"year", header:"OrderId", width:100},
            { id:"year", header:"OrderId", width:100},
            { id:"year", header:"OrderId", width:100},
        ],
        on:{
            "data->onGroupCreated":function(id, value, data){
                this.getItem(id).value = "OrderToken: <u style='color:dodgerblue'>"+value+'</u>';
                console.log(this.getItem(id).css);
            }
        },

        scroll:"xy",
        data: [],// big_film_set
    };



}
 /**
 function createTreeTable(){
    return { view:"treetable",
        css:"webix_header_border webix_data_border",
        leftSplit:1,
        border: true,
        columns:[
            { id:"OrderToken",template:function(obj, common){ if (obj.a) return common.treetable(obj, common) + obj.a; else return ""; }},
            { id:"D",
                // format: (value,a,b)=>{return '<p style="margin-left:0;padding-left:0" class="bg-info px-0">'+value+'</p>' },

                cssFormat: mark_votes
            },
            { id:"c"},
            { id:"d"},
            { id:"e"},
            { id:"f"},
            { id:"g"},
            { id:"h"}
        ],

        // autoheight: true,

        minHeight:400,
        //maxHeight: 800,
        columnWidth:200,
        hover:"myhover",
        select:"row",
        data:[



            { a:"OrdToken11122eeeee3", open:1, data:[
                    {  c:100, d:200, e: 220, f:2222, g:22222, h: Date.now(),b:"Ok123",} ,
                    { b:"Citrical", c:100, d:200, e: 220, f:2222, g:22222, h: Date.now()} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222, h: Date.now()} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222, h: Date.now()} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222, h: Date.now()} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222, h: Date.now()}
                ]},



            { a:"BGP", open:1, data:[
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222}

                ]},


            { a:"WAN PORT", open:1, data:[
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222}
                ]},

            { a:"X-Connect", open:1, data:[
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222}
                ]},

            { a:"OrdToken11122", open:1, data:[
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222} ,
                    { b:"Ok", c:100, d:200, e: 220, f:2222, g:22222}
                ]},

        ]}
}
 **/

