import main from "../content/main.md";

main.html = main.html.replace(/^\t{3}/gm, '');

const content = JSON.stringify(main);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(content);
}