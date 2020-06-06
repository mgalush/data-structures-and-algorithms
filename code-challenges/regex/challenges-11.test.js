'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function that iterates over an array of people objects 
and creates a new list of each person's full name using the array method 'map'.
Each object will have the shape {firstName:string, lastName:string}
E.g. [ { firstName:"Jane", lastName:"Doe" }, { firstName:"Donald", lastName:"Duck"}]
should convert to ["Jane Doe", "Donald Duck"]
Note the space in between first and last names.
------------------------------------------------------------------------------------------------ */
const toLastNames = (people) => {
  return people.map((val) => {
    return `${val.firstName} ${val.lastName}`;
  });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named validatePin that uses a regular expression pattern to validate a PIN.

If the PIN is four numerical digits long, return true. Otherwise, return false.
------------------------------------------------------------------------------------------------ */

const validatePin = (pin) => {
  const regex = /^\d{4}$/g;
  return regex.test(pin);
};

//  regex explanation:
// ^ matches the first character
// \d matches a digit
// {4} matches exactly 4 times
// $ signifies end of string so it won't match any characters after

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named validateEmail that takes in an email address and validates it based
on several rules:
  - one word, or two words separated by a period, before the @ symbol
  - can contain numbers
  - can have any of the following top-level domains: .net, .com, or .org
  - no other special characters
  - no subdomains, ports, etc: must be of the form name@place.com, not name@sub.place.com:3000

Return either true or false.

Note: if you ever need to validate an email using a regex in practice, the Internet has the actual regex you should use. It's many many lines long.
------------------------------------------------------------------------------------------------ */

const validateEmail = (email) => {
  const regex = /^\w+(\.\w+)?\@\w+(.net|.com|.org)$/g;
  return regex.test(email);
};

// regex explanation:
// \w matches any word character (a-z, 0-9)
// + continues to match the word character
// (\.\w) matches a period and a word and ? makes it optional
// @ matches the @ symbol
// \w matches the word character again
// (.net|.com|.org) matches only .net or .com or .org
// $ signifies the end of a string

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named validatePhoneNumber that accepts a phone number and determines if it is valid.

Acceptable formats include:
 - (555) 555-5555
 - (555)555 5555
 - 555 555-5555
 - 555-5555555
 - 555-555 5555
 - 555-555-5555
 - 555 555 5555
 - 555555-5555
 - 5555555555

Your function should include a single regular expression pattern that matches any of these formats.

Return either true or false.
------------------------------------------------------------------------------------------------ */

const validatePhoneNumber = (phoneNumber) => {
  const regex = /^(\(\d{3}\)|\d{3})(\s|\-)?\d{3}(\s|\-)?\d{4}$/g;
  return regex.test(phoneNumber);
};

// regex explanation:
// (\(\d{3}\) | \d{3}) matches parenthesis and three numbers plus another parenthesis OR just 3 numbers
// \s | - checks for a blank space or a dash and the ? makes it optional
// \d{3}(\s|\-)?\d{4} checks for 3 digits and an optional - and then 4 more digits
// $ signifies the end of the expression

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named findTagNames that iterates over an array of HTML strings and uses a regular expression pattern to return the closing tags.

For example, findTagNames(['<h1>Hello, world!</h1>', '<p>Welcome to my site</p>']) returns ['/h1', '/p'].
findTagNames(['<div><h1>Hello, world!</h1></div>', '<p>Welcome to my site</p>']) returns ['/h1', '/div', '/p'].
------------------------------------------------------------------------------------------------ */

const findTagNames = (elements) => {
  let array = [];
  elements.forEach((val) => {
    array = [...array, ...val.match(/\/\w+/g)];
  });
  return array;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest solutions-11.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should convert object to full name string', () => {
    const people = [
      { firstName: 'Jane', lastName: 'Doe' },
      { firstName: 'James', lastName: 'Bond' },
    ];

    expect(toLastNames(people)).toStrictEqual(['Jane Doe', 'James Bond']);
  });
});

describe('Testing challenge 2', () => {
  test('It should validate a PIN of exactly four digits', () => {
    expect(validatePin(1234)).toBeTruthy();
    expect(validatePin(123)).toBeFalsy();
    expect(validatePin(12345)).toBeFalsy();
    expect(validatePin('abcd')).toBeFalsy();
    expect(validatePin('7890')).toBeTruthy();
    expect(validatePin('0789')).toBeTruthy();
    expect(validatePin(789)).toBeFalsy();
    expect(validatePin('0000')).toBeTruthy();
  });
});

describe('Testing challenge 3', () => {
  test('It should match a basic email', () => {
    expect(validateEmail('joe@codefellows.com')).toBeTruthy();
  });

  test('It should match if the email contains a period', () => {
    expect(validateEmail('joe.schmoe@codefellows.net')).toBeTruthy();
  });

  test('It should match if the email contains other top-level domains', () => {
    expect(validateEmail('joe@codefellows.org')).toBeTruthy();
  });

  test('It should match if the email contains a period and other top-level domains', () => {
    expect(validateEmail('joe.schmoe@codefellows.net')).toBeTruthy();
  });

  test("It should fail things that aren't email addresses", () => {
    expect(validateEmail('justastring')).toBeFalsy();
    expect(validateEmail('missing@adomain')).toBeFalsy();
    expect(validateEmail('@noname.com')).toBeFalsy();
    expect(validateEmail('.@noname.com')).toBeFalsy();
    expect(validateEmail('nolastname.@sadness.net')).toBeFalsy();
    expect(validateEmail('canadaisnotreal@canada.ca')).toBeFalsy();
    expect(validateEmail('missing.atsymbol.net')).toBeFalsy();
    expect(validateEmail('looksgood@sofar.comohnowaitthisisbad')).toBeFalsy();
    expect(validateEmail('no.middle.names@foryou.com')).toBeFalsy();
  });
});

describe('Testing challenge 4', () => {
  test('It should match the acceptable phone number formats', () => {
    expect(validatePhoneNumber('(555) 555-5555')).toBeTruthy();
    expect(validatePhoneNumber('555 555-5555')).toBeTruthy();
    expect(validatePhoneNumber('555-555-5555')).toBeTruthy();
    expect(validatePhoneNumber('555 5555555')).toBeTruthy();
    expect(validatePhoneNumber('5555555555')).toBeTruthy();
    expect(validatePhoneNumber('234 567 8910')).toBeTruthy();
  });
  test('It should not match unacceptable phone number formats', () => {
    expect(validatePhoneNumber('abcdefghij')).toBeFalsy();
    expect(validatePhoneNumber('222 222 2222 ext. 2222')).toBeFalsy();
    expect(validatePhoneNumber('(222 222-2222')).toBeFalsy();
    expect(validatePhoneNumber('222 222-2222-')).toBeFalsy();
    expect(validatePhoneNumber('(222 222- 2222')).toBeFalsy();
    expect(validatePhoneNumber('(222 222 -2222')).toBeFalsy();
    expect(validatePhoneNumber('523 555--5555')).toBeFalsy();
    expect(validatePhoneNumber('55555555555')).toBeFalsy();
    expect(validatePhoneNumber('55555555555')).toBeFalsy();
    expect(validatePhoneNumber('55555555555')).toBeFalsy();
    expect(validatePhoneNumber('55_55_5555')).toBeFalsy();
  });
});

describe('Testing challenge 5', () => {
  test('It should return the closing tags', () => {
    expect(
      findTagNames(['<h1>Hello, world!</h1>', '<p>Welcome to my site</p>'])
    ).toStrictEqual(['/h1', '/p']);
  });
  test('It should work if there are multiple closing tags in a single string', () => {
    expect(
      findTagNames([
        '<div><h1>Hello, world!</h1></div>',
        '<p>Welcome to my site</p>',
      ])
    ).toStrictEqual(['/h1', '/div', '/p']);
  });
});
