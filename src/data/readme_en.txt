We have 2 json files: one describes images of rooms in 3d tour (1.json), the second gives geometry of rooms in 2d space, top view (2.json).
The task is to build scene in three.js according to rooms from json file. The second task is to apply images on the inner sides of room walls.

File :
1.json 
{
  "activeRoom": "srv_2gil2141r5.JPG", //current rooms id 
  "rooms": { //a list of rooms
    "srv_2gil2141r5.JPG": {
    "filename": "srv_2gil2141r5.JPG", //id of a room
    "url": "https://img.immoviewer.com/items/mnikitin/5ab27bc54cedfd0053a66a41/Tour/2688-images/srv_2gil2141r5.JPG?v=1521646584636",
    "urlMobile": "https://img.immoviewer.com/items/mnikitin/5ab27bc54cedfd0053a66a41/Tour/1606-images/srv_2gil2141r5.JPG?v=1521646584636",
    "thumbnail": "https://img.immoviewer.com/items/mnikitin/5ab27bc54cedfd0053a66a41/Tour/150-images/srv_2gil2141r5.JPG?v=1521646584636",
    }, 
} 

2.json 
{
  "corners": { //corner is an intersection point of 2 walls
    "x": 167.01802160842922, //coordinates
    "y": -189.8476657149123, //coordinates
    "wallStarts": [
      {
        "id": "5da6b453-7e61-aa27-fa62-0265d84afc0f", //id of wall, which start from this corner
      }
    ],
    "wallEnds": [
      {
        "id": "5da6b453-7e61-aa27-fa62-0265d84afc0f", //id of wall, which ends up in this corner
      }
    ]
  },
  "rooms": [
    {
      "corners": [], //a list of points for this room
      "interiorCorners": [], //a list of interior points, as each wall has its thickness in real world, we have an intersection of inner edges of walls inside rooms. This coordinates are for informational purposes
      "roomName": "Bedroom"
    }
  ],
  "cameras": [ //cameras 
    {
      "id": "srv_2gil2141r5.JPG",
      "x": 0,
      "y": 5.486400000000003,
      "mergeAngle": -80.86704043944846, //the angle camera is rotated, -180<x<180
      "roomName": "Bedroom"
    }
  ]
}