class ZipMetaDTO{
    constructor(zip){
        this.zipCode = zip.zipCode;
        this.country = zip.country;
        this.state = zip.state;
    }
}

module.exports = ZipMetaDTO;