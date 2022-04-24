import React from "react";

const Colors = ({ colors, selected }) => {

    return (
        <select>
            {
                colors.map(color => {
                    if (selected == null){
                        selected = color.lenghth + 1;
                        return (
                            <option disable selected>Select value</option>
                        )
                    }
                    if (color.id === selected) {   
                        return (
                            <option selected key={color.id}>{color.name}</option>
                        )
                    }
                    else {
                        return (
                            <option key={color.id}>{color.name}</option>
                        )
                    }
                })
            }
        </select>
    )
}

export default Colors