/*
part one:
build a linked list where each node can contain
both a key and a value (keys and values will only be strings)

part two:
- make an array of 5 items where each item is a new HEAD of a linked list (based on part one)
- create a method that converts a string (of a key's string) to a value that
  determines which of the five buckets to attach the key/value to

part three:
write a `put(key,value)` method that can store things in our data structure; if the key is already in a linked list,  overwrite the value with the new value
write a `get(key)` method that can fetch a value or return null/nil if there's no match
both of these methods will use the string-to-integer conversion from part two to determine which linked list in the array of buckets to search/place our key/value

part four:
have a way to visualize the data structure
*/

class Node {
  constructor(key, value) {
    this[key] = value;
    this.next = null;
  }
}

const findBucket = (ary, key) => {
  let head = ary.find(e => {
    return Object.keys(e)[0].includes(key.slice(0,3));
  });
  return head;
};

const addNode = (start, node) => {
  let head = start;
  let buildingList = true;
  while (buildingList) {
    if (head.next == null) {
      head.next = node;
      buildingList = false;
    } else {
      head = head.next;
    }
  }
}

const put = (key, value) => {
  let head = findBucket(buckets, key);
  if (head == null) return 'No Bucket Matches';
  let insertingNode = true;
  while (insertingNode) {
    if (head.hasOwnProperty(key)) {
      head.key = value;
      insertingNode = false;
    } else if (head.next == null) {
      let newNode = new Node(key, value);
      head.next = newNode;
      insertingNode = false;
    } else {
      head = head.next;
    }
  }
};

const get = key => {
  let head = findBucket(buckets, key);
  if (head == null) return null;
  let retrievingNode = true;
  let result;
  while (retrievingNode) {
    if (head.key) {
      result = head.key;
    } else if (head.next) {
      head = head.next;
    } else {
      result = null;
    }
  }
  return result;
};

const display = ary => {
  let result = '';
  for (let i = 0; i < ary.length; i++) {
    let row = [];
    let head = ary[i];
    let moreNodes = true;
    while (moreNodes) {
      row.push(Object.values(head)[0]);
      if (!!head.next) {
        head = head.next;
      } else {
        moreNodes = false;
      }
    }
    result += row.join(' --> ') + '\n';
  }

  return result;
}

const bucket1 = new Node('one', 'Bucket 1');
const bucket2 = new Node('two', 'Bucket 2');
const bucket3 = new Node('three', 'Bucket 3');
const bucket4 = new Node('four', 'Bucket 4');
const bucket5 = new Node('five', 'Bucket 5');

let buckets = [bucket1, bucket2, bucket3, bucket4, bucket5];

put('four2', '44');
put('one4', '1111');
put('two2', '22');
put('two3', '222');
put('four3', '444');
put('three2', '33');
put('one3', '111');
put('four4', '4444');
put('one2', '11');

console.log(display(buckets));

/*
Bucket 1 --> 1111 --> 111 --> 11
Bucket 2 --> 22 --> 222
Bucket 3 --> 33
Bucket 4 --> 44 --> 444 --> 4444
Bucket 5
*/
