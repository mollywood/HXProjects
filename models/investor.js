"use strict";
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be953d307ca5a2946640b1dfefac1ad2f893457c
  var Investor = sequelize.define('Investor', {
    name: DataTypes.STRING,
    investorType: DataTypes.STRING,
    investmentThesis: DataTypes.STRING,
    investmentRange: DataTypes.STRING,
    managedAssets: DataTypes.STRING,
    portfolioSize: DataTypes.STRING,
    foundedDate: DataTypes.STRING,
    location: DataTypes.STRING,
    contact: DataTypes.STRING,
    description: DataTypes.STRING,
    website: DataTypes.STRING,
    bio: DataTypes.STRING(500000),
<<<<<<< HEAD
    logo: DataTypes.STRING
=======
    logo: DataTypes.STRING,
    userid: DataTypes.UUID
>>>>>>> be953d307ca5a2946640b1dfefac1ad2f893457c
  }, {});
  Investor.associate = (models) => {
    // associations can be defined here
  };
<<<<<<< HEAD
=======
  var Investor = sequelize.define(
    "Investor",
    {
      name: DataTypes.STRING,
      investorType: DataTypes.STRING,
      investmentThesis: DataTypes.STRING,
      investmentRange: DataTypes.STRING,
      managedAssets: DataTypes.STRING,
      portfolioSize: DataTypes.STRING,
      foundedDate: DataTypes.STRING,
      location: DataTypes.STRING,
      contact: DataTypes.STRING,
      description: DataTypes.STRING,
      website: DataTypes.STRING,
      bio: DataTypes.STRING,
      logo: DataTypes.STRING,
      userid: DataTypes.UUID
    },
    {}
  );
  Investor.associate = models => {};
>>>>>>> 1ef4eaaa71dc2449cc66437663c4a73b23e6929e
=======
>>>>>>> be953d307ca5a2946640b1dfefac1ad2f893457c
  return Investor;
};
