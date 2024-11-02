/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = (props) => {
  return (
    <div className={`component ${props.color}`}>
      <h3>Hello Component</h3>
      <h3>{props.num}</h3>
      <h3>{props.fn("props")}</h3>
      <h3>{props.bool ? "true" : "false "}</h3>
      <h3>{props.obj.name + props.obj.age}</h3>
    </div>
  );
};

export default Child;
