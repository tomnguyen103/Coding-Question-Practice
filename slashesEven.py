from collections import defaultdict

def create_graph(matrix):
    graph = defaultdict(list)

    for i, row in enumerate(matrix):
        for j, col in enumerate(row):
            if matrix[i][j] == '/':
                graph[(i,j+1)].append((i+1,j))
                graph[(i+1,j)].append((i,j+1))
            elif matrix[i][j]== '\\':
                graph[(i,j)].append((i+1,j+1))
                graph[(i+1,j+1)].append((i,j))
    return graph

