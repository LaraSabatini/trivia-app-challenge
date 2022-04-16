const apiKEY = process.env.NEXT_PUBLIC_ETHER_SCAN_TOKEN
const apiURL = process.env.NEXT_PUBLIC_API_URL_ROPSTEN

const getContract = async (address: string) => {
  const contract = await fetch(
    `${apiURL}?module=contract&action=getabi&address=${address}&apikey=${apiKEY}`,
  )
    .then(response => response.json())
    // eslint-disable-next-line no-console
    .catch(err => console.error("error", err))
  return contract
}

export default getContract
