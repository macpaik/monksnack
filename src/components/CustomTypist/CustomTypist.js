import React, {useEffect, useState} from 'react';
import Typist from 'react-typist';

const CustomTypist = (props) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  let typist = count ? (
      <Typist
        avgTypingDelay={100}
        cursor={{
          blink: true,
          hideWhenDone: true,
          hideWhenDoneDelay: 500
        }}
        onTypingDone={() => {setTimeout(() => (setCount(0)), 3000);}}
      >
        <Typist.Delay ms={1000} />
        {props.children}
      </Typist>
    ) :
    null;

  return typist;
};

export default CustomTypist;