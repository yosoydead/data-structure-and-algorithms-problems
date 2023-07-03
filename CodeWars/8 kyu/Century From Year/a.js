/**
 * DESCRIPTION:
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
 */
function century(year) {
  // Finish this :)
  //   const c = year/100;

  //   if (c % 10 >= 1) { return parseInt(c) + 1 }
  //   return parseInt(c);
  return Math.ceil(year / 100);
}
