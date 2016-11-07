#!/usr/local/bin/python
# NAME: Victor Mora
# FILE: rps_game_winner_test.py
# DATE: <2016-11-6 Thu>
# DESC: Function to pick winner of RPS games.

# IMPORT YOUR rps_game_winner(), NoSuchStrategyError, and WrongNumberOfPlayersError here
from rps_game_winner import *


def _main():
    """_main() is here for testing the code. _main() will
    be executed when we run this module as as standalone program.
    Try it, like this: python3 rps_game_winner.py
    """

    match = [['Jim', 'R'],['Jack','P']]
    bogus_match = ['Jim','R']
    bogus_strategy = [['Jim', 'x'],['Jack','P']]
    # Should print ['Jack', 'P']
    print("The winner is ", end='')

    # A known good match
    try:
        print(rps_game_winner(match))
    except:
        print("This test should not fail")

    # A known badly formed match
    try:
        rps_game_winner(bogus_match)
    except:
        print("That was a bogus match, dude: ", end="")
        print(bogus_match)

    # A known bad strategy
    try:
        rps_game_winner(bogus_strategy)
    except:
        print("That was a bogus strategy, dude: ", end='')
        print(bogus_strategy)

_main()