class Beer extends React.Component{
  
    render(){
      return(
        <div>
          <h1>{this.props.beer.name}</h1>
          <p>{this.props.beer.style}</p>
          <p>{this.props.beer.hop}</p>
          <p>{this.props.beer.alcohol}</p>
          <button onClick={() => this.props.handleDelete(this.props.beer.id)}>Delete</button>
        </div>
      )      
    }
  }

  const AllBeers = (props) => {

    var beers = props.beers.map((beer) => {
        return(
          <div key={beer.id}>
           <Beer beer={beer}/>
          </div>
        )
      })
    
    return(
          <div>
            {beers}
          </div>
        )
    }