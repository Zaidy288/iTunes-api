import React from 'react'
import Button from 'react-bootstrap/Button' //react components used must be imported from the bootstrap Library after installing it
import './styles/Search.css'

const Nav = ({ input, handleChange, handleClick, handleLiked }) => {

    const prevLikedItems = JSON.parse(sessionStorage.getItem("likedItems"))

    return (
        <div className="styleHeader">
            <div>
                <h1>Itunes app</h1>
                <br />
                <form className='form'>
                    <input
                        className="styleInput"
                        type="text"
                        value={input}
                        onChange={handleChange}
                    />
                    <br />
                    <div
                        className="styleButton"
                    >
                        <Button
                            variant="dark"
                            onClick={handleClick}
                            type="submit"
                        >
                            Search
                        </Button>
                        {
                            prevLikedItems !== null && prevLikedItems.length !== 0 ? (
                                <Button
                                    variant="dark"
                                    className="buttonPosition"
                                    onClick={handleLiked}
                                >
                                Favourites
                            </Button>
                            ) : ''
                        }
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Nav
