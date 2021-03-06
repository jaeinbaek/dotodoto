import { CardStates } from "../types/types";
import {
  DEL_TODO,
  ADD_TODO,
  CHECK_TODO,
  ADD_SUBTODO,
  DEL_SUBTODO,
  CHECK_SUBTODO,
  ADD_TAG,
  DEL_TAG,
  ADD_ALERT,
  DEL_ALERT,
  SWITCH_APEARDETAIL,
} from "./../actions/ActionTypes";
import { CardAction } from "./../actions/index";

// Def init state
const initialState: CardStates = {
  lastCardId: 1,
  lastAlertId: 0,
  card: [
    {
      cardId: 1,
      title: "안녕하세요!",
      description: "할 일을 추가해 보세요!",
      user: "두투두투",
      createdAt: "2021-06-26",
      checked: false,
      apearCardDetail: false,
      lastSubTodoKey: 1,
      subTodo: [
        {
          subTodoKey: 0,
          checked: false,
          value: "새 할일 추가 누르기",
        },
        {
          subTodoKey: 1,
          checked: false,
          value: "내용 채우기",
        },
      ],
      lastTagKey: 2,
      tag: [
        {
          tagKey: 0,
          value: "태그1",
        },
        {
          tagKey: 1,
          value: "태그2",
        },
        {
          tagKey: 2,
          value: "태그3",
        },
      ],
    },
  ],
  alert: [],
};

// Reducer
function cards(
  state: CardStates = initialState,
  action: CardAction
): CardStates {
  switch (action.type) {
    case ADD_TODO:
      action.payload.cardId = state.lastCardId + 1;
      return {
        lastCardId: state.lastCardId + 1,
        lastAlertId: state.lastAlertId,
        card: [...state.card, action.payload],
        alert: state.alert,
      };

    case DEL_TODO:
      const delCardResult = state.card.filter(
        (element) => element.cardId !== action.payload
      );
      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: [...delCardResult],
        alert: state.alert,
      };

    case CHECK_TODO:
      let checkCardIndex = state.card.findIndex(
        (element) => element.cardId === action.payload
      );
      let checkCard = state.card[checkCardIndex];
      checkCard.checked = !checkCard.checked;

      let checkCards = state.card;
      checkCards.splice(checkCardIndex, 1);

      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: [...checkCards, checkCard],
        alert: state.alert,
      };

    case ADD_SUBTODO:
      // Card to add subtodo
      let addSubTodoCardIndex = state.card.findIndex(
        (element) => element.cardId === action.payload.cardId
      );
      let addSubTodoCard = state.card[addSubTodoCardIndex];
      // New subtodo obj
      let newSubtodo = {
        subTodoKey: addSubTodoCard.lastSubTodoKey + 1,
        checked: false,
        value: action.payload.subTodoValue,
      };
      addSubTodoCard.lastSubTodoKey++;
      // Push new subtodo to clone of card state
      addSubTodoCard.subTodo?.push(newSubtodo);
      // Splice old card from clone state
      let addSubTodoCards = state.card;
      addSubTodoCards.splice(addSubTodoCardIndex, 1);
      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: [...addSubTodoCards, addSubTodoCard],
        alert: state.alert,
      };

    case DEL_SUBTODO:
      // Card to delete subtodo
      let delSubTodoCardIndex = state.card.findIndex(
        (element) => element.cardId === action.payload.cardId
      );
      let delSubTodoCard = state.card[delSubTodoCardIndex];
      delSubTodoCard.subTodo = delSubTodoCard.subTodo.filter((element) => {
        return element.subTodoKey !== action.payload.subTodoId;
      });
      // Splice old card from clone state
      let delSubTodoCards = state.card;
      delSubTodoCards.splice(delSubTodoCardIndex, 1);
      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: [...delSubTodoCards, delSubTodoCard],
        alert: state.alert,
      };

    case CHECK_SUBTODO:
      // Card to add subtodo
      let checkSubTodoCardIndex = state.card.findIndex(
        (element) => element.cardId === action.payload.cardId
      );
      let checkSubTodoCard = state.card[checkSubTodoCardIndex];
      let checkSubTodoIndex = checkSubTodoCard.subTodo.findIndex(
        (element) => element.subTodoKey === action.payload.subTodoKey
      );

      let checkSubTodo = checkSubTodoCard.subTodo[checkSubTodoIndex];
      checkSubTodo.checked = !checkSubTodo.checked;

      let checkSubTodos = checkSubTodoCard.subTodo;
      checkSubTodos.splice(checkSubTodoIndex, 1);
      checkSubTodos = [...checkSubTodos, checkSubTodo];

      checkSubTodoCard.subTodo = checkSubTodos;
      // Splice old card from clone state
      let checkSubTodoCards = state.card;
      checkSubTodoCards.splice(checkSubTodoCardIndex, 1);
      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: [...checkSubTodoCards, checkSubTodoCard],
        alert: state.alert,
      };

    case ADD_TAG:
      // Card to add tag
      let addTagCardIndex = state.card.findIndex(
        (element) => element.cardId === action.payload.cardId
      );
      let addTagCard = state.card[addTagCardIndex];
      // New tag obj
      let newTag = {
        tagKey: addTagCard.lastTagKey + 1,
        checked: false,
        value: action.payload.tagValue,
      };
      addTagCard.lastTagKey++;
      // Push new tag to clone of card state
      addTagCard.tag?.push(newTag);
      // Splice old card from clone state
      let addTagCards = state.card;
      addTagCards.splice(addTagCardIndex, 1);
      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: [...addTagCards, addTagCard],
        alert: state.alert,
      };

    case DEL_TAG:
      // Card to delete tag
      let delTagCardIndex = state.card.findIndex(
        (element) => element.cardId === action.payload.cardId
      );
      let delTagCard = state.card[delTagCardIndex];
      delTagCard.tag = delTagCard.tag.filter((element) => {
        return element.tagKey !== action.payload.tagId;
      });
      // Splice old card from clone state
      let delTagCards = state.card;
      delTagCards.splice(delTagCardIndex, 1);
      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: [...delTagCards, delTagCard],
        alert: state.alert,
      };

    case ADD_ALERT:
      let newAlert = {
        alertId: state.lastAlertId + 1,
        type: action.payload.type,
        value: action.payload.value,
        cardId: action.payload.cardId,
      };
      let copyOfAlert = state.alert;
      // Keep number of alert 2
      if (copyOfAlert.length > 1) {
        copyOfAlert.shift();
      }
      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId + 1,
        card: state.card,
        alert: [...copyOfAlert, newAlert],
      };

    case DEL_ALERT:
      const delAlertResult = state.alert.filter(
        (element) => element.alertId !== action.payload
      );
      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: state.card,
        alert: [...delAlertResult],
      };

    case SWITCH_APEARDETAIL:
      let switchCardIndex = state.card.findIndex(
        (element) => element.cardId === action.payload
      );
      let switchCard = state.card[switchCardIndex];
      switchCard.apearCardDetail = !switchCard.apearCardDetail;

      let switchCards = state.card;
      switchCards.splice(switchCardIndex, 1);

      return {
        lastCardId: state.lastCardId,
        lastAlertId: state.lastAlertId,
        card: [...switchCards, switchCard],
        alert: state.alert,
      };

    default:
      return state;
  }
}

export default cards;
