import Christmas from './controller/ChristmasController.js';

class App {
  async run() {
    await new Christmas().christmasProcess();
  }
}

export default App;
