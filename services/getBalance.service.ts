const apiKEY = process.env.NEXT_PUBLIC_ETHER_SCAN_TOKEN
const apiURL = process.env.NEXT_PUBLIC_API_URL_ROPSTEN

const getBalance = async (address: string, account: string) => {
  const balance = await fetch(
    `${apiURL}?module=account&action=tokenbalance&contractaddress=${address}&address=${account}&tag=latest&apikey=${apiKEY}`,
  )
    .then(response => response.json())
    // eslint-disable-next-line no-console
    .catch(err => console.error(err))
  return balance
}

export default getBalance
