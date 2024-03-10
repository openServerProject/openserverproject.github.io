print("PyVOSWeb 1.2")
while True:
    i = input("> ")
    cm = i.split(" ^")
    com = cm[0].lower()
    arg = cm[1:]
    if com == "echo":
        print(arg[0])
    elif com == "web":
        print("Not Supported")
    elif com == "help":
        print("""------------------Help-----------------
echo ^TXT          Echo TXT
web ^URL           Open URL in web browser""")