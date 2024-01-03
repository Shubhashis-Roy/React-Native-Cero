- Create a Project: `npx react-native init AwesomeProject`
- Start the project: `npx react-native run-android` || `npm run start` || `npm start`
- restart: `shift+r` || `r`

<h2> React-Native Architecture </h2>

- JS not compiled in the platform based lang. like java or cpp.
  Because Js is a loosey typed lang.

#### How to excute the code:

- After run the cammand "react-native run-android" It start a packager.
- Packager basically bundle all the JS code in single file named main.bundle.js.
- Whenever the application start up It'll start a main thread known as Native/UI thread
- After that it's looking for platform entry, like android looking for android folder and ios look for ios folder.
- When it found the entry folder it start a JS virtual machine known as JS thread.
- Finally all the bundle code which is in the main.bundle.js file it start to excute in this virtual machine.

- Now here one thing to notice that there are two diff thread one is main thread(UI/Native thread) and other one is JS thread. They did't directly communicate.

#### How this two diff thread is communicate to each other:

- They did't directly communicate to each other because these two thread are used diff lang. [ UI thread is used native lang. and JS thread used JS ]

- With the help of react-native bridg(RN Bridge) they able to communicate to each other.

![React-Native Architecture](https://github.com/Shubhashis-Roy/React-Native-Cero/assets/94479675/9e24687d-2fa1-4c3a-8b81-1c46a83fcc6e)

#### Communication Process:

- JS is decided what should be render on the screen.

  - 1st JS send a message that what data should be render and where should be render, and the message send as CLI json. This message should also state that where should be render. Because main thread doesn't understand flex box.
  - Here shadow thread came into the picture. Shadow thread calculate the height, width also fn and all etc passes on the bridge.

- When User create any event this event create on the main thread(UI thread).
- Than this evet send back as a CLI json to JS thread. In a normal case this architecture is good nothing block. Working like async.
- What If when the user is create soo many event at a time.
  - This time nothing shown on our screen. To reslove this issue react-native team change the old Architecture.

<hr/>

### New Architecture:

![react-native new Architecture](https://github.com/Shubhashis-Roy/React-Native-Cero/assets/94479675/55b7122e-0fac-4c27-9228-3daa8a3bf3d4)

- RN-Bridge is replaced by JSI (JS Interface).

  - JSI is written in cpp it's light weigth, it's general perpose. With the help of JSI we can able to call native mathod directly from JS.
  - Now with the help of JSI we are able to used native code. Basically native code convert to js code using cpp Host object APIs.
  - JSI is faster beacuse it's written in cpp and we all know that the cpp is more faster then js that's why the render proccess is also fast.

- FABRIC

  - Fabric is a new render system in react-native.
  - <a href="https://reactnative.dev/architecture/fabric-renderer" > Read More </a>

- Turbo Modules

  - It's a new way to write API. It also direct access with the native code. And main advantage is it used lazy loading.
  - <a href="https://reactnative.dev/docs/next/the-new-architecture/pillars-turbomodules" > Read More </a>

  - USE CASE:
    - when we start a app initially there are so many thing to load which have no use at the initial face and that's why some time our app may slow.
    - Now turbo moduls load these things only which have required others load when it required. This achived by using lazy loading.

- Read about Metro <a href="https://reactnative.dev/docs/metro" >Clicked</a>

<hr/>

## Theory with Code:

- Read about how to structure the app:
  <a href="https://medium.com/the-andela-way/how-to-structure-a-react-native-app-for-scale-a29194cd33fc" > File Structure </a>

- babel.config.js is used for bundle all the file in a single file.
  In the bable we used matro config.metro is a bundler

- Entry file for bable is index.js. From here oue application start to.

- For Jsx we have to gives a end tag of starting tag.

- `alignItems` works on left to right
- `justifyContent` top to buttom

Read more about how css work:
<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"> Flex box cheetSheet </a>

#### ScrollView vs FlatList

- ScrollView: ScrollView renders all its react child components at once, but this has a performance downside.

- FlatList: FlatList renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.
  FlatList is also handy if you want to render separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.

- UI practice Platform: <a href="https://dribbble.com/" >Dribbble</a>
- Color Card Website: <a href="https://www.uicolorpicker.learncodeonline.in/" >Clicked</a>

#### Navigation:

- Navigation lifecycle:
- Stack Navigation:
  - StackActions reference:
    <a href="https://reactnavigation.org/docs/stack-actions">Link</a>

#### Questn :

onClick={() => handleClicked()}

onClick={() => handleClicked}

onClick={handleClick}

onClick={handleClick()}
