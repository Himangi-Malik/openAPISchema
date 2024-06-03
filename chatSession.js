// Function to create a chat session
function createChatSession(apiKey, externalUserId) {
    const url = 'https://gateway-dev.on-demand.io/chat/v1/sessions';
    const headers = { 'apikey': apiKey };
    const body = { "pluginIds": [], "externalUserId": externalUserId };

    // Make POST request to create chat session
    // Include code to handle response
}

// Function to answer query using session ID
function answerQuery(apiKey, sessionId, query) {
    const url = `https://gateway-dev.on-demand.io/chat/v1/sessions/${sessionId}/query`;
    const headers = { 'apikey': apiKey };
    const body = { "endpointId": "predefined-openai-gpt4o", "query": query, "pluginIds": ["plugin-1717437831", "plugin-1717340460"], "responseMode": "sync" };

    // Make POST request to answer query
    // Include code to handle response
}

// Example usage
const apiKey = '';
const externalUserId = '<replace_external_user_id>';

// Create chat session
createChatSession(apiKey, externalUserId);

// Assuming sessionId is obtained from the response of createChatSession
const sessionId = '12345'; // Example session ID

query = //add the response from the input box
// Answer query
answerQuery(apiKey, sessionId, query);
