
function createOrderList( {id ,title}) {
    return {
        rows:[
           { id: id+'_header' ,type:"header", template:title, css:"webix_dark" },
            {
                width:150,
               // height: 50,
                view: "toolbar",
                rows: [
                   // {template: "<br><b>Filter List: <b>", height: 40, type: "clean"},
                  //  {view: "text", id: id+'_search'}
                    { view:"search", align:"center", placeholder:"Search ...", id:id+'_search', width:300 },
                ]
            },
            {
                view: "list",
               // autoheight:true,
                id: id,
                template: "#id#. #OrderToken#",
                select: true,
                data: []
            }
        ]
    }
}

function createList( {id }) {
    return {
        rows:[

            {
                view: "list",
                id: id,
                template: "#id#. #OrderToken#",
                select: true,
                data: []
            }
        ]
    }
}


function createList2( {id }){
    return {
        rows : [
            {template:"<br><b>Filter the unitlist by a movie title</b>", type: "clean", height: 40},
            { id: id, view: "list", select: true, template: "#id#. #OrderToken#"}
            ]
    }
}

export { createList,createOrderList };