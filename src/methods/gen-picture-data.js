const genPicture = (dt) => {
  // const getUrl = (url) => require(url)
  const pic = {}
  pic.name = dt.name
  pic.alt = dt.alt
  pic.srcs = []
  dt.breaks.forEach(br => {
    const data = {}
    data.media = `(${dt.media}: ${br[0]}px)`
    data.urls = []
    br[2].forEach(ratio => {
      const url = `${dt.path}_${dt.name}_${br[1]}-@${ratio}.webp ${ratio}` // origin
      data.urls.push(url) // origin, don't delete
      // data.urls.push(`${path} ${ratio}x`) // origin, don't delete
    })
    data.srcset = data.urls.join(', ') // origin
    pic.srcs.push(data)
  })
  // takes for main img url the largest pic, slice removes ratio in the end
  // pic.src = pic.srcs[0].urls.pop()
  pic.src = pic.srcs[0].urls.pop().slice(0, -3) // origin
  return pic
}
export default genPicture
