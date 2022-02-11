// db.collection("apartments").onSnapshot((d) => {
//   d.docs.map((d) => {
//     db.collection("city")
//       .doc("mUYWZuKZD09ZGo4flvCm")
//       .collection("locality")
//       .doc("a9OhS5nl3TZSVsUpSXaF")
//       .collection("catalogue")
//       .doc()
//       .set({
//         ...d.data(),
//       })
//       .then((d) => {});
//   });
// });

db.collection("city")
  .where("name", "==", "Bangalore")
  .get()
  .then((d) => {
    if (d.docs.length) {
      // city doc already exists

      d.docs[0].ref
        .collection("locality")
        .where("name", "==", "Whitefield")
        .get()
        .then((dd) => {
          if (dd.docs.length) {
            dd.docs[0].ref
              .collection("catalogue")
              .doc("newnewnewnew")
              .set({
                sdsdd: "sdsda",
              })
              .then((ddd) => {
                console.log("done");
              });
          } else {
            // create new docs for its locality
          }
        });
    } else {
      // create new docs for its city
    }
  });
