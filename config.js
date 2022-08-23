const nftTotal = 100;
// github账户地址/仓库地址/分支地址(通常为main)/图片所在路径
const githubAccounts = "zhchiEarth";
const githubRepositories = "NFTmetadata";
const githubBranch = "main";
const imagesPath = "metadata/images";

const nftImageMax = 100;

const basePath = `https://raw.githubusercontent.com/${githubAccounts}/${githubRepositories}/${githubBranch}/${imagesPath}`;

module.exports = { nftTotal, basePath, nftImageMax };
