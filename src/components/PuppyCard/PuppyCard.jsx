import { Link } from "react-router-dom"

const PuppyCard = ({puppy, randDogImgId, handleDeletePuppy}) => {
  
  return (
    <div className="card">
      <img
        src={`https://picsum.photos/id/${randDogImgId}/640/480`}
        alt="A happy dog"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-text">{puppy.name}</h2>
        <p className="card-text">A {puppy.age}-year-old {puppy.breed}</p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-sm btn-danger m-left"
          onClick={() => handleDeletePuppy(puppy._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default PuppyCard