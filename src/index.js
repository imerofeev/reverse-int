module.exports = function reverse (n) {
  if (n < 0 ) {
    n = Math.abs(n);
}
   return Number(n.toString().split('').reverse().join('')) * Math.sign(n);
}
