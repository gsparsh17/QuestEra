import { useRef, useMemo } from 'react'; // Added useMemo import
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Coin({ position, rotation }: { position: [number, number, number], rotation: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.y = rotation + state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 3) * 0.3;
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 32]} />
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

function Treasure({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
  });

  return (
    <group ref={groupRef} position={position} castShadow>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[1.5, 1.2, 0.4, 32]} />
        <meshStandardMaterial color="#B8860B" metalness={0.5} roughness={0.7} />
      </mesh>
      <pointLight position={[0, 2, 0]} color="#FFD700" intensity={1} distance={5} />
    </group>
  );
}

function Path() {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-8, 0, 0),
      new THREE.Vector3(-5, 0, -5),
      new THREE.Vector3(0, 0, -8),
      new THREE.Vector3(5, 0, -5),
      new THREE.Vector3(8, 0, 0),
      new THREE.Vector3(5, 0, 5),
      new THREE.Vector3(0, 0, 8),
      new THREE.Vector3(-5, 0, 5),
      new THREE.Vector3(-8, 0, 0),
    ], true);
  }, []);

  const points = useMemo(() => curve.getPoints(100), [curve]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <tubeGeometry args={[curve, 100, 0.5, 32, false]} />
      <meshStandardMaterial color="#4A5568" side={THREE.DoubleSide} />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <circleGeometry args={[15, 64]} />
      <meshStandardMaterial color="#2D3748" />
    </mesh>
  );
}

export default function MoneyQuestGame() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden relative">
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg z-10">
        <h3 className="font-bold">Money Quest</h3>
        <p className="text-sm">Follow the path to collect coins and find treasure!</p>
      </div>
      <Canvas shadows camera={{ position: [0, 15, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Environment preset="forest" />
        <Ground />
        <Path />
        <Treasure position={[0, 1, 0]} />
        <Coin position={[-6, 1, -3]} rotation={0} />
        <Coin position={[-3, 1, -6]} rotation={2} />
        <Coin position={[0, 1, -7]} rotation={4} />
        <Coin position={[3, 1, -6]} rotation={6} />
        <Coin position={[6, 1, -3]} rotation={8} />
        <Coin position={[6, 1, 3]} rotation={10} />
        <Coin position={[3, 1, 6]} rotation={12} />
        <Coin position={[0, 1, 7]} rotation={14} />
        <Coin position={[-3, 1, 6]} rotation={16} />
        <Coin position={[-6, 1, 3]} rotation={18} />
        <OrbitControls 
          enableZoom={true}
          minDistance={10}
          maxDistance={30}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Center position={[0, -4, 0]}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.8}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0.1}
          >
            Money Quest
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