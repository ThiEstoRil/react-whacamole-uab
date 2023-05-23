
// Importing React Hooks: Functions which allows the use of state and other React 
// characteristics.
// React doesn't update the state inmediately! 
import React, {useState, useEffect} from 'react';

// Importing images
import mole from '../imgs/mole.png';
import ouch from '../imgs/ouch.png';
import empty from '../imgs/empty.png';


export const MoleComponent = () => {

  // Static variable should be: let image = empty;

  // Initializing state with 'useState' hook
  // useState: Allows you to add state to a functional component.
  let [image, setImage] = useState(empty);
  

  /* Methods */
  const update = function() {
    setImage( (image) => {
      if (image === mole) { return empty;} 
      else if (image === empty) { return mole;} 

      return image;
    });
  }

  const killMole = function() {
    setImage(image => (image === mole ? ouch : empty));
  }

  // useEffect: Having this will tell React to do something after render.
  // Default: will execute after every render.
  // Variables specified: will execute after every render where all the variables have changed.
  // Empty variable list: will execute only at the first render.
  // useEffect(callback, [, dependencies])
  useEffect(() => {

    const interval = setInterval(() => {
      update();
    }, Math.random() * 1000 + 500);

  }, []);


  /* Template: Render UI */
  return (
    <div class="moleHole">
          <img src={image} onClick={killMole}/>
    </div>
  )
}
