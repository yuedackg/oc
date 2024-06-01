import numpy as np

def generate_maze(size):
	maze = np.zeros((size, size), dtype=int)
	# 壁をランダムに配置
	for _ in range(size * size // 3):
		x, y = np.random.randint(0, size, 2)
		maze[x, y] = 1	
	# スタートとゴールを設定
	maze[0, 0] = 2
	maze[-1, -1] = 3
	return maze

maze = generate_maze(10)
print(maze)
