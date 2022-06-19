'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Feedback_comments', [
      {
        user_id: 1,
        feedback_id: 1,
        text_content: "ㅋㅋㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        feedback_id: 1,
        text_content: "무게를쫌 낮춰라 남순아",
        selection:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        feedback_id: 1,
        text_content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        feedback_id: 1,
        text_content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        feedback_id: 1,
        text_content: "고생했어 남순ㅎ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        user_id: 1,
        feedback_id: 2,
        text_content: "ㅋㅋㅋㅋㅋ잘하노",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        feedback_id: 2,
        text_content: "무게를 더올려도되긋다 지기야",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        feedback_id: 2,
        text_content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        feedback_id: 2,
        text_content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        feedback_id: 2,
        text_content: "고생했어 지기ㅎ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        user_id: 1,
        feedback_id: 3,
        text_content: "ㅋㅋㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        feedback_id: 3,
        text_content: "ㅋㅋㅋㅋ햄ㅂ컥",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        feedback_id: 3,
        text_content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        feedback_id: 3,
        text_content: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        feedback_id: 3,
        text_content: "고생했어 키훈ㅎ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        feedback_id: 4,
        text_content: "오우야",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        feedback_id: 4,
        text_content: "굳",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        feedback_id: 4,
        text_content: "굳굳",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        feedback_id: 4,
        text_content: "굳굳굳",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        feedback_id: 4,
        text_content: "고생하셨습니다 현만이형님ㅎ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        feedback_id: 5,
        text_content: "야무지네~",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        feedback_id: 5,
        text_content: "야무져~",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        feedback_id: 5,
        text_content: "잘하노~",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        feedback_id: 5,
        text_content: "잘해~",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Feedback_comments', null, {})
  }
};

