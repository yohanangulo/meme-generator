export const getMemes = async() => { 
 const res = await fetch('https://api.imgflip.com/get_memes')
 return res.json()
}