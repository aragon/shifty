class ShapeShift {
  static async coins() {
    const data = await window.$.getJSON('https://shapeshift.io/getcoins', null)
    const coins = Object.keys(data).map(k => data[k])
    return coins
  }
  static async marketInfo(a, b) {
    const data = await window.$.getJSON(`https://shapeshift.io/marketinfo/${a}_${b}`, null)
    console.log(data)
    return data
  }
}

export default ShapeShift
