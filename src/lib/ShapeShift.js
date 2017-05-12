import config from '../config'

const endpoint = 'https://shapeshift.io'

class ShapeShift {
  static async coins() {
    const data = await window.$.getJSON(`${endpoint}/getcoins`, null)
    const coins = Object.keys(data).map(k => data[k])
    return coins
  }
  static async marketInfo(a, b) {
    const data = await window.$.getJSON(`${endpoint}/marketinfo/${a}_${b}`, null)
    return data
  }
  static async sendEmailReceipt(email, txid) {
    try {
      const res = await window.$.post(`${endpoint}/mail`, { email, txid })
      return !!res.error
    } catch (e) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(ShapeShift.sendEmailReceipt(email, txid))
        }, 5000)
      })
    }
  }
  static async shift(pair, { amount, returnAddress, withdrawalAddress }) {
    const res = await window.$.post(`${endpoint}/sendamount`, {
      apiKey: config.pubKey,
      withdrawal: withdrawalAddress,
      pair,
      amount,
      returnAddress,
    })
    return res
  }
}

export default ShapeShift
