
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
}
function spam() {
  return new Promise(resolve => {
    const time = Math.round(Math.random() * 4000);
    setTimeout(() => resolve(), time);
  });
}
let isStop = false;
async function serviceOne() {
  /*for(let i = 0; i < 10; i++) {
    await spam();
    console.log(`request ${i}`);
    await sleep(2000);
  }*/
  let i = 1;
  while(true) {
    if(isStop) {
      break;
    }
    await spam();
    console.log(`request ${i++}`);
    await sleep(2000);
  }
}
serviceOne();

setTimeout(() => {
  isStop = true;
}, 20000);
