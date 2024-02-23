import './App.css';
import { useMousePosition } from './hooks/useMouseMove';

function App() {
  const { position } = useMousePosition();

  return (
    <>
      <div
        className='card'
        style={{
          transform: `rotateY(${position.y}deg) rotateX(${position.x}deg)`,
          transition: 'transform 0.1s ease-in-out',
        }}
      >
        <div className='layer layer-top'></div>
        <div className='layer layer-middle'></div>
        <div className='layer layer-bottom'></div>
        <div className='layer layer-bg'></div>
        <div className='layer layer-edge'></div>
      </div>
    </>
  );
}

export default App;
