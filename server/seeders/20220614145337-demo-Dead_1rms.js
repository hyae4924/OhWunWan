'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dead_1rms', [
     {
      user_id: 1,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user1/user1_dead_105kg.mov",
      text_content: "105kg인증",
      kg:105,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user2/user2_dead_1rm_100kg.mov",
      text_content: "100kg인증",
      kg:100,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user3/user3_dead_1rm_120kg.mov",
      text_content: "120 인증!",
      kg:120,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user4/user4_dead_1rm_160kg.mov",
      text_content: "160인증",
      kg:160,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_1rm_dead_192kg.mov",
      text_content: "192인증",
      kg:192,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dead_1rms', null, {})
  }
};
