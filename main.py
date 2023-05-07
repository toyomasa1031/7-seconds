start = 0

def on_button_pressed_a():
    global start
    start = input.running_time()
    basic.show_icon(IconNames.CHESSBOARD)
input.on_button_pressed(Button.A, on_button_pressed_a)

start = 0

def on_button_pressed_b():
    elapsed = input.running_time() -start
    score = abs(elapsed - 3000)
    basic.show_number(score)
input.on_button_pressed(Button.B, on_button_pressed_b)