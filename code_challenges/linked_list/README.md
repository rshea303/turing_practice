part one:
build a linked list where each node can contain both a key and a value (keys and values will only be strings)

part two:
- make an array of 5 items where each item is a new HEAD of a linked list (based on part one)
- create a method that converts a string (of a key's string) to a value that determines which of the five buckets to attach the key/value to

part three:
write a `put(key,value)` method that can store things in our data structure; if the key is already in a linked list,  overwrite the value with the new value
write a `get(key)` method that can fetch a value or return null/nil if there's no match
both of these methods will use the string-to-integer conversion from part two to determine which linked list in the array of buckets to search/place our key/value

part four:
have a way to visualize the data structure

part five:
congrats, you've built the functionality of a hash map!

CAVEAT: you cannot use a hash map itself while building this, only linked lists and arrays (edited)
all keys and values will be strings