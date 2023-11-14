import ChristmasController from './controller/ChristmasController.js';

class App {
  async run() {
    await new ChristmasController().christmasProcess();
  }
}

export default App;
