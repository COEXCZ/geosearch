import { Mapy } from "./index";

const bounds: any = { sw: null };

Mapy.geoocode("Praha", {
  scope: "muni",
  bounds: bounds
})
  .then(data => console.log("Results async", data))
  .catch(e => {
    console.log("users catch", e);
  });
