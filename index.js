const { default: axios } = require("axios");
let express = require("express");
let app = express();

app.get("/", (req, res) => res.send({ status: "ok" }));

console.log("Service start listen in 7000");

app.listen(7000);

const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
let result = "";
for (let i = chars.length; i > 0; --i) {
  result += chars[Math.floor(Math.random() * chars.length)];
}
result = result.slice(0, 6);
console.log(result);
setInterval(() => {
  axios
    .post(
      "http://ping.kristal-internal.com:9000/api/serviceping",
      {
        container_id: result,
        service_name: "reports-generator",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .catch((err) => console.log("Error = ", err));
}, 30000);
