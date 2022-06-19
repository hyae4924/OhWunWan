'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ohwunwans', [
      {
        user_id: 1,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user1/user1_ohwunwan1.png",
        text_content: "오운완완료!!",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 2,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user2/user2_ohwunwan1.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 3,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user3/user3_ohwunwan1.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 4,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user4/user4_ohwunwan1.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_ohwunwan1.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 1,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user1/user1_ohwunwan2.png",
        text_content: "오운완 ㅎ",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 2,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user2/user2_ohwunwan2.png",
        text_content: "펌핑 굳",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 3,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user3/user3_ohwunwan2.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 4,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user4/user4_ohwunwan2.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_ohwunwan2.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_ohwunwan3.png",
        text_content: "오운완 완료!!!!",
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_ohwunwan4.png",
        text_content: "오늘은쫌 빡셋네요!.",
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_ohwunwan5.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
          ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ohwunwans', null, {})
  }
};

