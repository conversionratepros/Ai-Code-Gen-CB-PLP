For ai:

Background
I am building AB tests using convert.com 
AB tests are build using JS and CSS.
Examples can be refernced from this project. 
Do not apply styles where not specified. If it says element needs to be updated style wise and no style information is given, example, colour, do not apply your own style.


General
When building a test  I will refernce a folder. 
Do not create a folder if the folder exists. 
Put all code in existing files. 
If a folder does not exist you can ask to make one
Refernce the user story in the folder name supplied in the instruction
The user story will contain all the details needed for the variation
All code needs to be added to this folder. 
Refence the "Corrections" file, these are things that were done wrong when building previous tests
When asking to build a test, add the varaion js in the js file for the specific ab test
When asking to build a test, add the varaion css in the css file for the specific ab test



Repository structure and file meanings.

1. The repostoriy consists of previous AB test experiments
1.2 These are found in AB test code examples
1.3 Each sub folder in AB test code examples containers a sample js file and a sample cs file. 
1.4 These can be refernced to build new AB tests
1.5 Do not refernce tests in "New AB Tests" Folder

2. Each repository contains a Control.html file. 
2.1 This is how the page looks where AB tests will run on. 
2.2 This has be sourced from inspecting elements and viewing page source in a a browser. 

3. Each repository contains a Convert.com Deployments folder. 
3.1 These are deployments that are currently active on convert.com



4.Always do this before building a test:
4.1 Check if the folder structure and core files or folders are correct in the repo. If there is not tell the developer to let managment know. The core files or folders areou outlined below:
4.1.1 Core folder:There shoudl be a folder name "AB test code examples".
4.1.2 Core file: There shoudl always be a global js file in "AB test code examples".
4.1.3 Core file: There should always be a control.html file
4.1.4 Core folder: There should always be a convert.com deployments folder
4.1.5 Core file: There should always be Human-readme.txt file
4.1.6 Core folder: There should always be a New AB tests folder
4.2 ALways ask the person to include the user story if there is not none in the new ab test sub folder. If there is a user story in the sub folder, you do not need to ask
4.3 Always ask the develoeprs if ther are any technical details they would like to add before building the test. If they say yes, include these in the build. If they say no, you can proceed to buid the ab test

 
5. Technical.
5.1 a large amount of our tests need the waitForElement function. This waits for an element to load on the page so the changes can be applied. Before building the test, ask if there needs to be a wait for elment. If yes, this needs to be supplied and the wait for element function should be used in the code
5.2 Do not genearte empty css classes
