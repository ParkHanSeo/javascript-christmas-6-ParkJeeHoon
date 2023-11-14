import Christmas from './controller/ChristmasController.js';

class App {

  constructor(){
    this.christmas = new Christmas();
  }

  async run() {
    await this.christmas.christmasProcess();
  }
}

export default App;
