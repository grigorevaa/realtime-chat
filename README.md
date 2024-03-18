# Realitime chat

A simple chat with authorization and authentication.
Simple front-end without adaptive design.
Backend with usage of supabase + supabase-realtime feature.

Functionality:

1. Registration and authorization
2. Change some user information
3. Create chat rooms and chat inside of them separately from other rooms
4. Share chat's link with other users to invite them

**Technology Stack**

1. React
2. ReactQuery
3. Styled-components
4. Supabase (+Supabase Realitime)

## Authorization

Users should make an account to get access to creating chats/joining chats.
Authentication is automatically provided by the supabase features (JWT)

## User accounts

Users can change their password, nickname and avatar.
Users can not change their email.

## Chats

Users can create chat-rooms and send messages inside them.
Users can share chat's link to invite friends.
Users also can see active users in the chat.
