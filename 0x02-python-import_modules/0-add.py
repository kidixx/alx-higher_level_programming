#!/usr/bin/python3

"""
File_name: 0-add.py
Created: 8th of june, 2023
Auth: imo prince
Size: undefined
Project: 0x02-python-import_modules
Status: submitted.
"""
if __name__ == '__main__':
    from add_0 import add
    a = 1
    b = 2
    print("{} + {} = {}".format(a, b, add(a, b)))
