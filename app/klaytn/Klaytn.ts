import { ethers } from "ethers";

class Klaytn {
  public provider = new ethers.JsonRpcProvider(
    "https://public-en-cypress.klaytn.net",
  );
}

export default new Klaytn();
