import React, {useState} from 'react'


function Searchbar(props) {

    const [postMatches, setPostmMatches] = useState([])

    const handleOnChange = (e) => {
        const posts = props.posts 
        const searchedPosts = posts.filter((post) => {
            
            while (e.target.value == post.title) {
                return (
                    <div>{post.title}</div>
                )
            }
        })
        
    }

    return (
        <div className="searchbar-container">
            <form>
                <input type="text" id="searchbar" className="searchbar" placeholder="Search posts..." onChange={handleOnChange}></input>
            </form>
           
        </div>
    )
}

export default Searchbar
