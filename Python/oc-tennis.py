from tkinter import *

ball = {
	"dirx": 15,
	"diry": -15,
	"x": 350,
	"y": 300,
	"w": 15,
}

win = Tk()
cv = Canvas(win, width=600, height=400)
cv.pack()

def draw_objects():
	cv.delete('all')
	cv.create_oval(
	ball["x"] - ball["w"], ball["y"] - ball["w"],
	ball["x"] + ball["w"], ball["y"] + ball["w"],
	fill="green")

def move_ball():
	bx = ball["x"] + ball["dirx"] /3 
	by = ball["y"] + ball["diry"] /3
	if bx < 0 or bx > 600:
		ball["dirx"] *= -1
	if by < 0 or by > 400:
		ball["diry"] *= -1
	if 0 <= bx <= 600:
		ball["x"] = bx
	if 0 <= by <= 400:
		ball["y"] = by

def game_loop():
	draw_objects()
	move_ball()
	win.after(10, game_loop)


def keyevent( e):
	key = e.keysym
	if key == "Up":
		ball["diry"] *= -1

win.bind( "<KeyPress>", keyevent)
game_loop()
win.mainloop()