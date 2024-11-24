import { useEffect } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  useEffect(
    function update() {
      console.log("update");
      return function cleanup() {
        console.log("cleanup");
      }
    },
    [state]
  );
  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
    }, []);
  return (
   <>
    <button onClick={() => setState((prev) => prev + 1)}>update</button>
   </>
  );
};

export default Example;
