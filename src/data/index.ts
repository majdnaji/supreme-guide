import { Vector, Vector2 } from "three";
import floorJson from "./2.json";

interface Room {}
interface Floor {
  rooms: Room[];
}
export const WALL_HEIGHT=250;

export const getRoomFloorPoints = (): Map<string, number[]> => {
  var rooms = new Map<string, number[]>();
  for (let room of floorJson.rooms) {
    rooms.set(room.roomName, []);
    for (let corner of room.corners) {
      rooms.get(room.roomName)?.push(corner.x , 0, corner.y );
    }
  }

  return rooms;
};
export const getRoomRoofPoints=(): Map<string, number[]> => {
  var rooms = new Map<string, number[]>();
  for (let room of floorJson.rooms) {
    rooms.set(room.roomName, []);
    for (let corner of room.corners) {
      rooms.get(room.roomName)?.push(corner.x , WALL_HEIGHT, corner.y );
    }
  }

  return rooms;
};
export const getFloorWallsVerticies = (): Map<string, number[]> => {
  var walls = new Map<string, number[]>();

  for (let wall of floorJson.walls) {
    walls.set(wall.id, []);
  }
  for (let corner of floorJson.corners) {
    for (let wallStarts of corner.wallStarts) {
      walls.get(wallStarts.id)?.push(corner.x , 0, corner.y );
      walls.get(wallStarts.id)?.push(corner.x , WALL_HEIGHT, corner.y );
    }
    for (let wallEnds of corner.wallEnds) {
      walls.get(wallEnds.id)?.push(corner.x , 0, corner.y );
      walls.get(wallEnds.id)?.push(corner.x , WALL_HEIGHT, corner.y );
    }
  }

  return walls;
};

export const getCameras = () => {
  const camerasArray = [];
  for (let camera of floorJson.cameras) {
    camerasArray.push({
      id: camera.id,
      angle: camera.angle,
      x: camera.x,
      y: camera.y,
    });
  }
  return camerasArray;
};
