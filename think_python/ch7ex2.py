def eval_loop():
    result = "No prior expression evaluated."
    while True:
        string = str(input("Enter an expression to evaluate or 'done' if finished: "))
        if string == 'done':
            print(result)
            break
        else:
            result = eval(string)
            print(result)

if __name__ == '__main__':
	eval_loop()