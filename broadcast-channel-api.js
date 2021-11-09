const bc = new BroadcastChannel("channel_name");

const sendMessage = () => {
  bc.postMessage("Hi new tab");
};

bc.onmessage = (ev) => console.log(ev);

// to close the connection
// bc.close();
