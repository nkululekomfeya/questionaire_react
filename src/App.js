import data from "./data";
import './App.css';
import React from 'react';
import form from "./form";

function App() {
  const [responses, setResponses] = React.useState('');
  const [otherOption, setOtherOption] = React.useState('');
  
  const [selectedOption, setSelectedOption] = React.useState('option1');
  const [show, setShow]=React.useState(false)

  


  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    console.log(selectedOption)
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [id]: value,
    }));
    console.log(otherOption)
  };

  const handleOtherInputChange = (event) => {
    setOtherOption(event.target.value)
  };

  const handleSubmit = (event) => {
     
    event.preventDefault();
    
    console.log(selectedOption);
  };

  const questions = data.data.questionsAndAnswers;

  const inputQuestions = data.data.questionsAndInputs
  

  function Question({ question, responses, setResponses,show}) {
    const { id, item, options } = question;

    const handleChange = (event) => {
      const selection = event.target.value;
      if(selection === "Other"){
        setShow(!show)
      }else{
        setShow(false)
      }
      console.log(otherOption)
      
      setResponses({ ...responses, [id]: event.target.value });
      
    };

    return (
      <div className="box">
        <h2>{item}</h2>
      {options.map((option) => (
        <div key={option}>
          <input className="form-control"
            type="radio"
            id={`${id}-${option}`}
            name={id}
            value={option}
            checked={responses[id] === option}
            onChange={handleChange}
          />
          <label htmlFor={`${id}-${option}`}>{option}</label>
          
        </div>
        
      ))}
      </div>
    );
  }
  return (
    <div>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          responses={responses}
          setResponses={setResponses}
        />
      ))}
      {show && (
            <div>
              <label>Other:</label>
              <input type="text" id="other" onChange={handleInputChange}/>
          </div>
          )}
      <div> 
        <div className="box">
        <h2>Name childrens top three favourite brands</h2>
        <input type="text" id="favBrand1" onChange={handleInputChange} />
        <br/>
        <input type="text" id="favBrand2" onChange={handleInputChange} />
        <br/>
        <input type="text" id="favBrand3" onChange={handleInputChange} />
        </div>
        <div className="box">
        <h2>Name the top three colors your children love to wear?</h2>
        <input type="text" id="colorToWear1" onChange={handleInputChange} />
        <br/>
        <input type="text" id="colorToWear2" onChange={handleInputChange} />
        <br/>
        <input type="text" id="colorToWear3" onChange={handleInputChange} />
        </div>
        
      </div>

      <div>
        <div className="box">
        <h2>How important are the following factors when buying children clothing? (tick one that apply in each row)</h2>
      <label id="price" htmlFor="dropdown" >Price</label>
      <select id="price" defaultValue={responses} onChange={handleInputChange}>
        <option disabled value=''>Select an option</option>
        <option id="option1" value="Unimportant" onChange={handleInputChange}>Unimportant</option>
        <option id="option2" value="Somewhat Important" >Somewhat Important</option>
        <option id="option3" value="Important" >Important</option>
      </select>
      <br/>
      <label id="Fabric"htmlFor="dropdown">Fabric Quality/Reliability</label>
      <select id="Fabric" defaultValue="" onChange={handleInputChange}>
      <option disabled value=''>Select an option</option>
        <option value="Unimportant" >Unimportant</option>
        <option value="Somewhat Important" >Somewhat Important</option>
        <option value="Important" >Important</option>
      </select>
      <br/>
      <label id="Brand"htmlFor="dropdown">Brand</label>
      <select id="Brand" defaultValue="" onChange={handleInputChange}>
      <option disabled value=''>Select an option</option>
        <option value="Unimportant" >Unimportant</option>
        <option value="Somewhat Important" >Somewhat Important</option>
        <option value="Important" >Important</option>
      </select>
      <br/>
      <label id="Comfort"htmlFor="dropdown">Comfort</label>
      <select id="Comfort" defaultValue="" onChange={handleInputChange}>
      <option disabled value=''>Select an option</option>
        <option value="Unimportant" >Unimportant</option>
        <option value="Somewhat Important" >Somewhat Important</option>
        <option value="Important">Important</option>
      </select>
      <br/>
      <label id="Pattern"htmlFor="dropdown">Pattern/Design</label>
      <select id="Pattern" defaultValue="" onChange={handleInputChange}>
      <option disabled value=''>Select an option</option>
        <option value="Unimportant" >Unimportant</option>
        <option value="Somewhat Important" >Somewhat Important</option>
        <option value="Important" >Important</option>
      </select>
        </div>


      </div>
      <div className="box">
        <h2>Rank where do you buy children clothing more often? (1 - Most often, 5 - least often)</h2>
        <label id="Designer" htmlFor="dropdown">Designer/Speciality Stores</label>
        <select id="Designer" defaultValue="" onChange={handleInputChange}>
        <option disabled value=''>Select an option</option>
        <option id="1" value="1">1</option>
        <option id="2" value="2">2</option>
        <option id="3" value="3">3</option>
        <option id="4" value="4" >4</option>
        <option id="5" value="5" >5</option>
        </select>
        <br/>
        <label id="Stores" htmlFor="dropdown">Department Stores (Walmart, Target etc)</label>
        <select id="Stores" defaultValue="" onChange={handleInputChange}>
        <option disabled value=''>Select an option</option>
        <option id="1" value="1">1</option>
        <option id="2" value="2" >2</option>
        <option id="3" value="3" >3</option>
        <option id="4" value="4" >4</option>
        <option id="5" value="5" >5</option>
        </select>
        <br/>
        <label id="Online" htmlFor="dropdown">Online</label>
        <select id="Online" defaultValue="" onChange={handleInputChange}>
        <option disabled value=''>Select an option</option>
        <option id="1" value="1">1</option>
        <option id="2" value="2" >2</option>
        <option id="3" value="3" >3</option>
        <option id="4" value="4" >4</option>
        <option id="5" value="5" >5</option>
        </select>
        <br/>
        <label id="Brand" htmlFor="dropdown">Malls/Brand stores</label>
        <select id="Brand" defaultValue="" onChange={handleInputChange}>
        <option disabled value=''>Select an option</option>
        <option id="1" value="1">1</option>
        <option id="2" value="2">2</option>
        <option id="3" value="3">3</option>
        <option id="4" value="4">4</option>
        <option id="5" value="5">5</option>
        </select>
        <br/>
        <label id="Factory" htmlFor="dropdown">Factory Outlets</label>
        <select id="Factory" defaultValue="" onChange={handleInputChange}>
        <option disabled value=''>Select an option</option>
        <option id="1" value="1">1</option>
        <option id="2" value="2" >2</option>
        <option id="3" value="3" >3</option>
        <option id="4" value="4" >4</option>
        <option id="5" value="5" >5</option>
        </select>

      </div>
      
      <br/>

      

      <button onClick={() => console.log(responses)}>Submit</button>
    </div>
  );
}

export default App;

/* const questions = data.data.questions
    const answers = data.data.answers */
{/* <div>
      {questions.map((p) => 
        <div>
        <h4 key={p.id}>{p.item}</h4>
        <input
          type="radio"
        />
        Option 1
      </div>
      )}
      {answers.map((a,index)=>
        <div>
          <label key={index}>{a.options}</label>
          <input type="radio" />
        </div>
        
      )}

    </div> */}