const {formatTS,  formatTIF, formatMessageType,formatDescription,formatMessageTypeCSS} =  await import('./weiui_formatters.mjs');

const DEFAULT_COLUMNS = [
"Timestamp",
  "OrderbookId",
"BuySellIndicator",
  "Price",
"Quantity",
  "OrderToken",
 "ExistingOrderToken",
"ReplacementOrderToken",
"PreviousOrderToken",
"TimeinForce",
"OrderNumber",

"OrderState",
"ClientReference",

"Group",
"OrderClassification",
"Capacity",
"FirmId",
];



const DEFAULT_COLUMNS_CONFIG = [
{ id:"Timestamp", header:"Timestamp", width:350,    sort:"string" , format: formatTS},
{ id:"OrderToken", header:"OrderToken", width:100,    sort:"string" },
{ id:"OrderbookId", header:"OrderbookId", width:100},
{ id:"Price", header:"Price", width:100},
{ id:"Quantity", header:"Quantity", width:100},

{ id:"TimeinForce", header:"TimeinForce", width:110, format: formatTIF},
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
]


export {DEFAULT_COLUMNS,DEFAULT_COLUMNS_CONFIG}
