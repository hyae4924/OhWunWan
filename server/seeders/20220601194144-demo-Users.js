'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id:1,
        kakao_id:2227222989,
        nickname: '남순이',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user1/user1_profile_picture.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        kakao_id:2237242531,
        nickname: '감스트',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user2/user2_profile_picture.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        kakao_id:2247242325,
        nickname: '킴기훈',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user3/user3_profile_picture.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        kakao_id:2237242621,
        nickname: '명현만',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user4/user4_profile_picture.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:5,
        kakao_id:2227224929,
        nickname: '말왕',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/user5/user5_profile_picture.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
