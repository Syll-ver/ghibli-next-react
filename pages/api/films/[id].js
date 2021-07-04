import * as ghibli from '../../../db.json'

export default function handler({ query: { id } }, res) {
  const filtered = ghibli.results.filter((sg) => sg.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Film with the id of ${id} is not found` })
  }
}
