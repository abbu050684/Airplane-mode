// Copyright (c) 2023, ali jafer and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airplane', {
	refresh: function(frm) {
		frm.add_custom_button("create airplane", () => {
			let dialog =new frappe.ui.dialog({
				title:"Airplane",
				fields :[
					{
						fieldtype:"link",
						fieldname:"airline",
						label:"Airline",
						option:"Airline",
					},
				],
				primary_action_label:"create airplane",
				primary_action:(data) => {
					console.log(data);
					let {airplane} =data;
					
					frappe.new_doc("Airplane", {
						airplane:frm.doc.airplane,
						airplane:airplane,
					});
				},
			});
			dialog.show();
		});
	},

});
