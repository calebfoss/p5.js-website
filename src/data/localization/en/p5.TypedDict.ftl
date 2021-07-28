description__0 = Base class for all p5.Dictionary types. Specifically  typed Dictionary classes inherit from this class.
size__description__0 = Returns the number of key-value pairs currently stored in the Dictionary.
size__returns = Integer: the number of key-value pairs in the Dictionary
hasKey__description__0 = Returns true if the given key exists in the Dictionary, otherwise returns false.
hasKey__returns = Boolean: whether that key exists in Dictionary
hasKey__params__key = Number|String: that you want to look up
get__description__0 = Returns the value stored at the given key.
get__returns = Number|String: the value stored at that key
get__params__the = Number|String: key you want to access
set__description__0 = Updates the value associated with the given key in case it already exists in the Dictionary. Otherwise a new key-value pair is added.
set__params__key = Number|String
set__params__value = Number|String
create__description__0 = Creates a new key-value pair in the Dictionary.
create__params__key = Number|String
create__params__value = Number|String
create__params__obj = Object: key/value pair
clear__description__0 = Removes all previously stored key-value pairs from the Dictionary.
remove__description__0 = Removes the key-value pair stored at the given key from the Dictionary.
remove__params__key = Number|String: for the pair to remove
print__description__0 = Logs the set of items currently stored in the Dictionary to the console.
saveTable__description__0 = Converts the Dictionary into a CSV file for local download.
saveJSON__description__0 = Converts the Dictionary into a JSON file for local download.
