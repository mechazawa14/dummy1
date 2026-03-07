from collections import deque

start = (1,2,3,4,0,6,7,5,8)
goal = (1,2,3,4,5,6,7,8,0)

moves = [-3,3,-1,1]

q = deque([start])
visited = set()

while q:
    s = q.popleft()
    
    if s == goal:
        print("Goal reached:", s)
        break
    
    visited.add(s)
    z = s.index(0)
    
    for m in moves:
        nz = z + m
        if 0 <= nz < 9:
            l = list(s)
            l[z],l[nz] = l[nz],l[z]
            ns = tuple(l)
            if ns not in visited:
                q.append(ns)
