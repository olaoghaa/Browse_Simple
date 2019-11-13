const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
//const IpMessagingGrant = AccessToken.IpMessagingGrant;
const TWILIO_ACCOUNT_SID = "AC812bbd37d3285959d3b63dee2672c80f";
const TWILIO_CHAT_SERVICE_SID = "ISa330b8e5d7bd453ca988dac5fc029f70";
const TWILIO_API_KEY = "SKbc8f0885e5b98c3ede2414d682783075";
const TWILIO_API_SECRET = "T6VcocuBCdDe2yx63NjKKyaBSNNMj9OV";
//const chatty = AccessToken.ChatGrant;
function TokenGenerator(identity, deviceId) {
  const appName = 'TwilioChat';

  // Create a unique ID for the client on their current device
  const endpointId = appName + ':' + identity + ':' + deviceId;

  // Create a "grant" which enables a client to use IPM as a given user,
  // on a given device
  /*const ipmGrant = new IpMessagingGrant({
    serviceSid: "ISa330b8e5d7bd453ca988dac5fc029f70",
    endpointId: endpointId,
  });*/
  //console.log(process.env.TWILIO_ACCOUNT_SID);
  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  /*const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    process.env.TWILIO_API_SECRET
  );*/

  const token = new AccessToken(
    "AC812bbd37d3285959d3b63dee2672c80f",
    "cd897dff79c271e1c70592826dab4040",
    "T6VcocuBCdDe2yx63NjKKyaBSNNMj9OV"
  );

  const chatGrant = new AccessToken.ChatGrant({
    serviceSid: "ISa330b8e5d7bd453ca988dac5fc029f70",
    endpointId: endpointId,
  });

  //token.addGrant(ipmGrant);
  token.identity = identity;
  token.addGrant(chatGrant);
  const tokenJwt = token.toJwt();
  console.log("token: " + tokenJwt);
  return token;
}
module.exports = { generate: TokenGenerator };

