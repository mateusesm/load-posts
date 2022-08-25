import './styles/style.css'

export const SearchInput = ({handleChange, searchValue}) => {

    return (

        <input 
        
            className="search-input"

            onChange={handleChange}

            value={searchValue}
          
            type="search"

            placeholder="Type your search..."
          
        />

    )

}