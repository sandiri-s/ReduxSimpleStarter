import React, {Component} from 'react'

class SearchBar extends Component {

render()
{
  return <input onChange = {event => console.log(event.target.value)} />;
}

}


/*
const SearchBar = () => {
return <input />
}
*/

export default SearchBar
