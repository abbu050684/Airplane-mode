// Copyright (c) 2023, ali jafer and contributors
// For license information, please see license.txt

frappe.ui.form.on('AirplaneTicket', {
	refresh: function(frm) {
		frm.add_custom_button(__("Assign Flights"), function(){
			frappe.prompt(
				{
					fieldname:"flight",
					label:"Flight",
					fieldtype:"Link",
					options:"Airplane Flight",
					
				},
				function(values) {
					frm.set_value("flight", values.flight);
				},
				"select Flight"
			);
		}, __("Flights"));

	}
});