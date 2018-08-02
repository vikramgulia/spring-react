export const checkSecurityFromServer = async () => {
    const response = await fetch(`/api/security`)
    const json = await response.json()
    const security = await json.isSecure
    return security
}

export const loginInto = async (formData) => {
    var formBody = []
    for (var property in formData) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(formData[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    const response = await fetch(`/api/login`, {
        method: 'POST',
        body: formBody.join("&"),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    })

    if (response.ok) {
        const json = await response.json()
        return {
            success: true,
            message: json.username
        };
    } else {
        return {
            success: false,
            message: response.statusText
        };
    }
}