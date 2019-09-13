// Save application's data here as array of objects
var friendArray = [{
      name: "Yoshi",
      photo: "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F606154%252Faf09fee1-618f-4f51-9a1c-1e1621504be3.png%252F950x534__filters%253Aquality%252880%2529.png?signature=8eJFnWwsn9rxlGPTK45a0J1Ob2Q=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
      scores: ["2", "1", "4", "3", "3", "5", "2", "1", "4", "3"]
   },
   {
      name: "Pikachu",
      photo: "https://i.kinja-img.com/gawker-media/image/upload/t_original/1534266336074824848.jpg",
      scores: ["5", "4", "5", "2", "1", "4", "3", "1", "4", "2"]
   }
];

// Export the file so that we can access it via require
module.exports = friendArray;