import React from "react";

const Tile = ({ onMouseDown, active }) => {
    let classes = "tile";
    let borderClasses = "tile-border"
    if (active) {
        classes += "-b";
        borderClasses += "-b";
    }

    return (
        <div className={borderClasses} onMouseDown={onMouseDown} style={{ paddingTop: "10px",width: "100px", height: "90px", cursor: "pointer" }}>
            <div className={classes} style={{ margin: "auto",  width: "80px", height: "80px", cursor: "pointer" }}>
            </div>
        </div>
    );
};

export default Tile;
