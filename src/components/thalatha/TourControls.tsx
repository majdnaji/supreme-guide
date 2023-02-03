import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import { extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'

extend({ PointerLockControls })

const TourControls=()=>{
    const {
        camera,
        gl: {domElement}
    } = useThree()
    
    const controls = useRef()
    return(
        <pointerLockControls  ref={controls} args={[camera, domElement]}/>
    )
}
