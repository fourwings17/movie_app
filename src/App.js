import PropTypes from 'prop-types'

const foodLike = [
  {
    id : 1,
    name : '김치',
    price : 12000,
    rating : 5
  },
  {
    id :2,
    name : '감자국',
    price : 8000,
    rating : 3
  },
  {
    id : 3,
    name : '닭볶음',
    price : 20000,
    rating : 2
  }
];


Food.propTypes = {
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  rating : PropTypes.number 
}


function Food({name, price, rating}){  
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{rating}/5.0</p>
      <hr />
    </>
  )
}


function App() {
 
  return (
  <div>
    {
      foodLike.map((dish,index) => ( 
        <Food name={dish.name} price={dish.price} rating={dish.rating} key={dish.id} />
      ))
    }   
  </div>
  )  
}

export default App;
