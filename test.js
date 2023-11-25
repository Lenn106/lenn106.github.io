//  this is a webhook test thing ik yall guys are gonna spam it so im deleting the webhook  after tis
function send() {
    var url = 'https://discord.com/api/webhooks/1177779360497946705/SnV55qlUgwgEOqHP1KX8uqAHN7FL3lSiVab2daxyZsGY6UiCafTrnbVNS5iCOsSsS7ui';
    var message = 'csp test'; 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ content: message }));
}
