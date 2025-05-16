function logJson(arg: object) {
  if (process.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(arg, null, 2))
  }
}

export default logJson
