import React, { createContext, useState } from "react";
/* use all data from all course 
each course with id, name, image, new price and old price */
import all_course from "../Assets/all_course";


/*created one context and initalized with null,
this context is saved in course context that we are exporting 
*/
export const CourseContext =  createContext(null);

/*create course context provider,
function here we will pass the props and within this function we will
create a variable "contextValue", insert any data and functions that
will be provided in the shop context provider as a value.
we Can access these functions and values in any components
*/


const CourseContextProvider = (props) => {

    const contextValue = {all_course};
    

    /* return the context value through course context provider */ 
    return (
        <CourseContext.Provider value={contextValue}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider;