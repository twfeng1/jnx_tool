function createHeader(wTitle){
    return { type:"header", template:wTitle, css:"webix_dark" }
}

function createDataTable_BreakDown({id}) {
    return {

        rows: [
            createHeader('Message Breakdown'),
            {
       id: id,
       css:"webix_header_border webix_data_border",
        resizeColumn:true,
        width:600,
       scroll:'xy',
       select: 'row',
                minHeight: 300,
        view:"datatable",
            columns:
        [
            {id: "Name", header: "Name", css: "rank", width: 250, sort: "int"},
            {id: "Value", header: ["Value"], fillspace: true, sort: "string"},
       //     {id: "Desc", header: ["Desc"], width: 80, sort: "int", tooltip: ""},
       //     {id: "Hex", header: "Hex", width: 100, sort: "int"}
        ],
          //  autoheight : true,
          //  scrollX: false,
            data: [{Name:'-',Value:'-','Desc':'-','Hex':'-'}]

            }

     ]}
}

function createDataTable_FieldDef({id}) {
    return {

        rows: [
            createHeader('Field Definitions Dictionary '),
            {

                id: id,
                css:"webix_header_border webix_data_border",
                resizeColumn:true,
                width: 600,
                scroll: 'xy',
                select: 'row',
                minHeight: 100,
              //  autoheight:true,
                view: "datatable",
                columns:
                    [
                        {id: "Name", header: "Name", css: "rank", width: 150, sort: "string"},
                        {id: "Value", header: ["Value"], fillspace: true, sort: "string"},

                    ],
                //  autoheight : true,
                //  scrollX: false,
                data: [{Name: '-', Value: '-'}]
            }
        ]
    }
}

export {createDataTable_BreakDown,createDataTable_FieldDef}