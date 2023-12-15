import "./TestBoxStyles.css"
import { useState } from 'react';

export function TestBox({stuffToRender, action}){

    return(
        <div className="test-box">
            {stuffToRender.map((stuff, index) => {
                return(
                    <div className="stuff-btn" onClick={() => {action(index)}}>
                        {stuff}
                    </div>
                )
            })}
        </div>
    )

}
