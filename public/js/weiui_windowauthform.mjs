async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}

function createForm({ id }){


    const click_handler=  async (btn_id,event)=>{


        let validate_result = $$(btn_id).getParentView().validate();  // $$('form1').validate();
        if (validate_result) {
            // console.log('truevalidate_result');
            let msg= $$( id+ 'text_user').getValue() + $$(id + 'text_pw').getValue();
            // console.log(msg);
            let hash = await digestMessage(msg);
            let url = './hashes/'+hash;
             let auth_response = await fetch(url, {method: 'HEAD',timeout:5000 })
           if(auth_response.ok){
                webix.message('Login successful...', 'success')
                $$('auth_form').hide();
               webix.storage.session.put("auth_user", $$( id+ 'text_user').getValue());
                buildUI();
            }else{
                webix.message("wrong pass/userid!!", 'error');
            }
        }
    }

    return {
        view:"form", id: id+'_form', scroll:false, width:400,
        elements: [
            { view:"text", label:'User', name:"user" , id : id+'text_user' },
            { view:"text", type:'password' ,label:'Passwd', name:"password",  id : id+'text_pw' },
            {
                id: id+'button_login',view:"button", value: "Submit" , click:  click_handler, hotkey: "enter"



            }
        ],
        rules:{

            "user":webix.rules.isNotEmpty,
            "password":webix.rules.isNotEmpty
        },

        elementsConfig:{
            labelPosition:"left"
        },
        on:{
            onValidationError:function(key, obj){},

        }


    }
}




    function createWindowAuthForm({id}){

       let form ={
            view:"window",
            id: id,
//  height:550,
//  width:800,
            // left:100,
            // top:50,
            position:"center",
            modal:true,
            move:true,
            resize: true,
            head:"Password Protected Site",
            body: createForm({id: id})
        }
        return form;
}


async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}

export { createWindowAuthForm };