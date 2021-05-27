
const getImageToday = async (req, res) => {
  try {
    const data = requestApi();
    let image = JSON.paras(data);
    const image2 = new Image(image);
    let user = req.params.user;
    image2.user = user;
    await image2.save();
    let userArray = await user.findByIdAndUpdate(req.params.user, { $push: { Images: image2._id } });
    await userArray.save();
    res.status(200).json({ "the new image is": image2 })
  }
  catch (error) {
    res.status(200).send(error);
  }
}

const requestApi = (data) => {
  return new Promise((resolve, reject) => {
    let options = {
      method: "GET",
      url: 'https://api.nasa.gov/planetary/apod?api_key=vTRHEPsxtqQAEOzgjfAyxmzmyUgdj4fK3DmOSS59'
      // AxYmZ2SvB2PTSWPxZAiityAhRqk4cgPndlrKE6YU

    }
    request(options, (err, res, body) => {
      if (err)
        reject(err)

      else {
        resolve(body)
      }
    })
  })
}
const getAllImages = async (req, res) => {
  try {
    let images = await Image.find({ "user": req.params.user });
    if (images < 1) {
      res.status(200).send({ "massage": " you don't have pictures" })
    }
    else {
      res.status(200).json({ images });
    }
  }
  catch (error) {
    res.status(500).json({ error })
  }
}
const getImageById = async (req, res) => {
  try {
    let image = await Image.findById(req.params.id);
    res.send(image);
  }
  catch (error) {
    res.status(500).json({ error })
  }
}

const newImageUser = async (req, res) => {
try{
  const newImage= await new Image(req.body);
  let user=req.params.user;
  newImage.user=user;
  await newImage.save();
  let userArray=await User.findByIdAndUpdate(req.params.user,{$push:{Images: newImage._id}});
  await userArray.save();
  res.status(200).json({newImage: newImage});
}
catch (error)
 {
   res.status(500).json({error: error});
 }
}


module.exports = { getImageToday, getAllImages, getImageById, newImageUser }