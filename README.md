# Overview

Health Bridge is a mobile application designed to simplify doctor consultations. Built using React Native with Expo, it leverages Zustand for efficient state management and features a combination of Drawer and Tab navigation for an intuitive user experience. 

## Clone the Repository
```bash
https://github.com/Farmaan-Malik/AyuryujAssignment.git
```
## Note
- Use **React Native Bridgeless** (with Expo)
  
## Setup Instructions
Install Dependencies and prebuild
```bash
npm install
```
```bash
npx expo prebuild
```

## Run the Application
### Run on Android
```bash
npx expo run:android
```
### Run on IOS
```bash
npx expo run:ios
```

# Screens

### Welcome Screen
<img width=500 src="./readmeImages/WelcomePage.png"/>
With smooth animations when opened, this screen serves as an entry point to this app.

### Home Screen
 <Div>
<img width=500 src="./readmeImages/HomePage.png"/>
<img width=500 src="./readmeImages/HomePage2.png"/>
 </Div>

The homepage has several tiles that dont serve a function yet and are there just for aesthetics except for the 'Consult a Doctor' section.
When a tile from this section is selected, it navigates the user to the Doctor Listing screen with the tile's label as the value for the filter and this search is always done for doctor's speciality parameter.

### Doctor List Screen
 <Div>
<img width=500 src="./readmeImages/DoctorList.png"/>
<img width=500 src="./readmeImages/DoctorSelectedList.png"/>
<img width=500 src="./readmeImages/filterUse.png"/>

 </Div>

Doctor List screen displays a list of doctors. A custom component displays all the information such as name, speciality, fee, location etc. This component has two buttons:
- Know More: Navigates the user to the doctor detail screen where more information about the doctor is available.
- Consult now: Adds the doctor as the selected doctor for the user. This button label changes to "Added", to show the user that the doctor has been added.

 <Div>
<img width=500 src="./readmeImages/DoctorProfile.png"/>
<img width=500 src="./readmeImages/DoctorListFilterBox.png"/>
 </Div>

The filter button at the top right of the screen toggles the filter box where the user can select the filter mode for the screen.
- Name: Searches doctors based on their name.
- Speciality: Searches doctors based on their Speciality.
- Location: Searches doctors based on their Location.

The doctor list changes as the input field's value is changed. The placeholder for the input field also changes its value to show the user what the current filter is.

### Profile Screen
 <Div>
<img width=500 src="./readmeImages/profileScreen.png"/>
<img width=500 src="./readmeImages/DoctorSelectedProfile.png"/>
 </Div>

Profile screen shows the user's name, gender, age and has a place holder image for android users while the profile image for ios users is generated using their username as seed for the image. This is accomplished by using the DiceBear library.
- This screen also shows the doctor's card with all of his/her information if a doctor was previously selected in the doctor listing screen. If no doctor is selected, it simply shows a message instead of the card.
- The user can also de-select the doctor by pressing the "Cancel appointment" button on the doctor card.
- The user can change his/her username and other information by clicking on the "Edit Profile" button.
Once clicked, the user is navigated to the edit profile page.

### Edit Profile
 <Div>
<img width=500 src="./readmeImages/editProfile2.png"/>
<img width=500 src="./readmeImages/editProfile.png"/>
<img width=500 src="./readmeImages/updatedProfile.png"/>
 </Div>

This screen has a simple form layout with: 
- A username input field that uses whatever character is typed, as the seed for the avatar above (only for ios).
- An age input field to edit the user's age
- Dynamic buttons for gender.
- Cancel button that navigates the user back to the Profile Screen.
- Submit Button that updates the user details.

# Navigation
## Drawer Navigation
 <Div>
<img width=500 src="./readmeImages/drawer.png"/>
 </Div>

 The drawer can be accessed by either swiping the screen from left to right or by clicking the toggle button on the top left of the screen.
 This component can be used to navigate to different screens and also features the user's avatar (or profile image), name, age and gender.

 ## Tab Navigation
 <Div>
<img width=500 src="./readmeImages/HomePage.png"/>
<img width=500 src="./readmeImages/HomePage2.png"/>
 </Div>

 The user can use the tabs present on the bottom of the screen to switch between different screens. This provides an easy and quicker way to navigate to a different screen.



