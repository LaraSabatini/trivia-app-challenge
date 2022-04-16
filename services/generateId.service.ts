/* eslint-disable no-plusplus */
const generateId = (n: number) => {
  let randomString = ""
  const characters = "0123456789"

  for (let i: number = 0; i < n; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length),
    )
  }
  return randomString
}

export default generateId
