// Copyright (c) 2023, ali jafer and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airport', {
	refresh: function(frm) {
		frm.add_custom_button
		let d = new frappe.ui.Dialog({
    title: 'Enter details',
    fields: [
        {
            label: 'Code',
            fieldname: 'code',
            fieldtype: 'Data'
        },
        {
            label: 'City',
            fieldname: 'city',
            fieldtype: 'Data'
        },
        {
            label: 'Country',
            fieldname: 'country',
            fieldtype: 'Data'
        }
    ],
    size: 'small', // small, large, extra-large 
    primary_action_label: 'Submit',
    primary_action(values) {
        console.log(values);
        d.hide();
    }
});

d.show();


	 }
});
