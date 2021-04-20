const cron = require("node-cron");
const got = require("got");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export class VotesService {
  PETITION_URL_PATH = "https://petition.president.gov.ua/petition/114468";
  store = {
    value: null
  }

  constructor() {
    this.initStore();
  }

  async initStore() {
    const votes = await this.fetchVotes();
    this.store.value = votes;

    cron.schedule("0 * * * *", async () => {
      console.log(`fetching votes from ${this.PETITION_URL_PATH}`);
      const votes = await this.fetchVotes();
      this.store.value = votes;
    });
  }

  async fetchVotes() {
    try {
      const response = await got(this.PETITION_URL_PATH);
      const dom = new JSDOM(response.body);
      const votes = dom.window.document.querySelector('.petition_votes_txt span').textContent;
      return votes;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}

