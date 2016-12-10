#!/usr/bin/python
# Name: Victor Mora
# File: spam.py
# Desc: Your order

class Spam:

	total_cost = 0

	def __init__(self, name, cost):
		self._name = str(name)
		self._cost = float(cost)
		Spam.total_cost += self._cost

	@property
	def name(self):
		return self._name.title()

	@name.setter
	def name(self, new_name):
		self._name = new_name.upper()

	@property
	def cost(self):
		return self._cost * 20.39

	# cost in pesos
	@cost.setter
	def cost(self, new_cost):
		self._cost = cost / 20.39

	@classmethod
	def get_total_cost(cls):
		return Spam.total_cost

def _main():
	print("---- START ----")
	spam1 = Spam("Tacos", 5)
	spam2 = Spam("enchiladas", 7.0)
	spam3 = Spam("guAcamOlE", 3.49)


	print("Your order:")
	print(spam1.name)
	print(spam2.name)
	print(spam3.name)
	print("Total cost:")
	print("$"+str(Spam.get_total_cost()))

if __name__ == '__main__':
	_main()