#!/usr/local/bin/python3
# Name:   Victor Mora
# Script: rps_game_winnder.py
# Desc:   A game of rock, paper, scissors
# Date:   11/6/2016
import sys

class WrongNumberOfPlayersError(Exception):
	pass

class NoSuchStrategyError(Exception):
	pass

def rps_game_winner(lst):
	try:
		if len(lst) < 2 or not isinstance(lst[1],list):
			raise(WrongNumberOfPlayersError("Wrong number of players. Must have two to play a match."))
		for l in lst:
			if l[1] not in ['R', 'P', 'S']:
				raise(NoSuchStrategyError("No such strategy -- must be P, R, or S."))
	except WrongNumberOfPlayersError as e:
		print(e)
	except NoSuchStrategyError as e:
		print(e)

	if lst[0] == lst[1]:
		winner = lst[0]
	elif lst[0][1] == 'R' and lst[1][1] == 'P':
		winner = lst[1]
	elif lst[0][1] == 'P' and lst[1][1] == 'S':
		winner = lst[1]
	elif lst[0][1] == 'S' and lst[1][1] == 'R':
		winner = lst[1]
	else:
		winner = lst[0]

	if len(winner) == 2 and not isinstance(winner[1], list):
		return winner