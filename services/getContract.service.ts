const apiKEY = process.env.NEXT_PUBLIC_ETHER_SCAN_TOKEN

const getContract = async (address: string) => {
  const contract = await fetch(
    `https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKEY}`,
  )
    .then(response => response.json())
    // eslint-disable-next-line no-console
    .catch(err => console.error("error", err))
  return contract
}

export default getContract
