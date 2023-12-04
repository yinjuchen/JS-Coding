// hasOwnProperty(prop) and for in 

const buz = {
  fog: 'stack',
  bar: 'overflow'

};

for (const prop in buz) {
  if (Object.hasOwnProperty.call(buz, prop)) {
    // output 'fog: stack', 'bar:overflow'
    console.log(`${prop}: ${buz[prop]} `)
  }
}



