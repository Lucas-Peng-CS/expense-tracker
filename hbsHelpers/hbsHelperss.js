// module.exports = {
//   categoryIcon: function (records, categories) {
//     // console.log(records);
//     // console.log(categories);

//     const a = categories.find((category) => records.includes(category.name));

//     return a || "<i class='fas fa-home'></i>";
//   }
// };

module.exports = {
  categoryTurnIcon: function (recordsCategory) {
    console.log(recordsCategory);
    const home = "餐飲食品";
    const a = "交通出行";

    if (recordsCategory === home) {
      return "fas fa-home";
    } else if (recordsCategory === a) {
      return "fas fa-shuttle-van";
    } else if (recordsCategory === "休閒娛樂") {
      return "fas fa-grin-beam";
    } else if (recordsCategory === home) {
      return "fas fa-utensils";
    } else if (recordsCategory === "其他") {
      return "fas fa-pen";
    }
  },
  categorySelected: function (a, b) {
    if (a === b) {
      return "selected";
    }
  },
};
