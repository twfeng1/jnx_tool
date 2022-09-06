function createHeader(wTitle){ return { type:"header", template:wTitle, css:"webix_dark" } }

function createDivider(){ return  { view:"resizer"} }

function createTemplate_MessageBreakDown({id, height}){
    return     { scroll:'xy', id:id , height:height , template:'<div align="left" id="element">...</div>',
    //    css: 'template_msg_breakdown'
    }
}

function createButton({id, value, disabled=false}) {
   return { view: "button", id: id, width: 200, value: value, disabled: disabled }
}


async function buildUI() {
        const { setupListeners } =  await import('./weiui_listeners.mjs');
        const _ = await import('./lodash.js');
        const {createTreeTable} =  await import('./weiui_treetable.mjs');
        const {createOrderList,createList} =  await import('./weiui_list.mjs');
        const {createPropertySheet} =  await import('./weiui_propertysheet.mjs');
        const {createDataTable_BreakDown,createDataTable_FieldDef} =  await import('./weiui_datatable.mjs');
        const {createTextArea} = await import('./weiui_textarea.mjs');
        const {samples} =  await import('./weiui_samples.mjs');
    const {createCustomizeColumnForm} =  await import('./weiui_customizecolumnform.mjs');


        webix.message.position = "bottom";
        webix.ui(
            {
                cols: [
                    {
                        rows: [
                            {
                                rows: [
                                    { cols :[
                                        createHeader('WeiFeng\'s Japannext OUCH Message Parser'),
                                            { id: "BTN_LOGOUT", view:"button", width:100,  type:"icon", icon:"wxi-close-circle", label:"Logout" }

                                        ]},

                                    {
                                        cols: [
                                            createTextArea({id:'textarea_rawinput'}),
                                            createDivider(),
                                            {
                                                rows: [
                                                    {
                                                        template: "History - Last 10 input :",
                                                        width: 200,
                                                        height: 40,
                                                        disabled: true,
                                                        type: "clean"
                                                    },
                                                    createList({id: 'list_history'})
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            createDivider(),

                            {
                                cols: [

                                    createOrderList({id: 'list_orderids', title: 'Order List'}),

                                    createDivider(),
                                    {
                                        rows: [
                                            {
                                                cols: [
                                                    createHeader('Message Groups'),
                                                    createButton({id:'BUTTON_ADD_COLUMNS',value:'Add Columns To Table',disabled:false}),
                                                    createButton({id:'BUTTON_ARRANGE_BY_ORDTOKEN',value:'Arrange by OrderToken'}),
                                                    createButton({id:'BUTTON_ARRANGE_BY_ID',value:'Arrange By Original Seq'}),
                                                ]
                                            },
                                            createTreeTable({id: 'grida'})]
                                    },
                                ]
                            },
                            createDivider(),
                            {
                                rows: [ {template: "", height: 5, type: "clean"} ]
                            },
                        ]
                    },
                    createDivider(),
                    {
                        rows: [
                            createHeader('Raw Message'),
                            createTemplate_MessageBreakDown({id: 'template_rawmsg', height: 100}),
                            createDivider(),
                            createDataTable_BreakDown({id: 'table_breakdown'}),
                            createDivider(),
                            createDataTable_FieldDef({id: 'table_field_def'})
                            // createPropertySheet('property_sheet_breakdown')
                        ]
                    }
                ]
            }
        );


    webix.ui(createCustomizeColumnForm({ id: 'customize_column_form'}));
        //$$('textarea_rawinput').setValue(samples.map(e=>JSON.stringify(e)+'\n').join(''));
        $$('textarea_rawinput').setValue(samples.map(e=>(e)+'\n').join(''));
        setupListeners();
}

async function main()
{
     // console.log(webix.storage.session.get('auth_user'))

    if (![null,undefined].includes(webix.storage.session.get('auth_user'))){
       buildUI();
    }else {
        const {createWindowAuthForm} = await import('./weiui_windowauthform.mjs');
        webix.ui(createWindowAuthForm({id: 'auth_form'}));
        $$('auth_form').show();
    }
  //

    //  const {createCustomizeColumnForm} = await import('./weiui_customizecolumnform.mjs');
   // webix.ui(createCustomizeColumnForm({id: 'customize_column_form'}));
    //$$('customize_column_form').show();
}

main();



//buildUI();


