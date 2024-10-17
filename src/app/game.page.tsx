import { PageComponent } from "rasengan";
import {
	Fisheye,
	CameraControls,
	PerspectiveCamera,
	Environment,
} from "@react-three/drei";
import { Level, Sudo, Camera, Cactus, Box } from "./Scene";

import { Canvas } from "@react-three/fiber";

const Game: PageComponent = () => {
	return (
		<Canvas style={{ width: "100%", height: "100vh" }}>
			<Fisheye zoom={0}>
				<CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
				<ambientLight intensity={Math.PI / 2} />
				<group scale={20} position={[5, -11, -5]}>
					<Level />
					<Sudo />
					<Camera />
					<Cactus />
					<Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
				</group>
				<Environment preset='city' background blur={1} />
				<PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
			</Fisheye>
		</Canvas>
	);
};

Game.path = "/game";
Game.metadata = {
	title: "Game",
	description: "Game page",
};

export default Game;
