import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

function Building({ position, scale, color, rotationSpeed = 0.01 }: { 
  position: [number, number, number], 
  scale: [number, number, number], 
  color: string,
  rotationSpeed?: number 
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    mesh.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <boxGeometry args={scale} />
      <meshStandardMaterial color={color} />
      {scale[1] > 4 && (
        <mesh position={[0, scale[1]/2 + 0.5, 0]}>
          <boxGeometry args={[scale[0] * 1.2, 1, scale[2] * 1.2]} />
          <meshStandardMaterial color="#F6E05E" />
        </mesh>
      )}
    </mesh>
  );
}

function Coin({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    mesh.current.rotation.y += 0.05;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh} position={position} castShadow>
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#FFD700"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

function Road() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#4A5568" />
    </mesh>
  );
}

function City() {
  return (
    <group>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Road />
      <Building position={[-4, 0, 0]} scale={[1.5, 3, 1.5]} color="#4299E1" rotationSpeed={0.005} />
      <Building position={[-2, 0, 2]} scale={[2, 5, 2]} color="#48BB78" rotationSpeed={0.008} />
      <Building position={[0, 0, -1]} scale={[2.5, 7, 2.5]} color="#9F7AEA" rotationSpeed={0.003} />
      <Building position={[2, 0, 1]} scale={[2, 4.5, 2]} color="#F6AD55" rotationSpeed={0.006} />
      <Building position={[4, 0, -2]} scale={[1.8, 6, 1.8]} color="#FC8181" rotationSpeed={0.004} />
      <Coin position={[0, 5, 0]} />
      <Coin position={[-3, 3, -3]} />
      <Coin position={[3, 4, 2]} />
    </group>
  );
}

export default function BudgetMasterGame() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden relative">
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg z-10">
        <h3 className="font-bold">Budget Master</h3>
        <p className="text-sm">Build your city by managing finances wisely!</p>
      </div>
      <Canvas shadows camera={{ position: [15, 15, 15], fov: 50 }}>
        <City />
        <OrbitControls 
          enableZoom={true}
          minDistance={10}
          maxDistance={30}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Center position={[0, -3, 0]}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={1}
            height={0.3}
            curveSegments={12}
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0.1}
          >
            Budget City
            <meshStandardMaterial 
              color="#60A5FA" 
              emissive="#3B82F6"
              emissiveIntensity={0.5}
              metalness={0.7}
              roughness={0.3}
            />
          </Text3D>
        </Center>
      </Canvas>
    </div>
  );
}