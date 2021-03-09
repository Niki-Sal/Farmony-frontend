import React, { useState } from 'react';

const NewPost = () => {
    const [category, setCategory] = useState('')

    const handleChange = (e) => {
        setCategory(e.target.value)
        console.log(category)
    }

    return (
        <div>
            <form>
                <form>
                    <label>
                        Post Title: 
                        <input type="text" htmlFor="Post Title" name="postTitle"></input>
                    </label><br />
                    <label>Body: 
                    <input type="text" htmlFor="Body" name="body"></input>
                    </label><br/>
                    <label>
                        Category:
                        <select value={category.value} onChange={handleChange}>
                        <option value="Trade">Trade</option>
                        <option value="Buy">Buy</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Holistic Hub">Holistic Hub</option>
                        </select>
                    </label>

                </form>
            </form>
        </div>
    );
}

export default NewPost;
