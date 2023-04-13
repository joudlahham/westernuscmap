/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 UCCLevel3.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/UCCLevel3.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Exterior_Walls.geometry} material={materials.Wall_material} position={[-6.07, 0, -4.13]}>
        <mesh geometry={nodes.Floor.geometry} material={materials.Floor_material} />
      </mesh>
      <mesh geometry={nodes.Room_377.geometry} material={materials.Wall_material} position={[-5.51, 0, -3.64]}>
        <mesh geometry={nodes.Floor022.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_373.geometry} material={materials.Wall_material} position={[-4.17, 0, -3.64]}>
        <mesh geometry={nodes.Floor023.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_371.geometry} material={materials.Wall_material} position={[-3.31, 0, -4.03]}>
        <mesh geometry={nodes.Floor024.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_369.geometry} material={materials.Wall_material} position={[-3.31, 0, -3.29]}>
        <mesh geometry={nodes.Floor019.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_365.geometry} material={materials.Wall_material} position={[-3.33, 0, -2.47]}>
        <mesh geometry={nodes.Floor008.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_370.geometry} material={materials.Wall_material} position={[-4.13, 0, -3.29]}>
        <mesh geometry={nodes.Floor018.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_307.geometry} material={materials.Wall_material} position={[-0.62, 0, -2.17]} rotation={[0, 0.86, 0]}>
        <mesh geometry={nodes.Floor020.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes['Room_303,_304,_305'].geometry} material={materials.Wall_material} position={[-0.49, 0, -1.69]} rotation={[0, 0.86, 0]}>
        <mesh geometry={nodes.Floor021.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_316.geometry} material={materials.Wall_material} position={[-0.9, 0, -0.54]} rotation={[0, Math.PI / 4, 0]}>
        <mesh geometry={nodes.Floor014.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes['Room_312-313'].geometry} material={materials.Wall_material} position={[-0.23, 0, -1.22]} rotation={[0, Math.PI / 4, 0]}>
        <mesh geometry={nodes.Floor013.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes['Room_308-311'].geometry} material={materials.Wall_material} position={[0.36, 0, -2.19]} rotation={[0, Math.PI / 4, 0]}>
        <mesh geometry={nodes.Floor012.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_350.geometry} material={materials.Wall_material} position={[-2.91, 0, 3.08]}>
        <mesh geometry={nodes.Floor002.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_351.geometry} material={materials.Wall_material} position={[-3.52, 0, 3.09]}>
        <mesh geometry={nodes.Floor003.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_351A.geometry} material={materials.Wall_material} position={[-3.96, 0, 3.09]}>
        <mesh geometry={nodes.Floor004.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes['Study_Area_#1'].geometry} material={materials.Wall_material} position={[-2.85, 0, 2.89]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Floor005.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes['Study_Area_#2'].geometry} material={materials.Wall_material} position={[-3.23, 0, 0.21]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Floor007.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_315.geometry} material={materials.Wall_material} position={[-0.04, 0, -0.72]} rotation={[0, Math.PI / 4, 0]}>
        <mesh geometry={nodes.Floor011.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.USC_Main_Office_340.geometry} material={materials.Wall_material} position={[-0.65, 0, 0.46]}>
        <mesh geometry={nodes.Floor010.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_320.geometry} material={materials.Wall_material} position={[-1.44, 0, 0.46]}>
        <mesh geometry={nodes.Floor016.geometry} material={materials.Floor_material} />
      </mesh>
      <mesh geometry={nodes.Room_301.geometry} material={materials.Wall_material} position={[-1.61, 0, -0.74]}>
        <mesh geometry={nodes.Floor009.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Room_318.geometry} material={materials.Wall_material} position={[-1.42, 0, 0.27]}>
        <mesh geometry={nodes.Floor015.geometry} material={materials.Floor_material} />
      </mesh>
      <mesh geometry={nodes.Elevator.geometry} material={materials.Wall_material} position={[-4.08, 0, 1.2]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Floor006.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes['Bathroom_#1'].geometry} material={materials.Wall_material} position={[-3.68, 0, -1.83]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Floor017.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes['Bathroom_#2'].geometry} material={materials.Wall_material} position={[-0.84, 0, 2.57]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Floor001.geometry} material={materials.Floor_material} position={[0, 0.02, 0]} />
      </mesh>
      <mesh geometry={nodes.Stairs.geometry} material={materials.Dark} position={[-0.25, 0, 3.39]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs001.geometry} material={materials.Dark} position={[-0.13, 0, -2.65]} rotation={[Math.PI, -0.78, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs002.geometry} material={materials.Dark} position={[-5.3, 0, 0.94]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs003.geometry} material={materials.Dark} position={[-6.16, 0, -3.89]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.98, 0.54]} />
      <mesh geometry={nodes.Stairs004.geometry} material={materials.Dark} position={[-2.22, 0, 2.43]} rotation={[0, Math.PI / 2, 0]} scale={[0.35, 0.98, 0.54]} />
    </group>
  )
}

useGLTF.preload('/UCCLevel3.gltf')