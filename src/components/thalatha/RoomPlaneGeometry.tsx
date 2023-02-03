import { BufferAttribute, BufferGeometry } from "three";
import * as THREE from 'three'

interface RoomPlaneGeometryProps {
  corners: number[];
}
const RoomPlaneGeometry: React.FC<RoomPlaneGeometryProps> = ({ corners }) => {
  const verticies = new Float32Array(corners);
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(verticies, 3));
  const indices = [];
  for (let i = 1; i < Math.ceil(corners.length / 3) - 1; i++) {
    indices.push(0, i, i + 1);
  }

  const indciesUnitArray = new Uint16Array(indices);
  geometry.setIndex(new BufferAttribute(indciesUnitArray, 1));

  const material = new THREE.MeshBasicMaterial({
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    side: THREE.DoubleSide,
  });

  return <mesh geometry={geometry} material={material}></mesh>;
};

export default  RoomPlaneGeometry;
