function createTextArea({id}){
    return {
        rows: [
            {
                view: "textarea",
                id: id , //"textarea_rawinput",
                autoHeight: true,
                minHeight: 200,
                maxHeight: 200,
                value: ''
            },
            {
                view: "toolbar",
                height: 40,
                cols: [
                    {gravity: 0},
                    {
                        id: 'parseButton',
                        view: "button",
                        type: "icon",
                        icon: "mdi mdi-redo",
                        label: "Parse & Group Them !!"
                    },
                    {
                        id: 'clearButton',
                        view: "button",
                        type: "icon",
                        icon: "wxi-trash",
                        label: "Clear"
                    },
                ]
            }
        ]
    }
}

export {createTextArea};