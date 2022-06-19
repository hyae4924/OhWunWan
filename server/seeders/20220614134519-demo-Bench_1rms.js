'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bench_1rms', [
     {
      user_id: 1,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user1/user1_bench_65kg.mov",
      text_content: "65kg인증",
      kg:65,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user2/user2_bench_1rm_70kg.mov",
      text_content: "70kg인증",
      kg:70,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user3/user3_bench_1rm_90kg.mov",
      text_content: "90 인증! 버어억",
      kg:90,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user4/user4_bench_1rm_120kg.mov",
      text_content: "120인증",
      kg:120,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_bench_130kg.mov",
      text_content: "130인증",
      kg:130,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bench_1rms', null, {})
  }
};
