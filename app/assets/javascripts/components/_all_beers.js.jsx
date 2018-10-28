const AllBeers = (props) => {

    var beers = props.beers.map((beer) => {
        return(
          <div key={beer.id}>
            <h1>{beer.name}</h1>
            <p>{beer.style}</p>
            <p>{beer.hop}</p>
            <p>{beer.alcohol}</p>
          </div>
        )
      })
    
    return(
          <div>
            {beers}
          </div>
        )
    }