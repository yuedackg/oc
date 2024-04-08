import tkinter as tk
import random
def click_btn():
    Mojisize = random.randint(20,70)
    label["font"] = ('System', Mojisize)
    red = random.randint(0,255)
    green = random.randint(0,255)
    blue = random.randint(0,255)
    label["foreground"] = "#%02x%02x%02x" % (red,green,blue)
    root.after(200,click_btn)
root = tk.Tk()
root.title("リンゴ")
root.geometry("500x500")
label = tk.Label(root,text="★",font=('System', 70),bg="gold",foreground="red")
label.place(x = 100, y=100)
button = tk.Button(root,text='クリックすると・・・',font=('Syetem', 24),command=click_btn)
button.place(x=100, y=300)
root.mainloop()

