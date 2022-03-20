const nftName = "BestNFT";                                    //nft name
const symbol = "NFT";                                                //symbol - 2-3-4 letters
const description = "Best NFT EVER MADE";                           //description - best nft ever
const seller_fee = 500;                                             //second market royalty, 500 - 5%
const ImgUrl = "ipfs://tesfjghsdfgldskfg/1.png";                    //img url - "ipfs, arw, local"
const imagetype = "png";                                            //img type - "gif, png, jpg"
const VideoUrl = "ipfs://tesfjghsdfgldskfg/common.mp4";             //video url - "ipfs, arw, local"
const videotype = "mp4";                                            //video type - mp4, mov
const siteurl = "https://testsite.com";                             //your site url
const totalNum = 5;                                                 //how many NFT's
const category = "video";                                           //category - video, image
const address = "dsfgsdfgdsfgfghsldkhfgklsdfhgkjsdh";               //solana wallet address

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{
    "name": "${nftName} #${i}",
    "symbol": "${symbol}",
    "description": "${description}",
    "seller_fee_basis_points": ${seller_fee},
    "image": "${ImgUrl}?ext=${imagetype}",
    "animation_url": "${VideoUrl}?ext=${videotype}",
    "external_url": "${siteurl}",
    "edition": ${i} ,
    "attributes": [
        {
        "trait_type": "Type",
        "value": "CommonPass"
        }
    ],
    "properties": {
        "files": [
            {
            "uri": "${VideoUrl}?ext=${videotype}",
            "type": "video/${videotype}"
            },
            {
            "uri": "${ImgUrl}?ext=${imagetype}",
            "type": "image/${imagetype}"
            }
        ],
        "category": "${category}",
        "creators": [
            {
            "address": "${address}",  
            "share": 100
        }
    ]
}
}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}