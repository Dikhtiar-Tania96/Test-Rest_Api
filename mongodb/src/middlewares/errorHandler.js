export async function errorHandler(error, req, res, next){
  console.error(error);
  res.status(500).send({message: 'Internal Server Error'})//помилка зі сторони серверу
}