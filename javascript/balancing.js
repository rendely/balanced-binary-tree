class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [3, 5, 6, 9, 10, 20]
function threeToTwenty() {
  const three = new Node(3);
  const five = new Node(5);
  const six = new Node(6);
  const nine = new Node(9);
  const ten = new Node(10);
  const twenty = new Node(20);

  six.left = five;
  five.left = three;
  
  six.right = ten;
  ten.left = nine;
  ten.right = twenty;

  return six;

}

// list = [10, 11, 30, 100, 200]
function tenToTwoHundred() {
  const ten = new Node(10);
  const eleven = new Node(11);
  const thirty = new Node(30);
  const oneHundred = new Node(100);
  const twoHundred = new Node(200);

  thirty.left = eleven;
  eleven.left = ten;

  thirty.right = oneHundred;
  oneHundred.right = twoHundred;


  return thirty;

}

if (require.main === module) {
  // add tests in here if you need them
}

module.exports = {
  Node,
  threeToTwenty,
  tenToTwoHundred
};

// Please add your pseudocode to this file
// And a written explanation of your solution
