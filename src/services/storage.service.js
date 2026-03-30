const imagekit = require('@imagekit/nodejs');

const imagekit = new imagekit({

    privateKey: "private_pPUNUXlKMylf+Q7kaJEWAcG32LA=",
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
})

async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: `image.jpg`,
    });
    return result;
}

module.exports = {
    uploadFile,
}