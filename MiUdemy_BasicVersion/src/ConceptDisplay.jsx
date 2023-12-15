import "./GlossaryButtonStyles.css";
import "./ConceptDisplayStyles.css";
import "./AddConceptStyles.css";

export default function ConceptDisplay({selectedConcept, numCompleted, concepts, nextItem}){

    return(
        <div className="item-info">
        <table>
            <tr className="title-container">
                <h1>{selectedConcept.title} </h1>
            </tr>
            <tr>{selectedConcept.description}</tr>
            <img className='image' width = {"200%"} height={"200%"} src={selectedConcept.imgSource}/>
            <tr className="btn-container">
            <tr className='professional-btn' onClick={nextItem}>
                Add
            </tr>            
            <tr className='professional-btn' onClick={nextItem}>
                Next
            </tr>
            </tr>
        </table>
        </div>

    )
}