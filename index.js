const nftName = "K-Birdz Egg";
const description = "K-Birdz, Flappy Bird Style P2E game with K-culture made by youtuber JoCoding";
const hiddenImgUrl = "ipfs://QmbbfqR9EHdEY2Jy2dJYx8jjFftoaMnD6vgKJLMFXemVdL/hidden.mp4";
const totalNum = 5;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}