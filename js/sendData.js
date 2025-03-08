export async function sendData(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            console.log("SUCCESS: ", result);
            return true;
        } else {
            console.error("ERROR: ", response.status, response.statusText);
            return false;
        }
    } catch (error) {
        console.error("ERROR: ", error.message);
        return false;
    }
}
