var calc = {
  status: 'Awesome',
  plus: function(a, b, c) {
    return (
      console.log(this),
      console.log(a + b + c),
      console.log(arguments),
      console.log(this.status)
    );
  }
}

calc.plus(2,4,8);

