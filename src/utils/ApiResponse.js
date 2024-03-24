class ApiResponse {
    constructor (statsuCode, data, message = "Success")
    {
        this.statsuCode = statsuCode
        this.data = data
        this.message = message
        this.success = statsuCode < 400
    }
}