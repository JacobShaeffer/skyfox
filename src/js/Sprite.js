class Sprite {
	constructor(options) {
		// Private Variables
		this.tickCount = 0;
		this.ticksPerFrame = (60 / options.framesPerSecond) || 0;
		this.initialFrameIndex = options.initialFrameIndex || 0;
		this.numberOfFrames = options.numberOfFrames || 1;
		this.frameIndex = this.initialFrameIndex;

		// Public Variables
		this._width = 	options.width;
		this._height = 	options.height;
		this._image = 	options.image;
		this._loop = 	options.loop;
	}

	get width(){return this._width}
	set width(width){this._width = width}

	get height(){return this._height}
	set height(height){this._height = height}

	get image(){return this._image}
	set image(image){this._image = image}

	get loop(){return this._loop}
	set loop(loop){this._loop = loop}

	update(){
		this.tickCount++;
		if(this.tickCount > this.ticksPerFrame){
			this.tickCount = 0;
			if(this.frameIndex < this.numberOfFrames - 1){
				this.frameIndex++;
			}
			else if(this._loop){
				this.frameIndex = this.initialFrameIndex;
			}
		}
	}

	render(context){
		context.drawImage(
			this._image,
			this.frameIndex * this._width,
			0,
			this._width,
			this._height,
			0,
			0,
			this._width,
			this._height,
		)
	}
}

export default Sprite;