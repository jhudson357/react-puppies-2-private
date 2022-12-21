import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditPuppy(props) {
  const formElement = useRef()
  // Use the useLocation hook and set the state of formData with the puppy's details!
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.puppy)
  const [validForm, setValidForm] = useState(false)
  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}
  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
    props.handleUpdatePuppy(formData)
	}
	return (
		<>
      {/* Update the text */}
			<h1>Edit Puppy</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Puppy's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Puppy's Breed (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="breed"
            value={formData.breed}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Puppy's Age
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
            value={formData.age}
						name="age"
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					{/* Adjust the text in the button */}
          <button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Update Puppy
					</button>
				</div>
        {/* Add a cancel button */}
        <div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	)
}

export default EditPuppy