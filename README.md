# React Native Music Widget

Simple music widget build in pure JavaScript for React Native App!

## Introduction

React native music widget is a simple, customizble and easy to use music widget in react native. Works with both Android and IOS

## Installation

```
npm install react-native-music-widget --save
```

## Example

```jsx
import MusicWidget from 'react-native-music-widget'

...
//basic version
<MusicWidget url={your-music-url-here} />

//customized version
<MusicWidget url={your-music-url-here}
   trackStyle={your-prefered-style-on-track}
   thumbStyle={your-prefered-style-on-thumb}
   thumbImage={your-prefered-image-on-thumb}
   thumbTintColor={your-prefered-tint-color-on-thumb}
   thumbTouchSize={your-prefered-touch-size-of-thumb}
/>
...
```

## Props

|Property|Type     |Optional|Description|
|:-------------|:------:|:-----:|---------------------------------:|
|url           |string  |No     |The url of the music file         |
|trackStyle    |object  |Yes    |Customized track style            |
|thumbStyle    |object  |Yes    |Customized thumb style            |
|thumbImage    |object  |Yes    |Customized thumb image            |
|thumbTintColor|string  |Yes    |Customized tint color of the thumb|
|thumbTouchSize|object  |Yes    |Customized touch size of the thumb|

## Other

This package makes use of [react-native-sound](https://github.com/zmxv/react-native-sound) for music file handling and [react-native-slider](https://github.com/jeanregisser/react-native-slider) for slider component.

## Next version

Any suggestion and PR is welcome
