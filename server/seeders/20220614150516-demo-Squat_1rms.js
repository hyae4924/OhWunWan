'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Squat_1rms', [
     {
      user_id: 1,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user1/usr1_squat_60kg.mov",
      text_content: "60kg인증",
      kg:600,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user2/user2_squat_90kg.mov",
      text_content: "90kg인증",
      kg:90,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user3/user3_squat_1rm_130kg.mov",
      text_content: "130 인증!",
      kg:130,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user4/user4_squat_1rm_120kg.mov",
      text_content: "120인증",
      kg:120,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user_5_squat_165kg.mov",
      text_content: "165인증",
      kg:165,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Squat_1rms', null, {})
  }
};

