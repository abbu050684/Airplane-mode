// Copyright (c) 2023, ali jafer and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airplane Ticket', {
	refresh: function(frm) {
		frm.add_custom_button(__("Assign Seat"), function(){
			frappe.prompt(
				{
					fieldname:"seat",
					label:"Seat Number",
					fieldtype:"Data",
					options:"",
					
				},
				function(values) {
					frm.set_value("seat", values.seat);
				},
				"Select Seat"
			);
		}, __("Actions"));

	}
});
