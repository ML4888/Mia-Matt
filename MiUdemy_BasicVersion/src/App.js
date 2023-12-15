
import logo from './logo.svg';
import './App.css';
import "./GlossaryButtonStyles.css";
import "./ConceptDisplayStyles.css";
import "./AddConceptStyles.css";


import {useEffect,useState} from 'react';
import Programming from "./Programming.png";
import Psychology from "./Psychology.png";
import Design from "./Design.png";
import Music_Art from "./Music_Art.png";
import Health_Fitness from "./Health_Fitness.png";

import ConceptDisplay from "./ConceptDisplay";
import AddConcept from './AddConcept';
import GlossaryButton from "./GlossaryButton";

import { BankAccount } from './Model/BankAccount';
import BankAccountDisplay from './Components/BankAccountDisplay';
import CustomDropdown from './Components/CustomDropdown/CustomDropdown';
import RenderNameCard from './NameCard.js';

function App() {


  const [concepts, setConcepts]=useState([{
    title: "Programming",
    description: <p>Expand your career opportunities<u>with Python</u>.Take one of 
                    MiUdemy’s range of Python courses 
                    and learn how to code using this incredibly useful language. 
                    Its simple syntax and readability makes Python 
                    perfect for Flask, Django, data science, and machine learning. 
                    You’ll learn how to build everything from games to sites to apps. 
                    Choose from a range of courses that will appeal to</p>,
    imgSource : Programming,
    complete :false
  },
  {
    title: "Psychology",
    description: <p>Psychology <u>can help you better understand yourself</u>. 
                  The insights you gain into motivations, 
                  thought processes, the influences of groups 
                  you interact with and many other aspects of 
                  human behaviour will all help you gain a 
                  better understanding of yourself.</p>,
    imgSource : Psychology,
    complete :false
  },
  {
    title: "Design",
    description: <p>Design not only enhances functionality<u>but also adds beauty and aesthetics</u>
                to our everyday lives, making it an essential aspect of our existence. 
                Embracing design in daily life opens up new possibilities and enriches our experiences, 
                making each day more exciting and inspiring.
                .Continuously executing a block of code if a condtion is true.</p>,
    imgSource : Design,
    complete :false
  },
  {
    title: "Music Art",
    description: <p>Music and art have<u>similar benefits—increased motor skills</u>, 
                decision making, inventiveness, and improved academic 
                performance—but music is also closely related 
                to a child's ability to excel in science and math.</p>,
    imgSource : Music_Art
  },  
  {
    title: "Health Fitness",
    description: <p>Health-related physical fitness
                 <u>Physical activity promotes good health, 
                 and you should stay active throughout all stages of 
                 your life regardless of your body type or BMI.</u> 
                 Understanding the benefits of physical fitness and 
                 knowing how active you should be can help 
                 you maintain good health and 
                 improve your overall quality of life.</p>,
    imgSource : Health_Fitness,
    complete :false
  }
])
  const [selectedConcept, setSelectedConcept] = useState(concepts[0])
  const [numCompleted, setNumCompleted] = useState(0)
  const [addingPrinciple, setAddingPrinciple] = useState(false)

  let userProfile = [{
    name  : "Python PCEP",
    age : 150,
    prof: "Certified Entry-Level Python Programmer",
},
{
    name  : "Abode Creative Suite ",
    age : 200,
    prof: "professional 2",
},
{
    name  : "Yoga",
    age : 120,
    prof: "professional 3",
},

];

const [users, setUsers] = useState([]);


  function nextItem(){

    if (numCompleted < concepts.length){
      setNumCompleted(numCompleted+1)
    }
    let index = concepts.indexOf(selectedConcept)
    let temp= [...concepts]
    temp[index].complete = true
    console.log(temp)
    setConcepts(temp)

    concepts[index].complete=true

    if (index+1<concepts.length){
      setSelectedConcept(concepts[index+1])
      console.log(index)
    }else{
      setSelectedConcept(concepts[0])
      console.log(index)
    }
  }

  const buttons = concepts.map((concept, index) => {
    return (
      <GlossaryButton label = {concept.title} 
      action ={()=> {setSelectedConcept(concept)}}
      complete = {concept.complete}
      />
    )
  })

  return (
    <div className="App">
      <header className="App-header">
      <div className='glossary-left'>

<table> 
<tr> 
  <th className='glossary-top' colspan="3">Hi, Mia. Welcome to MiUdemy 
  <CustomDropdown/>
  </th> 
</tr> 
 
<tr> 
    <td className='glossary-left'>{buttons}</td>  
    <td className='glossary-right'>
          { addingPrinciple == true && 
            <AddConcept/>
          }
          {
            addingPrinciple == false && 
            <ConceptDisplay selectedConcept={selectedConcept}
            concept = {concepts} nextItem={nextItem}
            numCompleted= {numCompleted}/>
          }
    </td>
    <td>
    <div>                 
          <RenderNameCard user = {userProfile}/>
                  <>
                  {userProfile.map(function(data){
                    return (
                        <div>
                            <RenderNameCard user = {data}/>
                        </div>
                    )
                  })}
                  </>
    </div> 
    </td>
</tr> 
<tr> 
<th className='glossary-bottom'colspan="3">Bottom template
</th> 
</tr> 
 
</table> 


</div>

      </header>
    </div>
  );
}

export default App;
