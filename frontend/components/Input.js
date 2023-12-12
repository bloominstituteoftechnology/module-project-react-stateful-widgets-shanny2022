/*
INPUT Instructions

Watch the short video in `design-files/input.gif`:

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

Yup, a single slice of state is enough! In it we'll keep track of the value of the input.
Whether the text shows royalblue or crimson can be derived from the length of the value of the input.

STEP 0:
  Study the component below, and import the state hook.

STEP 1:
  Create a slice of state called 'inputValue' and its 'setInputValue' buddy.
  We should initialize this state to the empty string.

STEP 2:
  Make the color of the text be crimson if the length of 'inputValue' goes over ten.

STEP 3:
  Interpolate the value of the input inside this <div />. How can we make it show in ALL CAPS?

STEP 4:
  Set the value of the input -found inside the event object- into state.

STEP 5:
  Set the input value in state to be empty string. The reset still won't work, though! See the next step.

STEP 6:
  For the input to reset correctly, it needs to "drink" its value from state!
  We need to add an extra prop to the <input /> element like so: value={inputValue}
*/
import React, { useState } from 'react'; // STEP 0

export default function Input() {
  const [inputValue, setInputValue] = useState(''); // STEP 1

  const handleInputChange = (event) => { // STEP 4
    setInputValue(event.target.value);
  };

  const resetInput = () => { // STEP 5
    setInputValue('');
  };

  const textClass = inputValue.length > 10 ? 'text-crimson' : ''; // STEP 2

  return (
    <div>
      <div className={textClass}>{inputValue.toUpperCase()}</div> {/* STEP 3 */}
      <input type="text" value={inputValue} onChange={handleInputChange} /> {/* STEP 6 */}
      <button onClick={resetInput}>Reset</button>
    </div>
  );
}
