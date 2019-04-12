class Canvas {
	constructor(id, width, height){
		this._canvas = document.getElementById(id);
		this._canvas.width = width;
		this._canvas.height = height;
	}

	get context(){
		if(!this.context2D){
			this.context2D = this._canvas.getContext('2d');
		}
		return this.context2D;
	}
}

export default Canvas;