import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  friends: [
    // Existing friend objects...

    {
      id: 2,
      name: "Alex",
      picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
      latest_timestamp: "10:00 AM",
      lastChat:
        "Or maybe not, let me check logistics and call you. Give me sometime",
    },
    {
      id: 3,
      name: "Bob",
      picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
      latest_timestamp: "12:30 AM",
      lastChat: "Alright",
    },
    {
      id: 4,
      name: "Luke",
      picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
      latest_timestamp: "4:12 PM",
      lastChat: "I will look into it",
    },
    {
      id: 5,
      name: "Bane",
      picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
      latest_timestamp: "7:53 PM",
      lastChat: "Exactly my point!",
    },
    {
      id: 6,
      name: "Darth Vader",
      picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
      latest_timestamp: "1:09 PM",
      lastChat: "Not quite the same.",
    },
    {
      id: 7,
      name: "Zach",
      picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
      latest_timestamp: "Yesterday",
      lastChat: "I thought that the event was over long ago",
    },
    {
      id: 8,
      name: "Katie",
      picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
      latest_timestamp: "Yesterday",
      lastChat: "nothing",
    },
    {
      id: 9,
      name: "Chloe",
      picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
      latest_timestamp: "Wednesday",
      lastChat: "sure i'll take it from you",
    },
    {
      id: 10,
      name: "Kennith",
      picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
      latest_timestamp: "Wednesday",
      lastChat: "Take care, bye",
    },
    {
      id: 11,
      name: "Tara",
      picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
      latest_timestamp: "Monday",
      lastChat: "Not today",
    },
    {
      id: 12,
      name: "Gary",
      picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
      latest_timestamp: "Sunday",
      lastChat: "Whatever works for you!",
    },
    {
      id: 13,
      name: "Zoey",
      picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
      latest_timestamp: "8/12/2017",
      lastChat: "Will get in touch",
    },
    {
      id: 14,
      name: "Ash",
      picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
      latest_timestamp: "6/12/2017",
      lastChat: "Ok",
    },
    {
      id: 15,
      name: "Zen",
      picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
      latest_timestamp: "19/11/2017",
      lastChat: "Lol",
    },
    {
      id: 16,
      name: "A'Koba",
      picture: "",
      status: "Available",
      lastChat: "Hey, are you free to talk?",
    },
    {
      id: 17,
      name: "Bob",
      picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 18,
      name: "Luke",
      picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 19,
      name: "Bane",
      picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 20,
      name: "Darth Vader",
      picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 21,
      name: "Zach",
      picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 22,
      name: "Katie",
      picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 23,
      name: "Chloe",
      picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 24,
      name: "Kennith",
      picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 25,
      name: "Tara",
      picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 26,
      name: "Gary",
      picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 27,
      name: "Zoey",
      picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 28,
      name: "Ash",
      picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 29,
      name: "Zen",
      picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
      status: "Busy",
      lastChat:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
    {
      id: 30,
      name: "A'Koba",
      picture: "",
      status: "Busy",
      lastChat: "Hey, are you free to talk?",
    },
    {
      id: 31,
      name: "Zen",
      picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
      status: "Busy",
      lastChat: "Sorry, I'm currently busy. Can we talk later?",
    },
    {
      id: 32,
      name: "Ash",
      picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
      status: "Busy",
      lastChat: "In a meeting right now. Can't chat at the moment.",
    },
    {
      id: 33,
      name: "Zoey",
      picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
      status: "Busy",
      lastChat: "Sorry, I'm currently occupied. What's up?",
    },
    {
      id: 34,
      name: "Gary",
      picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
      status: "Busy",
      lastChat: "Can't talk right now. Will get back to you soon.",
    },
    {
      id: 35,
      name: "Tara",
      picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
      status: "Busy",
      lastChat: "Hey, I'm in a meeting. Can I call you later?",
    },
    {
      id: 36,
      name: "Kennith",
      picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
      status: "Busy",
      lastChat: "Sorry, I can't chat right now. What's up?",
    },
    {
      id: 37,
      name: "Chloe",
      picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
      status: "Busy",
      lastChat: "I'm currently busy. Can we talk later?",
    },
    {
      id: 38,
      name: "Katie",
      picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
      status: "Busy",
      lastChat: "In a meeting right now. Let's chat afterwards.",
    },
    {
      id: 39,
      name: "Zach",
      picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
      status: "Busy",
      lastChat: "Sorry, I'm busy at the moment. Can we talk later?",
    },
    {
      id: 40,
      name: "Darth Vader",
      picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
      status: "Busy",
      lastChat: "I'm currently occupied. What do you need?",
    },
    {
      id: 41,
      name: "Bane",
      picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
      status: "Busy",
      lastChat: "Can't chat right now. Will get back to you later.",
    },
    {
      id: 42,
      name: "Luke",
      picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
      status: "Busy",
      lastChat: "Hey, I'm in a meeting. Can I call you later?",
    },

 
  ],
};

const createMessage = createSlice({
  name: "comments",
  initialState: {
    initialData: initialData.friends,
  },
  reducers: {
    addMessageToChat: (state, action) => {
      const updatedMessages = { ...action.payload };
  
      state.initialData.push(updatedMessages)
    },
  },
});

export const { addMessageToChat } = createMessage.actions;
export default createMessage.reducer;
