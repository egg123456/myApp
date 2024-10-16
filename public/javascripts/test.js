const  pushBtn = document.querySelector('#push');
const replaceBtn = document.querySelector('#replace');

let index = 1;

const printIndex = () => {
  document.body.append(index);
  index++;
}

 const getStateObj = () => ({ foo: "bar"+ index });

pushBtn.addEventListener('click', () => {
  history.pushState(getStateObj(), "", `bar-${index}.html`);
  printIndex()
})

replaceBtn.addEventListener('click', () => {
  history.replaceState(getStateObj(), "", "bar2.html");
  printIndex()
})