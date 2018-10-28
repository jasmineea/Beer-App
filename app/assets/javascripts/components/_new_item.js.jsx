const NewBeer = (props) => {

    let formFields = {}
   
    return(
      <form onSubmit={(event) => {
          props.handleFormSubmit(formFields.name.value, formFields.style.value, formFields.hop.value, formFields.alcohol.value); event.target.reset();
      }}>
       <input ref={input => formFields.name = input} placeholder='Enter the name of the beer'/>
       <input ref={input => formFields.style = input} placeholder='Enter a the style of beer' />
       <input ref={input => formFields.hop = input} placeholder='Enter the type of hops' />
       <input ref={input => formFields.alcohol = input} placeholder='Enter the alcohol precentage' />
       <button>Submit</button>
      </form>
    )
  }

// ref = {input => formFields.name = input} - 
// use refs to have access to a certain DOM element 
// the object formFields is used so i can pass fields values to the parent component later
// on using our onClick() event handler inside button.
