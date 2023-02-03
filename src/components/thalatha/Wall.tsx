import * as THREE from 'three';
import { BufferAttribute } from 'three';

interface WallProps {
    verticies: number[];
  }
  const Wall: React.FC<WallProps> = ({ verticies }) => {
    const verticiesFloatArray = new Float32Array(verticies);
    const geometry = new THREE.BufferGeometry();
    // create a simple square shape. We duplicate the top left and bottom right
    // vertices because each vertex needs to appear once per triangle.
  
    const indcies = new Uint16Array([0, 1, 3, 0, 3, 2]);
  
    // itemSize = 3 because there are 3 values (components) per vertex
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(verticiesFloatArray, 3)
    );
    geometry.setIndex(new BufferAttribute(indcies, 1));
    const material = new THREE.MeshBasicMaterial({
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      side: THREE.DoubleSide,
    });
  
    return <mesh geometry={geometry} material={material}></mesh>;
  };
  export default Wall;