export const config = {
  bodyParser: {
    raw: {
      type: `application/x-ndjson`
    }
  }
};

export default function(req, res) {
  res.send(`But my body is telling me ${req.body}`)
}
