from collections import deque

capA = 4
capB = 3
goal = 2

def water_jug():
    
    visited = set()
    queue = deque([(0,0)])

    while queue:
        
        a,b = queue.popleft()
        
        if a == goal or b == goal:
            print("Goal reached:", (a,b))
            return
            
        if (a,b) in visited:
            continue
        
        visited.add((a,b))
        
        queue.append((capA,b))
        queue.append((a,capB))
        queue.append((0,b))
        queue.append((a,0))
        
        pour = min(a, capB-b)
        queue.append((a-pour, b+pour))
        
        pour = min(b, capA-a)
        queue.append((a+pour, b-pour))

water_jug()
