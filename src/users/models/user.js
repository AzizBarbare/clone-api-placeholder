// export class User {
//     constructor(id,name,username, email, address,geo,  phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.address.geo = geo ;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }

//     // address: {
//     //     "street": "Kulas Light",
//     //     "suite": "Apt. 556",
//     //     "city": "Gwenborough",
//     //     "zipcode": "92998-3874",
//     //     "geo": {
//     //       "lat": "-37.3159",
//     //       "lng": "81.1496"
//     //     }

//     // "company": {
//     //     "name": "Romaguera-Crona",
//     //     "catchPhrase": "Multi-layered client-server neural-net",
//     //     "bs": "harness real-time e-markets"
//     //   }

//     // geo": {
//     //     "lat": "-37.3159",
//     //     "lng": "81.1496"
//     //   }

// }

import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  title: String,
  author: String,
  body: String,
  geo: {
    lat: Number,
    lon: Number,
  },
});
export const User = mongoose.model("User", userSchema, "users");
