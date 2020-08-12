const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?',
];

const titleCased = (input) => tutorials.map((string) => {
  const segment = string.split(' ');
  const upperCaseSegment = segment.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1));
  const joinedString = upperCaseSegment.join(' ');
  return joinedString;
});
