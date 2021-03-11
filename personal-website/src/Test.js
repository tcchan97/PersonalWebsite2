/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
import { Canvas,useThree, useFrame , useLoader} from 'react-three-fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/test.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Material.004']} geometry={nodes.Plane002_1.geometry} />
      <mesh material={materials.BLACK} geometry={nodes.Plane002_2.geometry} />
      <mesh material={materials['Material.005']} geometry={nodes.Plane003.geometry} />
      <mesh
        material={materials.Material}
        geometry={nodes.Cube001.geometry}
        position={[-0.04, 12.47, 5.9]}
        rotation={[-Math.PI, 0.02, -Math.PI]}
        scale={[0.07, 0.07, 0.07]}>
        <group position={[-90.22, 12.42, 12.93]} rotation={[Math.PI, -0.02, -1.57]} scale={[1.98, 1.98, 1.98]}>
          <mesh material={materials.white} geometry={nodes.Cylinder_1.geometry} />
          <mesh material={materials.matná} geometry={nodes.Cylinder_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.006']}
        geometry={nodes.Cube002.geometry}
        position={[-0.04, 12.47, 4.28]}
        rotation={[-Math.PI, 0.02, -Math.PI]}
        scale={[0.07, 0.07, 0.07]}>
        <mesh material={materials['Material.007']} geometry={nodes.Cube003.geometry} position={[33.5, 0, -0.6]} />
        <mesh material={materials['Material.008']} geometry={nodes.Cube004.geometry} position={[-36.66, 0, 0.66]} />
        <group position={[-90.22, 12.42, 12.93]} rotation={[Math.PI, -0.02, -1.57]} scale={[1.98, 1.98, 1.98]}>
          <mesh material={materials.white} geometry={nodes.Cylinder001_1.geometry} />
          <mesh material={materials.matná} geometry={nodes.Cylinder001_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.014']}
        geometry={nodes.Cube009.geometry}
        position={[-2.18, 12.47, 0.44]}
        rotation={[-Math.PI, 0.02, -Math.PI]}
        scale={[0.07, 0.07, 0.07]}>
        <mesh material={materials['Material.009']} geometry={nodes.Cube005.geometry} position={[-63.12, 0, 1.09]} />
        <mesh material={materials['Material.010']} geometry={nodes.Cube006.geometry} position={[26.19, 0, -0.52]} />
        <mesh material={materials['Material.011']} geometry={nodes.Cube007.geometry} position={[-31.51, 0, 0.52]} />
        <mesh material={materials['Material.013']} geometry={nodes.Cube008.geometry} position={[-92.19, 0, 1.43]} />
        <group position={[-121.73, 12.42, 13.45]} rotation={[Math.PI, -0.02, -1.57]} scale={[1.98, 1.98, 1.98]}>
          <mesh material={materials.white} geometry={nodes.Cylinder002_1.geometry} />
          <mesh material={materials.matná} geometry={nodes.Cylinder002_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.017']}
        geometry={nodes.Cube012.geometry}
        position={[-0.04, 12.47, -3.34]}
        rotation={[-Math.PI, 0.02, -Math.PI]}
        scale={[0.07, 0.07, 0.07]}>
        <mesh material={materials['Material.015']} geometry={nodes.Cube010_1.geometry} position={[-36.66, 0, 0.66]} />
        <mesh material={materials['Material.016']} geometry={nodes.Cube011.geometry} position={[33.5, 0, -0.6]} />
        <group position={[-90.22, 12.42, 12.93]} rotation={[Math.PI, -0.02, -1.57]} scale={[1.98, 1.98, 1.98]}>
          <mesh material={materials.white} geometry={nodes.Cylinder003_1.geometry} />
          <mesh material={materials.matná} geometry={nodes.Cylinder003_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.021']}
        geometry={nodes.Cube013.geometry}
        position={[-0.06, 12.47, -4.26]}
        rotation={[0, -0.02, 0]}
        scale={[0.07, 0.07, 0.07]}>
        <mesh material={materials['Material.021']} geometry={nodes.Cube014_1.geometry} position={[33.5, 0, -0.6]} />
        <mesh material={materials['Material.021']} geometry={nodes.Cube015.geometry} position={[-36.66, 0, 0.66]} />
        <group position={[-90.22, 12.42, 12.93]} rotation={[Math.PI, -0.02, -1.57]} scale={[1.98, 1.98, 1.98]}>
          <mesh material={materials.white} geometry={nodes.Cylinder004_1.geometry} />
          <mesh material={materials.matná} geometry={nodes.Cylinder004_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.022']}
        geometry={nodes.Cube016.geometry}
        position={[-0.06, 12.47, -6.05]}
        rotation={[0, -0.02, 0]}
        scale={[0.07, 0.07, 0.07]}>
        <group position={[-90.22, 12.42, 12.93]} rotation={[Math.PI, -0.02, -1.57]} scale={[1.98, 1.98, 1.98]}>
          <mesh material={materials.white} geometry={nodes.Cylinder005_1.geometry} />
          <mesh material={materials.matná} geometry={nodes.Cylinder005_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.023']}
        geometry={nodes.Cube019.geometry}
        position={[-0.06, 12.47, -1.17]}
        rotation={[0, -0.02, 0]}
        scale={[0.07, 0.07, 0.07]}>
        <mesh material={materials['Material.023']} geometry={nodes.Cube017_1.geometry} position={[-36.66, 0, 0.66]} />
        <mesh material={materials['Material.023']} geometry={nodes.Cube018.geometry} position={[33.5, 0, -0.6]} />
        <group position={[-90.22, 12.42, 12.93]} rotation={[Math.PI, -0.02, -1.57]} scale={[1.98, 1.98, 1.98]}>
          <mesh material={materials.white} geometry={nodes.Cylinder006_1.geometry} />
          <mesh material={materials.matná} geometry={nodes.Cylinder006_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.024']}
        geometry={nodes.Cube020.geometry}
        position={[4.23, 12.47, -1.17]}
        rotation={[0, -0.02, 0]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh
        material={materials['Material.025']}
        geometry={nodes.Cube021.geometry}
        position={[-4.19, 12.47, -1.17]}
        rotation={[0, -0.02, 0]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh
        material={materials['Material.026']}
        geometry={nodes.Cube024.geometry}
        position={[-0.06, 12.47, 3.05]}
        rotation={[0, -0.02, 0]}
        scale={[0.07, 0.07, 0.07]}>
        <mesh material={materials['Material.026']} geometry={nodes.Cube022_1.geometry} position={[-36.66, 0, 0.66]} />
        <mesh material={materials['Material.026']} geometry={nodes.Cube023.geometry} position={[33.5, 0, -0.6]} />
        <group position={[-90.22, 12.42, 12.93]} rotation={[Math.PI, -0.02, -1.57]} scale={[1.98, 1.98, 1.98]}>
          <mesh material={materials.white} geometry={nodes.Cylinder007_1.geometry} />
          <mesh material={materials.matná} geometry={nodes.Cylinder007_2.geometry} />
        </group>
      </mesh>
      <mesh material={materials['Material.002']} geometry={nodes.Cube001_1.geometry} />
      <mesh material={materials.BLACK} geometry={nodes.Cube001_2.geometry} />
      <mesh material={materials['Material.001']} geometry={nodes.Plane_1.geometry} />
      <mesh material={materials['Material.002']} geometry={nodes.Plane_2.geometry} />
      <mesh material={materials.BLACK} geometry={nodes.Plane_3.geometry} />
      <mesh material={materials.white} geometry={nodes.Plane_4.geometry} />
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh material={materials['Material.003']} geometry={nodes.Plane001_1.geometry} />
        <mesh material={materials.BLACK} geometry={nodes.Plane001_2.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/test.glb')
