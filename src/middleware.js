export const validateApiKey = (req,res,next) => {
  const apiKey = req.headers['api-key'] || req.body.apiKey;
  if(apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({message: 'Access denied. Invalid API key.'});
  }
}