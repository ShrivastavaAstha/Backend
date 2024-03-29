//Synchronous Function
const timeTakingFunction = () => {
  return "I will take time";
};

const callingSyncFunction = () => {
  const name = timeTakingFunction();
  console.log(name);
};

callingSyncFunction();
console.log("After Time taking function");

console.log("--------");
//Async way
//1. Use the keyword async before the time taking function declaration

const timetakingFunction = async () => {
  return "I will take time";
};

const callingAsyncFunction = async () => {
  const name = await timetakingFunction();
  console.log(name);
};

callingAsyncFunction();
console.log("After Time taking function");
