import { VisionDetectionFrame } from '@nodetron/types/league/vision'
import Point from '@nodetron/math/Point2D'
import { IField } from '@nodetron/types/data'

// interface CameraData {
//     vision: Array<Vision>,
//     lastTime: number,
// }

export const fieldState: IField = {
  length: 0,
  width: 0,
  goal: {
    width: 0,
    depth: 0,
  },
  penalty: {
    width: 0,
    depth: 0,
  },
  boundaryWidth: 0,
  centerMark: {
    center: new Point(0, 0),
    radius: 0,
  },
}

export const cameraState: Array<Array<VisionDetectionFrame>> = [
  [],
  [],
  [],
  [],
]

