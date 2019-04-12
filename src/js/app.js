import Sprite from './Sprite';
import Canvas from './Canvas';
import spriteSheet from '../../res/character_sheet.png';

let spriteTiles = new Image();
let character;

function gameLoop(){
	window.requestAnimationFrame(gameLoop);

	character.update();
	character.render();
}

function main(){
	console.log('test');
	let canvas = new Canvas('game', 400, 400);

	character = new Sprite({
		context: canvas.context,
		width: 96*4,
		height: 96,
		image: spriteTiles,
		loop: true,
		ticksPerFrame: 30,
		initialFrameIndex: 2,
		numberOfFrames: 4,
	});

	gameLoop();
}

spriteTiles.addEventListener('load', main, false);
spriteTiles.src = spriteSheet;