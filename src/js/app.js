import Sprite from './Sprite';
import Game from './Game';
import character_sheet from '../../res/character_sheet.png';

let game;
let resources = {};

function gameLoop(deltaTime){
	game.update(deltaTime);
	game.render();

	window.requestAnimationFrame(gameLoop);
}

function main(){
	game = new Game({cid: 'game', width: 400, height: 400});

	let character = new Sprite({
		width: 96,
		height: 96,
		image: resources.character,
		loop: true,
		framesPerSecond: 2,
		initialFrameIndex: 2,
		numberOfFrames: 4,
	});

	game.add(character);

	gameLoop(0);
}

let paths = [
	{key: 'character', path: character_sheet},
];

function resourceLoader(callback) { 
	let counter = 0;

	for(let idx=0; idx<paths.length; idx++){
		(function(i){
			let img = new Image();

			resources[paths[i].key] = img;

			img.addEventListener('load', function(){
				counter++;
				if(counter >= paths.length){
					callback();
				}
			}, false);
			img.addEventListener('error', function(){
				counter++;
				if(counter >= paths.length){
					callback();
				}
			}, false);

			img.src = paths[i].path;
		})(idx);
	}
}

resourceLoader(main);