import React from "react";

const Child = ({ countB }) => {
    console.log("%cChild render", "color: red;")
    return (
        <div className="child">
            <h3>Child componet</h3>
            <p>Count: {countB}</p>
        </div>
    );
};

export default Child;