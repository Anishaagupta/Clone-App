import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "username",
  name: "name",
  profile_image:
    "https://i.pinimg.com/236x/13/78/74/1378740e020a71df711b2885c28286c5.jpg",
  // profile_image:
  // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://www.smartertravel.com/uploads/2020/03/ST_ZoomBackground_Beach03.jpg",
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class="">Lovely Weather, Glad to be here</span>`,
  user: defaultUser,
  media:
    "https://www.smartertravel.com/uploads/2020/03/ST_ZoomBackground_Beach03.jpg",
  comments: [],
  created_at: "2020-10-18T03:08:14.522421+00:00",
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Lovely Weather</span>`,
    user: defaultUser,
    media:
      "https://www.smartertravel.com/uploads/2020/03/ST_ZoomBackground_Beach03.jpg",
    comments: [],
    created_at: "2020-10-28T03:08:14.522421+00:00",
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-11-22T03:08:14.522421+00:00",
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultPost,
    created_at: "2020-11-29T03:08:14.522421+00:00",
  },
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "me",
  name: "myself",
  profile_image:
    "https://i.pinimg.com/236x/13/78/74/1378740e020a71df711b2885c28286c5.jpg",
  website: "https://anishagupta.me",
  email: "me@gmail.com",
  bio: "This is my bio",
  phone_number: "122-122-122",
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser],
};
