/*
COUNTER Instructions

Watch the video in `design-files/count.gif` carefully, paying attention to the UI and Chrome Devtools:

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

A naive developer might say 3 different slices:
  - The count
  - Whether the text is color crimson or royalblue
  - Whether the text reads "even" or "odd"

But a single slice of state is all that's needed here: the count!
The other things can simply be _derived_ from the count itself.

STEP 0:
  Start by studying the component below, and importing the state hook.

STEP 1:
  Using the state hook, create a 'count', 'setCount' pair.
  The 'count' state should be initialized to the number zero.

STEP 2:
  The 'style' object has the 'color' property hard-coded to "royalblue".
  What the value of 'color' should be instead is a ternary expression that goes like this:
  If count is even, then "royalblue", else "crimson".

STEP 3:
  We need to replace some hard-coded info in the JSX with expressions, interpolated inside curly brackets.
  Start by replacing the character "0" with {count}. The 'count' slice of state is the source of truth here.
  Then, replace the word "even" with a ternary: {if count is even number, then string "even", else string "odd"}.


STEP 5:
  This click handler needs to use 'setCount' to set the 'count' to be the current 'count' minus one.
  Do NOT do count--. That amounts to trying to mutate 'count' in place. This is the road to perdition.

STEP 6:
  This click handler needs to use 'setCount' to set the 'count' to be zero again.
*/

import React, { useState } from 'react'; // STEP 0

export default function Counter() {
  const [count, setCount] = useState(0); // STEP 1

  const decrement = () => { // STEP 5
    setCount(count - 1);
  };

  const reset = () => { // STEP 6
    setCount(0);
  };

  const style = { // STEP 2
    color: count % 2 === 0 ? 'royalblue' : 'crimson',
  };

  return (
    <div style={style}>
      <p>Count: {count}</p> {/* STEP 3 */}
      <p>{count % 2 === 0 ? 'even' : 'odd'}</p> {/* STEP 3 */}
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
