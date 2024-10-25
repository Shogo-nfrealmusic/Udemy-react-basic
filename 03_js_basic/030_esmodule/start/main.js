import { hello, User } from "./module.js";
import funcB from "./module.js";

hello();
const user = new User('shogo');
user.hello();

funcB();