"use strict";

const getProducts = require("./index").getProducts;

const myPact = require("../pacts/client-productservice.json");
const getProductList = myPact.interactions[0];

describe("Product's API", () => {
  let url = "http://localhost";

  const EXPECTED_BODY = [
    {
      name: "Foo"
    }
  ];

  describe("works", () => {
    beforeEach(() => {
      const interaction = {
        state: getProductList.providerState,
        uponReceiving: getProductList.description,
        withRequest: getProductList.request,
        willRespondWith: getProductList.response
      };
      return provider.addInteraction(interaction);
    });

    // add expectations
    it("returns a sucessful body", done => {
      return getProducts({
        url,
        port
      })
        .then(response => {
          //expect(response.headers["content-type"]).toEqual("application/json");
          expect(response.data).toEqual(EXPECTED_BODY);
          expect(response.status).toEqual(200);
          done();
        })
        .then(() => provider.verify());
    });
  });
});
