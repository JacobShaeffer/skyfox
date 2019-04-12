
class ResourceLoader {
	constructor(paths, callback){
		this.resourceLoader(paths, callback);
	}

	/**
	 * 
	 * @param {{key: string, path: string}} resources 
	 */

	getResource(key) {
		console.group('getResource');
		let image = this.resources[key];
		console.log('image1: ', image);
		console.groupEnd();
		return image;
	}
}

export default ResourceLoader;