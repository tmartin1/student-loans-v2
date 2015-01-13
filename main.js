// Defines global variables for payment calculations, default values, and results.
var variables = {
  povertyBase: 0,
  povertyAdj: 0,
  nForgive: 240, //long-term forgiveness timeline (currently 20 months)
//state specific poverty lines and sdjustments for IBR, PAYE, and ICR calcs
  povertyBase48: 11670,
  povertyAdj48: 4060,
  povertyBaseAK: 14580,
  povertyAdjAK: 5080,
  povertyBaseHI: 13420,
  povertyAdjHI: 4670
};

var defaults = {
  AGI: 0,
  householdSize: 1,
  state: "AL",
  pslfpQulaify: "No",
  totalBalance: 200000,
  balances: [],
  rates: [],
  r: 0, //effective interest rate (will be input rate/12)
  weightedAverage: 0
};

var results = {
    stdLevel: {},
    stdGrad: {},
    extLevel: {},
    extGrad: {},
    ibr: {},
    paye: {},
    icr: {}
};


// Build models for application.











