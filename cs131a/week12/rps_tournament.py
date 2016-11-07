#!/usr/local/bin/python3
# Name: DPutnam
# File: rps_tournament.py
# Desc: Determine winner of Rock-paper-scissors tournament
#       Dependencies: module rps_game_winner.py


#  IMPORT rps_game_winner() and the two custom exceptions here

from rps_game_winner import *


def flatten_list(alist):
    """Flatten list for use in rps_tournament()"""
    if isinstance(alist,list) and not isinstance(alist[0],list) and len(alist) > 0:
        return alist
    else:
        a = []
        for i in alist:
            if isinstance(i,list):
                a = a + i
            else:
                a.append(i)
        return flatten_list(a)

# ADD YOUR TWO EXCEPTIONS HERE <---------------------
# ADD YOUR rps_game_winner() FUNCTION HERE <--------

def flatten_list(alist):
    if isinstance(alist,list) and not isinstance(alist[0],list) and len(alist) > 0:
        return alist
    else:
        a = []
        for i in alist:
            if isinstance(i,list):
                a = a + i
            else:
                a.append(i)
        return flatten_list(a)

def rps_tournament(games):
    l = flatten_list(games)
    if len(l) == 2 and not isinstance(l[1],list):
        return l
    games = [l[i:i+2] for i in range(0,len(l), 2)]
    winners = []
    for i in range(0,len(games),2):
        winners.append(rps_game_winner(games[i:i+2]))
#    print("\nWinners of each round\n",'-' * 30, '\n',winners)
    return rps_tournament(winners)

eightman = [
  [['p1','R'],['p2','S']], 
  [['p1','R'],['p2','P']], 
  [['p1','R'],['p2','S']], 
  [['p1','R'],['p2','R']], 
  [['p1','P'],['p2','S']], [['p1','R'],['p2','S']], [['p1','S'],['p2','S']], [['p1','P'],['p2','S']]]

thirty_two_games = [ [ [['p1','R'],['p2','S']], [['p3','R'],['p4','P']],
                      [['p5','R'],['p6','S']], [['p7','R'],['p8','R']],
                      [['p9','P'],['p10','S']], [['p11','R'],['p12','S']],
                      [['p13','S'],['p14','S']], [['p15','P'],['p16','S']]], [
                          [['p17','R'],['p18','S']], [['p19','R'],['p20','P']],
                      [['p21','R'],['p22','S']], [['p23','R'],['p24','R']],
                          [['p25','P'],['p26','S']], [['p27','R'],['p28','S']],
                      [['p29','S'],['p30','S']], [['p31','P'],['p32','S']]], [
                          [['p33','R'],['p35','S']], [['p35','P'],['p36','S']],
                      [['p37','R'],['p38','S']], [['p39','R'],['40','R']],
                          [['p41','P'],['p42','S']], [['p43','R'],['p44','S']],
                      [['p45','S'],['p46','S']], [['p47','P'],['p48','S']]], [
                          [['p49','R'],['p50','S']], [['p51','R'],['p52','P']],
                      [['p53','R'],['p54','S']], [['p55','R'],['p56','R']],
                          [['p57','P'],['p58','S']], [['p59','R'],['p60','S']],
                      [['p61','S'],['p62','S']], [['p63','P'],['p64','S']]] ]


match = [['Armando','P'],['Dave','R']]
games = [ [[["Armando", "P"], ["Dave", "S"] ], [ ["Richard", "R"], ["Michael", "S"]],], [[["Allen", "S"], ["Omer", "P"] ], [ ["David E.", "R"], ["Richard X.", "P"]]] ]
wrong_number_of_players = [['Armando','P'],['Dave','R'],['bill','R']]
no_such_strategy = [['Armando','P'],['Dave',':']]

# RUNNING TESTS
for i in [match, games, eightman, thirty_two_games, wrong_number_of_players, no_such_strategy]:
    print('-' * 60)
    try:
        print(rps_tournament(i))
    except Exception as a:
        print(a)
print('-' * 60)