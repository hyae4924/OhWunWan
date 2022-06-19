'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Feedbacks', [
     {
      id:1,
      user_id: 1,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user1/user1_feedback1.mov",
      text_content: "자세좀 봐주세요!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      id:2,
      user_id: 2,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user2/user2_feedback1.mov",
      text_content: "자세좀 봐주세요!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      id:3,
      user_id: 3,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user3/user3_feedback.mov",
      text_content: "자세좀 봐주세요!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      id:4,
      user_id: 4,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user4/user4_feedback.mov",
      text_content: "자세좀 봐주세요!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      id:5,
      user_id: 5,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_feedback.mov",
      text_content: "자세좀 봐주세요!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
    
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Feedbacks', null, {})
  }
};
