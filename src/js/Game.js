import Canvas from './Canvas';
import { throttle } from './lib/helpers';

const FRAMES_PER_SECOND_CAP = 60;
const MINIMUM_TIME_BETWEEN_FRAMES = 1000/60; 
// 1000 milliseconds / 60 frames per second = number of milliseconds between frames

class Game {
	constructor(options){
		//Public Variables
		this._width = options.width;
		this._height = options.height;

		// Private Variables
		this.lastTime;
		this.cid = options.cid;
		this.canvas = new Canvas(this.cid, this._width, this._height);
		this.context = this.canvas.context;
		this.gameObjects = [];
	}

	add(gameObject){
		this.gameObjects.push(gameObject);
	}

	update(deltaTime){
		this.gameObjects.forEach((gameObject) => {
			gameObject.update(deltaTime);
		})
	}

	render(){
		this.context.clearRect(0, 0, this._width, this._height);
		this.gameObjects.forEach((gameObject) => {
			gameObject.render(this.context);
		})
	}
}

export default Game;