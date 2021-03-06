class KanbanService {
  data = {
    boards: {
      byId: {
        1: {
          id: 1,
          title: 'План на месяц',
          cardIds: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        2: {
          id: 2,
          title: 'План на день',
          cardIds: [9, 10, 11]
        }
      },
      allIds: [1, 2]
    },
    cards: {
      byId: {
        1: {
          id: 1,
          text: 'Пройти курс по React'
        },
        2: {
          id: 2,
          text: 'Отметить день рождения'
        },
        3: {
          id: 3,
          text: 'Записаться на курсы английского языка, чтобы уехать в Лондон'
        },
        4: {
          id: 4,
          text: 'Сделать бекенд своего сайта на node.js'
        },
        5: {
          id: 5,
          text: 'Собрать портфолио'
        },
        6: {
          id: 6,
          text: 'Написать первую статью в блог'
        },
        7: {
          id: 7,
          text:
            'Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но очень хочется. Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В общем, хотя бы подумать над этим.'
        },
        8: {
          id: 8,
          text: 'Нет, я серьезный человек, иду в мотошколу. Записываюсь!'
        },
        9: {
          id: 9,
          text: 'Записаться на курс по React'
        },
        10: {
          id: 10,
          text: 'Забронировать тир на субботу'
        },
        11: {
          id: 11,
          text: 'Накидать тем для статей в блог'
        }
      },
      allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }
  };

  getData() {
    return new Promise(res => res(this.data));
  }
}

export default KanbanService;
