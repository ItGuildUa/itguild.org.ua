import main from "../content/main.md";
import { VotesService } from "../services/votes.service";

const votesService = new VotesService();

main.html = main.html.replace(/^\t{3}/gm, '');

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  const dataToSend = JSON.stringify({ content: main, votes: votesService.store.value });

  res.end(dataToSend);
}