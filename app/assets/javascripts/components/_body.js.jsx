class Body extends React.Component { // declared class component 

    constructor(props) { // constructor sets up state
        super(props); // super gives us access to "this"
        this.state = {
          beers: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewBeer = this.addNewBeer.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
      }
    
      handleFormSubmit(name, style, hop, alcohol){
        let body = JSON.stringify({beer: {name: name, style: style, hop: hop, alcohol: alcohol} })
    
      fetch('http://localhost:3000/api/v1/beers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
        }).then((response) => {return response.json()})
        .then((beer)=>{
          this.addNewBeer(beer)
        })
        
      }

      handleDelete(id){
        fetch(`http://localhost:3000/api/v1/beers/${id}`, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => { 
            console.log('Item was deleted!')
          })
      }

      addNewBeer(beer){
        this.setState({
          fruits: this.state.beers.concat(beer)
        })
      }
    
    componentDidMount(){
        fetch('/api/v1/beers.json')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ beers: data }) });
      }
    
    render(){
        return(
          <div>
            <NewBeer  handFormSubmit={this.handFormSubmit}/>  
            <AllBeers beers={this.state.beers} handleDelete={this.handleDelete}/>
          </div>
        )
      }
    }

    //  The main component that will handle all changes of beers state.