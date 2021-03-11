import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas,useThree, useFrame , useLoader} from 'react-three-fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

import Model from './Scene'
import Model2 from './Test'

import "./App.css"




function Dec(props) {
  const { viewport } = useThree()
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  const ref = useRef()
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    console.log(ref.current);
    //ref.current.position.set(x, y, 0) //-14.377794060997669
    //0.7547594595430165
    ref.current.rotation.set(-y, x, 0)
  })
  return (
      <mesh ref={ref} castShadow>
        <dodecahedronBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="0x7c878c" vertexTangents={true} reflectivity="1" roughness="0.5" metalness="1"/>
      </mesh>
  )
}

function Dec2(props) {
  const { viewport } = useThree()
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead

  const ref = useRef()
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    //ref.current.position.set(newx, newy, 0)
    ref.current.rotation.set(-x, y, 0)
  })
  return (
      <mesh ref={ref} castShadow>
        <dodecahedronBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="#65ffb3" vertexTangents={true} reflectivity="0" roughness="0.5" metalness="0.5"/>
      </mesh>
  )
}

function Dec3(props) {
  const { viewport } = useThree()
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  const ref = useRef()
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    //ref.current.position.set(x, y, 0)
    //ref.current.rotation.set(ref.current.position.x, ref.current.position.y)
  })
  return (
      <mesh ref={ref} castShadow>
        <ringBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="black" vertexTangents={true} reflectivity="0" roughness="1" metalness="0"/>
      </mesh>
  )
}
/*
export default function App() {
  return (
    <div className="glftContainer">
      <Canvas style={{ background: "white" }} shadowMap camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={1} />\
        <spotLight intensity={1} position={[20, 10, 10]} angle={0.5} penumbra={1} shadow-mapSize-width={2048} shadow-mapSize-height={2048} castShadow />
        <Box/>
  
      </Canvas>
    </div>
  )
}*/

const App = () =>{
  return (
    <div>
      <div className="glftContainer">
        <div className="title">
            Hi, my name is
            <div className="titlefirst">Thomas <span className="titlelast">Chan</span> </div>
            And I'm a
            <div className="titlelast2"> Software Developer</div>
        </div>
        <Canvas style={{ background: "white" }} shadowMap camera={{ position: [0, 0,3], fov:70 }}>
          <ambientLight intensity={1} />\
          <spotLight intensity={1} position={[20, 10, 10]} angle={0.5} penumbra={1} shadow-mapSize-width={2048} shadow-mapSize-height={2048} castShadow />
          <Suspense fallback={null} >
            <Dec/>
            <Dec2/>
          </Suspense>
        </Canvas>
      </div>
      <div className="glftContainer2">
        section 2
      </div>
    </div>
  );
};
export default App;