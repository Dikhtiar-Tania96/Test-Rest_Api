 // src/index.js 

//  import express from 'express';
//  const app = express();
//  const PORT = 3000;
//  app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
//  });
 
 import express from 'express';
  const app = express();

app.get("/movies", (req, res) => {
    res.send([
        {
            title: 'film 1',
            year: 2020
        },
        {
            title: 'film 2',
            year: 2024
        }, 
        {
            title: 'film 3',
            year: 2021
        },
       
    ])
})

  app.listen(8080, () => [
    console.log('Server started on port 8080')
  ])