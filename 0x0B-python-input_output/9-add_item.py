#!/usr/bin/python3
import json
import sys

save_to_json_file = __import__('7-save_to_json_file').save_to_json_file

load_from_json_file = __import__('8-load_from_json_file').load_from_json_file

try:
    the_list = load_from_json_file("add_item.json")
except:
    the_list = []

for i in range(len(sys.argv)):
    if i > 0:
        the_list.append(sys.argv[i])
save_to_json_file(the_list, "add_item.json")
