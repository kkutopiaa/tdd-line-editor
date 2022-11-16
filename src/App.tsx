import {Layer, Line, Stage} from "react-konva";

function App() {
    return <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer><Line points={[30, 75, 125, 234, 315, 225, 104, 127]} strokeWidth={4} stroke={'black'}/></Layer>
    </Stage>;
}

export default App;
