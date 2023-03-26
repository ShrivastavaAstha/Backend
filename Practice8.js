//Sync Function
const function1 = async () => {
  return "First";
};

const function2 = async () => {
  //   const func = await function1();
  //   console.log(func);
  return "Second";
};

//function2();
//console.log("Second");

const function3 = async () => {
  const one = await function2();
  console.log(one);
  const two = await function1();
  console.log(two);
  c;
};

function3();
console.log("Third");
