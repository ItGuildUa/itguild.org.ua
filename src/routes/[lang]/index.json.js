import man from "../../content/manifesto-en.md";

man.html = man.html.replace(/^\t{3}/gm, '');

const content = JSON.stringify(man);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(content);
}