import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Line, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Memoize candlestick materials to prevent unnecessary recreations
// const greenMaterial = new THREE.MeshStandardMaterial({ color: "#48BB78" });
// const redMaterial = new THREE.MeshStandardMaterial({ color: "#FC8181" });

function StockChart() {
  const points = useMemo(() => {
    const points = [];
    for (let i = 0; i < 100; i++) {
      points.push(new THREE.Vector3(
        (i - 50) * 0.1,
        Math.sin(i * 0.1) * 2 + Math.cos(i * 0.05) * 2,
        0
      ));
    }
    return points;
  }, []);

  const lineRef = useRef<THREE.Line>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.forEach((point, i) => {
      point.y = Math.sin(i * 0.1 + time * 0.5) * 2 + Math.cos(i * 0.05 + time * 0.3) * 2;
    });
    lineRef.current.geometry.setFromPoints(points);
  });

  // Memoize candlesticks to optimize rendering
  const candlesticks = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => {
      const height = Math.sin(i * 0.5) * 1.5 + Math.cos(i * 0.3) * 1.5;
      const isUp = height > 0;
      return (
        <group key={i} position={[(i - 10) * 0.5, 0, 0]}>
          <mesh position={[0, height/2, 0]}>
            <boxGeometry args={[0.3, Math.abs(height), 0.3]} />
            <meshStandardMaterial color={isUp ? "#48BB78" : "#FC8181"} />
          </mesh>
          <mesh position={[0, height, 0]}>
            <boxGeometry args={[0.8, 0.1, 0.8]} />
            <meshStandardMaterial color={isUp ? "#48BB78" : "#FC8181"} />
          </mesh>
        </group>
      );
    })
  , []);

  return (
    <group>
      <Line
        ref={lineRef}
        points={points}
        color="#60A5FA"
        lineWidth={4}
      />
      {candlesticks}
    </group>
  );
}

function Grid() {
  const gridSize = 10;
  const gridDivisions = 10;

  // Memoize grid helpers
  const grids = useMemo(() => [
    { rotation: [0, 0, 0] },
    { rotation: [0, Math.PI/2, 0] },
    { rotation: [Math.PI/2, 0, 0] }
  ], []);

  return (
    <group>
      {grids.map((grid, i) => (
        <gridHelper 
          key={i}
          args={[gridSize, gridDivisions, '#4A5568', '#4A5568']} 
          rotation={grid.rotation}
        />
      ))}
    </group>
  );
}

export default function StockMarketGame() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden relative">
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg z-10">
        <h3 className="font-bold">Stock Market Simulator</h3>
        <p className="text-sm">Watch the market trends and make smart investments!</p>
      </div>
      <Canvas 
        shadows
        camera={{ position: [0, 5, 15], fov: 50 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Environment preset="city" />
        <Grid />
        <StockChart />
        <OrbitControls 
          enableZoom={true}
          minDistance={10}
          maxDistance={30}
          autoRotate
          autoRotateSpeed={0.3}
          enablePan={false} // Disable panning for better UX
        />
        <Center position={[0, -5, 0]}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.8}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0.1}
          >
            Stock Market
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