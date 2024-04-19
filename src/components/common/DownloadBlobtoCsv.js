const DownloadBlobtoCsv = (fileNameData,fileBlob) => {

    return `data:text/csv;base64,${fileBlob}`;

};


export default DownloadBlobtoCsv;