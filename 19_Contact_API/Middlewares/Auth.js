
export const isAuthenticated = (req, res, next) => {
  const token = req.header('Auth')

  console.log("check token", token);
  
};