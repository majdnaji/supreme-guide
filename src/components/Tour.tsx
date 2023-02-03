import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  getCameras,
  getFloorWallsVerticies,
  getRoomFloorPoints,
  getRoomRoofPoints,
} from "../data";
import { PointerLockControls } from "@react-three/drei";
import Wall from "./thalatha/Wall";
import Cameras from "./thalatha/TourCameras";
import RoomPlaneGeometry from "./thalatha/RoomPlaneGeometry";

const Tour: React.FC = () => {
  const walls = getFloorWallsVerticies();
  const roomFloors = getRoomFloorPoints();
  const roomRoofs = getRoomRoofPoints();
  const camerasArray = getCameras();
  const [cameras, setCameras] = useState(camerasArray);

  return (
    <Canvas>
      <axesHelper />

      {Array.from(roomFloors).map(([key, value]) => (
        <RoomPlaneGeometry corners={value} />
      ))}
      {Array.from(roomRoofs).map(([key, value]) => (
        <RoomPlaneGeometry corners={value} />
      ))}
      {Array.from(walls).map(([key, value]) => (
        <Wall verticies={value} />
      ))}

      <ambientLight />
      <Cameras cameraArray={cameras} />
      <PointerLockControls />
    </Canvas>
  );
};

export default Tour;
