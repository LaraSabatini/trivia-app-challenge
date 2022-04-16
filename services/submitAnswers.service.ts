const submit = async (ABI: any, surveyId: string, answers: number[], account: string) => {
  const res = await ABI.methods.submit(surveyId, answers)
    .send({from: account})
    .on("transactionHash", (hash: any) => {
        return hash
    })
    .on("error", (error: any) => {
        return error
    })
  return res
}

export default submit
