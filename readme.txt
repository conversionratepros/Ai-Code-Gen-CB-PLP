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



4. ALways ask the person to include the user story if there is not none in the new ab test sub folder
5. In the 


5. Technical.
5.1 a large amount of our tests need the waitForElement function. This waits for an element to load on the page so the changes can be applied. Before building the test, ask if there needs to be a wait for elment. If yes, this needs to be supplied and the wait for element function should be used in the code
5.2 Do not genearte empty css classes
