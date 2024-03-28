import React from 'react';
import ThreeD from "../images/3d_models/Logo_without_light_Emission.glb"
const Load = () => {
    return (
        
        <section className="load_in_page" id="preloader">
            <div className="startingLogo" >
                <model-viewer src={ThreeD} camera-orbit="0deg 0deg 4m" 
                camera-controls disable-zoom disable-tap  alt="3d_model"></model-viewer>
            </div>
        
        </section>
        // made by Mateo Gjini
    );
};
    
export default Load;