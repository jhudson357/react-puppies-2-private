const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/puppies`

async function create(puppy) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(puppy)
  })
  return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })
  return res.json()
}

async function update(puppy) {
  const res = await fetch(`${BASE_URL}/${puppy._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(puppy)
  })
  return res.json()
}

export {
  create, 
  getAll,
  deleteOne,
  update
}