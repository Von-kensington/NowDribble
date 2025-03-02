# NowDribble

NowDribble is a workout tracking app built with **React Native, Expo, and Firebase**. It allows users to track their **workout progress, scores, and achievements** seamlessly.

## Features

- 📊 Track **workout progress** in real-time
- 🏆 Unlock **achievements** based on milestones
- 🎯 Score-based workout system
- ☁️ **Firebase integration** for data storage and user authentication
- 🔄 State management using **Context API**

## Tech Stack

- **Frontend:** React Native (with Expo)
- **State Management:** Context API
- **Backend:** Firebase (Firestore, Authentication, Storage)
- **Navigation:** React Navigation
- **UI Library:** React Native Paper
- **Package Manager:** pnpm

## Installation

### Prerequisites

- Install **Node.js** and **pnpm**
- Install **Expo CLI**

### Steps to Run Locally

```sh
# Clone the repository
git clone https://github.com/your-username/nowdribble.git
cd nowdribble

# Install dependencies
pnpm install

# Start the development server
expo start
```

## Folder Structure

```
/src
  /context          # Context API for state management
    WorkoutProgressContext.js
    ScoreContext.js
    AchievementsContext.js
  /screens         # App screens
    HomeScreen.js
    WorkoutScreen.js
    AchievementsScreen.js
  /components      # UI components
    WorkoutCard.js
    ScoreBoard.js
App.js             # Root of the app
README.md          # Project documentation
```

## Usage

- Open the app in **Expo Go** (or on a simulator/emulator)




