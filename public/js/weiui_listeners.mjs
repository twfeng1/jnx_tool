async function setupListeners() {

    const element_ids = ['table_field_def', 'template_rawmsg', 'table_breakdown', 'list_orderids_search', 'textarea_rawinput', 'list_orderids', 'parseButton', 'clearButton', 'BUTTON_ARRANGE_BY_ORDTOKEN', 'BUTTON_ARRANGE_BY_ID'];

    const events = ['onSelectChange', 'onItemClick'];

    const {groupBy_ouch_order_token} = await import('./grouper.mjs');
    const {samples} = await import('./weiui_samples.mjs');
    const  {jnx_field_definitions}= await import('./weiui_jnx_field_definitions.mjs');

    $$("table_breakdown").attachEvent("onSelectChange", function () {
        $$('table_breakdown').getSelectedItem(true).forEach(e => {

            let table_data = [
                {Name: 'Name', Value: e.Name},
                {Name: 'Description', Value: _.get(jnx_field_definitions,[e.Name,'description'])},
                {Name: 'Length(Bytes)', Value: _.get(jnx_field_definitions,[e.Name,'len'])},

                {Name: 'Valid Values : ', Value: '---------------------'},
            ];

            Object.entries(jnx_field_definitions[e.Name].validValues).forEach(
                ([k1,v1])=>{
                    table_data.push({Name:k1,Value:v1});
                }
            )
            $$('table_field_def').parse(table_data, 'json', true);

        })

    });

    $$("list_orderids_search").attachEvent("onTimedKeyPress", function () {
        //get user input value
        var value = this.getValue().toLowerCase();
        $$("list_orderids").filter(function (obj) {
            return (obj.OrderToken + '').indexOf(value) != -1;
        })
    });


    $$('list_orderids').attachEvent("onSelectChange", () => {

        $$('list_orderids').getSelectedItem(true).forEach(e => {
            $$('grida').filter("#wRootOrder#", e.OrderToken);
            gby();
        })
        // alert(selected);

    });

    $$("clearButton").attachEvent("onItemClick", () => {
        $$('textarea_rawinput').setValue('')
    })

    $$("grida").attachEvent("onSelectChange", () => {
        $$('grida').getSelectedItem(true).forEach(e => {

            let filter_obj = _.pickBy(e, (value, key) => {
                return (!_.startsWith(key, 'w') && !_.startsWith(key, '$') && !_.startsWith(key, 'id'));

            })
            //console.log(filter_obj);

            let table_data = Object.entries(filter_obj).map(([key, val]) => {
                return {Name: key, Value: val, Desc: 'wei', Hex: '00'}
            })
            //  console.log(table_data);

            $$('table_breakdown').parse(table_data, 'json', true);

           // $$('template_rawmsg').setHTML(JSON.stringify(filter_obj, null, 4));
            BigInt.prototype.toJSON = function (){ this.toString()}
            $$('template_rawmsg').setHTML(e.wRaw+ '<HR>'+ JSON.stringify(filter_obj));

        })

    })

    $$("parseButton").attachEvent("onItemClick", () => {
        let parsed_messages =
            groupBy_ouch_order_token(
                $$('textarea_rawinput').getValue().trim()
                    .split('\n')
                    .reduce((result, line) => {
                        try {
                           let parsed_msg = parseOUCHBuffer(Buffer.from(line,'hex'))
                            if (Object.keys(parsed_msg).length>0) {
                                parsed_msg.wRaw = line;
                                result.push(parsed_msg);
                            }

                            return result;
                        } catch (e) {
                            return result;
                        }
                    }, [])
            );

        $$("grida").parse(parsed_messages, 'json', true)

        let ordertokens_list = _.uniq(parsed_messages.map(e => e.wRootOrder)).filter(e => {
            return e !== undefined
        })
            .map((e, idx) => {
                return {id: idx + 1, OrderToken: e}
            });

        $$('list_orderids_header').setHTML('Order List ( ' + '<b>' + (ordertokens_list.length) + '</b>' + ' )');

        $$('list_orderids').parse(ordertokens_list, 'json', true);


    })

    const button_ids = ['BUTTON_ADD_COLUMNS','BUTTON_ARRANGE_BY_ORDTOKEN','BUTTON_ARRANGE_BY_ID'];


    $$("BUTTON_ARRANGE_BY_ORDTOKEN").attachEvent("onItemClick", ()=>{ groupByToken()} )
    $$("BUTTON_ARRANGE_BY_ID").attachEvent("onItemClick", ()=>{ ungroup()} )

    $$("BUTTON_ADD_COLUMNS").attachEvent("onItemClick", ()=>{
         $$("customize_column_form").show();
    } )


    $$("BTN_LOGOUT").attachEvent("onItemClick", ()=>{
        webix.storage.session.remove('auth_user');
        window.location.reload(true);

    } )

}


function groupByToken(){
    // $$("grida").ungroup();
    $$("grida").group({
        by: "wRootOrder", // "year",
        footer:{
            //   votes:["votes", "sum"],
            //   row:function(obj ){ return "<span style='float:right;'>Total: "+webix.i18n.numberFormat(obj.votes)+"</span>"; }
            row: function(obj){ }
        },
        row:"id"
    });
    $$("grida").openAll();
}


function ungroup(){
    $$("grida").ungroup();
    $$("grida").sort('id','asc','int');
}

export { setupListeners }