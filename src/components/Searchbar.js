import React, {useState} from 'react'


function Searchbar(props) {

    const [postMatches, setPostmMatches] = useState([])

    const handleSearchBar = (e) => {
        const posts = props.posts 
        let filteredPosts = []
        for (let post of posts) {
            let postVals = Object.values(post)

            // console.log(postVals)
            const searchedPosts = postVals.filter((post) => post.includes('Tan')
            )
            
        }
        
    }

    return (
        <div className="searchbar-container">
            <form>
                <input type="text" id="searchbar" className="searchbar" placeholder="Search posts..." onChange={handleSearchBar}></input>
            </form>
           
        </div>
    )
}

export default Searchbar
