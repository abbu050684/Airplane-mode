# Copyright (c) 2023, ali jafer and contributors
# For license information, please see license.txt

import frappe
import string
from frappe.website.website_generator import WebsiteGenerator

class AirplaneTicket(WebsiteGenerator):
	def before_save(self):
		add_ons =self.add_ons
		total_add_on_amount=0
		for item in add_ons:
			total_add_on_amount += item.amount
			self.total_add_on_amount = total_add_on_amount
			self.total_amount = self.flight_price + self.total_add_on_amount


    
def validate(self):
        if not self.seat:
            self.seat = self.generate_seat()
def generate_seat(self):
        random_integer = random.randint(10, 99)  # Random integer between 10 and 99
        random_alphabet = random.choice(string.ascii_uppercase[:5])  # Random capital alphabet from A to E
        return f"{random_integer}{random_alphabet}"		
	
