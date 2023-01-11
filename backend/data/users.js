import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tomi Verhoeven",
    email: "tomi@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Linn Townsend",
    email: "linn@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Terese Paulauskas",
    email: "terese@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Amaru Boerio",
    email: "amaru@example.com",
    password: bcrypt.hashSync("123456", 10),
  },  
  {
    name: "Marco Sousa",
    email: "marco@example.com",
    password: bcrypt.hashSync("123456", 10),
  },  
  {
    name: "Arundhati Jakobsen",
    email: "arundhati@example.com",
    password: bcrypt.hashSync("123456", 10),
  },  
  {
    name: "Babette Ognianov",
    email: "babette@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
