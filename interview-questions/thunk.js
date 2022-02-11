// simple thunk
const add = (x, y) => x + y;
const thunk = () => add(2, 3);

// asynchronous thunk
const fetchData = (fun) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((json) => fun(json));
};

const asyncThunk = () => {
  return fetchData((data) => {
    console.log(data);
  });
};

asyncThunk();
