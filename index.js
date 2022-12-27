function helloWorld() {
  console.log('Hello World from this npm package');
<<<<<< feature/dev_01
  console.log('prueba 01 para feature/dev_01');
  console.log('prueba 02 para feature/dev_01');
=======
  console.log('prueba feature/dev_02');
>>>>>> dev
}

module.exports = helloWorld;
