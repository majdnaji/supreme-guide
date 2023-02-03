import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { WALL_HEIGHT } from "../../data";

interface CamerasProps {
  cameraArray: { id: string; angle: number; x: number; y: number }[];
}
const Cameras: React.FC<CamerasProps> = ({ cameraArray }) => {
  const [currentCamera, setCurrentCamera] = useState(cameraArray[0]);
  const three = useThree();
  useEffect(()=>{
    three.camera.position.set(currentCamera.x,WALL_HEIGHT/2,currentCamera.y)
  },[])

  document.addEventListener("keydown", (e) => {
    const currentIndex = cameraArray.indexOf(currentCamera);
    const nextIndex = (currentIndex + 1) % cameraArray.length;
    const newCamera = cameraArray[nextIndex];
    three.camera.position.set(newCamera.x, WALL_HEIGHT/2, newCamera.y);
    setCurrentCamera(newCamera);
  });

  return <></>;
};
export default Cameras;
