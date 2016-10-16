
var httpGet = Packages.utils.TestUtils.httpGet;
var assertEquals = Packages.org.junit.Assert.assertEquals;
var text = "Hi from wilton_require_test!";

requirejs.config({
    baseUrl: './js/'
});

require(["wilton"], function (wilton) {

    var server = new wilton.Server({
        tcpPort: 8080,
        views: {
            "/hi": function (req, resp) {
                resp.send(text);
            }
        }
    });

    assertEquals(text, httpGet("http://127.0.0.1:8080/hi"));

    server.stop();

});
