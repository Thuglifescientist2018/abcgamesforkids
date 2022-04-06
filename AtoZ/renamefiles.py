import os

# Absolute path of a file
old_name = r"E:\demos\files\reports\details.txt"
new_name = r"E:\demos\files\reports\new_details.txt"

# Renaming the file
os.rename(old_name, new_name)

s = "This be a string"
if s.find("is") == 1:
    print("No 'is' here!")
else:
    print("Found 'is' in the string.")
