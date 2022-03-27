import axios from "axios";
import { Buffer } from "buffer";

const getImage = async () => {
  const img = await axios
    .get("https://source.unsplash.com/random", {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      const imageData = res.data;

      return Buffer.from(imageData).toString("base64");
    });

  return img;
};

export default getImage;
