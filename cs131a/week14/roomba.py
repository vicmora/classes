# John Guttag, Eric Grimson, 6.00 Introduction to Computer Science
# Massachusetts Institute of Technology: MIT OpenCouseWare),
# http://ocw.mit.edu (Accessed [Date]). 
# License: Creative Commons BY-NC-SA
# 
import math, random, pylab
class Location(object):
    def __init__(self, x, y):
        self.x = float(x)
        self.y = float(y)
    def move(self, xc, yc):
        return Location(self.x+float(xc), self.y+float(yc))
    def getCoords(self):
        return self.x, self.y
    def getDist(self, other):
        ox, oy = other.getCoords()
        xDist = self.x - ox
        yDist = self.y - oy
        return math.sqrt(xDist**2 + yDist**2)
class CompassPt(object):
    possibles = ('N', 'S', 'E', 'W')
    def __init__(self, pt):
        if pt in self.possibles: self.pt = pt
        else: raise ValueError('in CompassPt.__init__')
    def move(self, dist):
        if self.pt == 'N': return (0, dist)
        elif self.pt == 'S': return (0, -dist)
        elif self.pt == 'E': return (dist, 0)
        elif self.pt == 'W': return (-dist, 0)
        else: raise ValueError('in CompassPt.move')
class Field(object):
    def __init__(self, roomba, loc):
        self.roomba = roomba
        self.loc = loc
    def move(self, cp, dist):
        oldLoc = self.loc
        xc, yc = cp.move(dist)
        self.loc = oldLoc.move(xc, yc)
    def getLoc(self):
        return self.loc
    def getRoomba(self):
        return self.roomba
class Roomba(object):
    def __init__(self, name):
        self.name = name
    def move(self, field, time = 1):
        if field.getRoomba() != self:
            raise ValueError('Roomba.move called with roomba not in field')
        for i in range(time):
            pt = CompassPt(random.choice(CompassPt.possibles))
            field.move(pt, 1)

#####################################################################
# FINISH THIS FUNCTION
#####################################################################


def performTrial(time, f):
    """performTrial() takes two arguments: time in seconds and a Pylab Field object."""
    start = f.getLoc()
    xcoords = []
    ycoords = []
    # TODO
    for t in range(1, time + 1):
        # TODO
        f.getRoomba().move(f)
        newLoc = f.getLoc()
        x, y = newLoc.getCoords()
        xcoords.append(x)
        ycoords.append(y)
    return xcoords, ycoords

#####################################################################
# END 
#####################################################################

roomba = Roomba('Roombie')
for i in range(1):
    f = Field(roomba, Location(0, 0))

    # Get the x,y coordinates tuple of lists
    coords = performTrial(500, f) 

    # Feed the x,y lists to pylab.plot
    pylab.plot(coords[0],coords[1],marker='^',linestyle=':',color='red')

pylab.title('Roombie\'s Adventure')
pylab.xlabel('time')
pylab.ylabel('distance from origin')
pylab.show()