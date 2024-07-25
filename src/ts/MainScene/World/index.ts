import * as THREE from 'three';
import * as ORE from 'ore-three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
export class World extends THREE.Object3D {

	private scene: THREE.Scene;
	private commonUniforms: ORE.Uniforms;

	constructor( scene: THREE.Scene, parentUniforms: ORE.Uniforms ) {

		super();

		this.scene = scene;

		this.commonUniforms = ORE.UniformsLib.mergeUniforms( parentUniforms, {
		} );

		scene.background = new THREE.Color( 0xffffff );

		let light = new THREE.DirectionalLight();
		light.position.set( 1, 1, 3 );

		this.scene.add( light );

	}

	public update( deltaTime: number ) {
	}

	public resize( info: ORE.LayerInfo ) {
	}

	public dispose() {
	}

}
