
/**
const ALL_FIELDS = [
    {id:'1',value:'1a' },
    {id:'2',value:'2a' },
    {id:'3',value:'3a' },
    {id:'4',value:'4a' },
    {id:'5',value:'5a' },
]
 **/

import {jnx_field_definitions} from './weiui_jnx_field_definitions.mjs';
import {DEFAULT_COLUMNS}  from "./weiui_defaults.mjs";

const ALL_FIELDS = Object.keys(jnx_field_definitions).map(e=>{return { value:e }})
const DEFAULT_FIELDS = (DEFAULT_COLUMNS).map(e=>{return { value:e }})

    function  createCustomizeColumnForm({id}){


    let  display_fields_cache= [];
    if (webix.storage.local.get("display_fields")) {
        display_fields_cache = webix.storage.local.get("display_fields")
            webix.message('Loading display columns from previously saved preferences')
    } else{
        display_fields_cache = DEFAULT_FIELDS;
        webix.message('Loading default display columns')
    } //;


    let form ={
        view:"window",
        id: id,
        height:950,
        width:800,
        // left:100,
        // top:50,
        position:"top",//"center",
        modal:true,
        move:true,
        point:true,
        close:true,
        resize: true,
        head:"Customize Display Columns ( Drag n' Drop)  ",
        body: createDoubleList()
    }
    return form;


    function createSubList({sid,data}){
        return {
            view:"list", id: sid,
            select:true,
            height:750,
            scroll:true,
            multiselect:true  ,
            drag:true,
            data: data
        }
    }

    function createDoubleList(){
        return {
            rows:[
                {cols:[
                        {
                            rows:[
                                {template:"Field List", type:"header", align:'center', borderless:false,
                                    css:"webix_dark"
                                },
                                createSubList({ sid:id+'all_fields', data:
                                  ALL_FIELDS.filter(e=>{ return ! DEFAULT_FIELDS.map(f=>f.value).includes( e.value) })

                                })
                            ]
                        },
                        // {view:'resizer'},
                        {width:10}  ,
                        { rows:[
                                // {height:200},
                                { view:"button", label:"<==>", width:50, border:true , position:'center'},
                                {}
                            ]},
                        {width:10}  ,
                        {
                            rows:[
                                {template:"Display Columns In Table", type:"header", borderless:false ,css:"webix_dark"},
                                createSubList( { sid: id+'display_fields', data:display_fields_cache})
                            ]}





                    ]},


                {cols:[
                        { view:"button", label:"Reset Default", click : onResetClick},
                        { view:"button", label:"Cancel", click:onCancelClick},
                        { view:"button", label:"Save", click:onSaveClick},
                    ]}

            ]
        }
    }


    function onCancelClick(){
        webix.message('cancel');
        $$(id).hide();


    }

    function onSaveClick(){

        //  console.log( $$(id+'all_fields').serialize());
        //   console.log( $$(id+'display_fields').serialize());
        let serialized_cols = $$(id+'display_fields').serialize().map(e=>{return {id:e.id,value:e.value}})
        webix.storage.local.put("display_fields", serialized_cols);
        webix.message('Display preference saved, column count : ' + serialized_cols.length +'| Will take effect upon page refresh' );
        $$(id).hide();
    }


    function onResetClick(){

        const REMAINING_FIELDS = ALL_FIELDS.filter(e=>{ return ! DEFAULT_FIELDS.map(f=>f.value).includes( e.value) })

        $$(id+'all_fields').parse(REMAINING_FIELDS,'json',true);
        $$(id+'display_fields').parse(DEFAULT_FIELDS,'json',true);


    }


}

export {createCustomizeColumnForm}

//webix.ui(createAddColumnForm({id: 'auth_form'}));
//$$('auth_form').show();
