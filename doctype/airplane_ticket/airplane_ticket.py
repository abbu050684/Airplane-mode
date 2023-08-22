# Copyright (c) 2023, ali jafer and contributors
# For license information, please see license.txt

import frappe
import random
import string

from frappe.model.document import Document

class AirplaneTicket(Document):
	def before_save(self):
		add_ons = self.add_ons
		total_add_on_amount = 0
		for item in add_ons:
			total_add_on_amount += item.amount
		self.total_add_on_amount = total_add_on_amount
		self.total_amount = self.flight_price + self.total_add_on_amount


		flight = frappe.get_doc("Airplane", self.flight)
		airplane_capacity = flight.capacity
		existing_tickets = frappe.get_all("Airplane Ticket", filters={"flight": self.flight}, fields=["name"])
		if len(existing_tickets) >= airplane_capacity:
			frappe.throw("⚠️Cannot create a new ticket⚠️. ⚠️ The Flight is already FULL!!⚠️")


	def validate(self):
		if not self.seat:
			self.seat = self.generate_seat()

	def before_submit(self):
		if self.status != "Boarded":
			frappe.throw(" Change the Status To Board")

	def generate_seat(self):
		random_integer = random.randint(10, 99)
		random_alphabet = random.choice(string.ascii_uppercase[:5])
		return f"{random_integer}{random_alphabet}"
	


        
		


	


		
