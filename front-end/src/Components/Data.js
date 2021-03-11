import React from 'react'
import Button from 'react-bootstrap/Button' //react components used must be imported from the bootstrap Library after installing it
import shortid from 'shortid' //import npm packages
import './styles/Data.css'

const Data = ({ data }) => {

  return (
    <div className="styleData">
      {
        data.map(item => (

          <div key={shortid.generate()}>
            <p className='positionData'>
              {item.trackName}
              <br />
              {item.artistName}
            </p>

            <a
              href={item.artistViewUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={item.artworkUrl100.replace('100x100', '200x200')}
                alt="Album Artwork"
                className="styleAlbum"
              />
            </a>

            <br />
            <br />

            <p>
              {item.collectionName}
              <br />
              <a
                href={item.previewUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Preview
              </a>

            </p>

            <Button
              variant="dark"
              size="sm"
              onClick= // will store the items that were made favourites

              {
                () => {
                  // object to store the favourites
                  let likedItems = {}
                  // array to store the sessionStorage
                  let likedItemsArr = []
                  // append the previously added items to the array
                  const prevLikedItems = JSON.parse(sessionStorage.getItem("likedItems"))

                  if (prevLikedItems !== "" && Array.isArray(prevLikedItems)) {
                    likedItemsArr = [...prevLikedItems]
                  }

                  const title = item.trackName
                  const artist = item.artistName
                  const profile = item.artistViewUrl
                  const artwork = item.artworkUrl100.replace('100x100', '200x200')
                  const album = item.collectionName
                  const preview = item.previewUrl

                  likedItems = {
                    title,
                    artist,
                    profile,
                    artwork,
                    album,
                    preview
                  }

                  // console.log(likedItems)

                  likedItemsArr.push(likedItems)

                  sessionStorage.setItem("likedItems", JSON.stringify(likedItemsArr))

                  window.location.reload()

                }
              }
            >
              Like
            </Button>

          </div>
        ))
      }

    </div>
  )
}

export default Data
