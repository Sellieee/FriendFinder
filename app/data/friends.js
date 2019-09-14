// Save application's data here as array of objects
var friends = [{
      "name": "Yoshi",
      "photo": "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F606154%252Faf09fee1-618f-4f51-9a1c-1e1621504be3.png%252F950x534__filters%253Aquality%252880%2529.png?signature=8eJFnWwsn9rxlGPTK45a0J1Ob2Q=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
      "scores": [2, 1, 4, 3, 3, 4, 1, 5, 3, 4]
   },
   {
      "name": "Pikachu",
      "photo": "https://i.kinja-img.com/gawker-media/image/upload/t_original/1534266336074824848.jpg",
      "scores": [5, 1, 4, 5, 2, 3, 1, 4, 5, 2]
   }, {
      "name": "Ahmed",
      "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
   },
   {
      "name": "Salami",
      "photo": "https://tasteofartisan.com/wp-content/uploads/2019/01/Homemade-salami-Milano-1.jpg",
      "scores": [1, 2, 5, 3, 4, 5, 2, 1, 2, 3]
   }
];

// Export the file so that we can access it via require
module.exports = friends;