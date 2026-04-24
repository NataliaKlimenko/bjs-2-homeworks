const { compareArrays, getUsersNamesInAgeRange, people } = require('./task.js');

describe("Домашнее задание к занятию 3 «Массивы»", () => {
  describe("Задача №1 Сравнить массивы", () => {
    it("[1,2,3] === [1,2,3]  true", () => {
      expect(compareArrays([1, 2, 3], [1, 2, 3])).toEqual(true);
    });

    it("[1, 2], [1, 2, 3] false", () => {
      expect(compareArrays([1, 2], [1, 2, 3])).toEqual(false);
    });

    it("[1, 2, 3] === [3, 2, 1] false", () => {
      expect(compareArrays([1, 2, 3], [3, 2, 1])).toEqual(false);
    });

    it("[0, 1, 2] === [0, 1] false", () => {
      expect(compareArrays([0, 1, 2], [0, 1])).toEqual(false);
    });

    it("[0, 1] === [0, 1, 2] false", () => {
      expect(compareArrays([0, 1], [0, 1, 2])).toEqual(false);
    });
    it("[8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5] false", () => {
      expect(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])).toEqual(false);
    });
  });

  describe("Задача №2 Получение среднего возраста пользователей одного пола", () => {
    

    it("Средний возраст мужчин", () => {
      expect(getUsersNamesInAgeRange(people, "мужской")).toEqual(32);
    });
    it("Средний возраст женщин", () => {
      expect(getUsersNamesInAgeRange(people, "женский")).toEqual(27.4);
    });

    it("Средний возраст мужской пустого массива должен быть равен нулю", () => {
      expect(getUsersNamesInAgeRange([], "мужской")).toEqual(0);
    });

    it("Средний возраст несуществующего пола должен быть равен нулю", () => {
      expect(getUsersNamesInAgeRange(people, "инопланетянин")).toEqual(0);
    });
  });
});
