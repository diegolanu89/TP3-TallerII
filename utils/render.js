function responder(req, res, data, renderHtmlFn) {
    if (req.accepts('html')) {
        const html = renderHtmlFn(data);
        return res.send(html);
    }
    if (req.accepts('json')) {
        return res.json(data);
    }
    return res.json(data);
}

module.exports = responder;
