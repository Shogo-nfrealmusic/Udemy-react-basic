import { useEffect } from 'react';
import { useState } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if(checked) {
      window.alert('checked');
    }
  },[checked]);

  return (
    <>
      <label>
        <input type={'checkbox'} value={checked} onClick={() => setChecked((checked) => !checked)} />
        click me
      </label>
    </>
  );
};

export default Example;
