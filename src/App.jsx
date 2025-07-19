import {Canvas} from '@react-three/fiber';
import React from 'react';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import './style.css';
import MacContainer from './MacContainer';


function App() {
  return (
   <div className="w-full h-screen" >
    <div className='navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2 z-10 '>
     {["iphone", "ipad", "services", "ios","mac","products"].map((e)=>
      <a   href="#" className="text-white font-[500] text-sm relative transition duration-300 hover:text-sky-400 capitalize ">{e}</a>
    )}
    </div>
    <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2">
      <h3 className="masked text-7xl tracking-tighter font-[700]" >mackbook pro.</h3>
      <h5 className='text-lg' >Welcome to Mackbook Pro.</h5>
      <p  className="text-center text-sm w-3/4">Buy MacBook Pro with education savings, get AirPods or an eligible accessory of your choice. </p></div>
    
    <Canvas camera={{fov:12, position:[0,-10,220]}}>
    
    <Environment 
    files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr']}
    
    />
    <ScrollControls pages={1}>
      <MacContainer/>
    </ScrollControls>
    </Canvas>
   </div>
   
  )
}

export default App;
