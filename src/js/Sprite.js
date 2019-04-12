class Sprite {
	constructor(options) {
		// Private Variables
		this.tickCount = 0;
		this.ticksPerFrame = options.ticksPerFrame || 0;
		this.initialFrameIndex = options.initialFrameIndex || 0;
		this.numberOfFrames = options.numberOfFrames || 1;
		this.frameIndex = this.initialFrameIndex;

		// Public Variables
		this._context = 	options.context;
		this._width = 	options.width;
		this._height = 	options.height;
		this._image = 	options.image;
		this._loop = 	options.loop;
	}

	get context(){return this._context}
	set context(context){this._context = context}

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

	render(){
		this._context.clearRect(0, 0, this._width, this._height);
		this._context.drawImage(
			this._image,
			this.frameIndex * this._width / this.numberOfFrames,
			0,
			this._width / this.numberOfFrames,
			this._height,
			0,
			0,
			this._width / this.numberOfFrames,
			this._height,
		)
	}
}

export default Sprite;