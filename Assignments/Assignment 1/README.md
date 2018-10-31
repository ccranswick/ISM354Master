# Getting Started: Dane Brouwer 20256671
>## An exploration into **architectural patterns**  and **web applications.**

## Table of Contents
1. [Introduction](#INTRO)
2. [MVC](#MVC)
3. [MVVM](#MVVM)
4. [Web Applications and React.js](#REACT)
5. [References](#REF)

# <a name="INTRO"></a> INTRODUCTION
Before we begin its important to understand what an architectural pattern is. 

An architectural pattern is a predeveloped broad-scoped approach to software development in order to deal with common issues experienced by programmers.

Model-View-Controller (MVC) and Model-View-Viewmodel (MVVM) are two common examples of architectural patterns.

| MVC | MVVM |
:---:|:---:
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/MVC-Process.svg" width="200" height="200"/>|<img src="https://i.stack.imgur.com/vTZzA.png" width="300" height="100"/>

Architectural patterns are important to understand when delving into web applications as these patterns are used extensively in the field to define an approach and establish initial structure and standards. It additionally provides an answer to any baseline questions as to how or what needs to be developed.
#

# <a name="MVC"></a> MVC
This architectual pattern segments an application into three related and interconnected components, diverging the graphical user interface (GUI) development from the backend development. This segmentation encourages and allows for simultaneous development as well as code reuse. 

The three components all differ in function and form, these components are namely Model, View and Controller. The model component manages the data of the application, it recieves input from the controller and then updates the view. Since the model receives no interaction from the user, it can be considered the backend of the application. The view component manages the representation of the data for user interpretation, this interacts directly with the user and will thus be the GUI. The controller manages user input and converts this into commands for the model to interpret. As a result of this pattern incorporating user input, its traditionally used for desktop GUIs, web applications and mobile clients.

MVC boasts high logical cohesion, low coupling, ease of modification and can support multiple views for a single model. These advantages naturally have their downsides, as such, code navigability and consistency become difficult as well as a pronounced learning curve as a programmer needs to be skilled in multiple technologies.
#

# <a name="MVVM"></a> MVVM
The Model-View-Viewmodel architectural pattern is similar to MVC in concept. It also splits the application into a number of fragments or artifacts and contains a GUI that the user interacts with. However it differs where it has a view-model as opposed to a controller.

MVVM uses the view-model as a value converter, This means that the view-model is repsponsible for displaying the data objects from the model in a manner which allows for easy presentation and management. This is achieved all while maintaining a low coupling level. As a such a major difference between MVC and MVVM is that MVVM is not dependent on a specific user-interface (UI) platform.

This mediator pattern aims to keep the advantages of MVC while leveraging data binding. However, since this pattern is extensive in overheads its argued that it can be unjustified for simple UI operations.
#

# <a name="REACT"></a> WEB APPLICATIONS AND REACT.JS
The explanations of the above patterns may seem an abstraction too far from web applications, however Its important to have a deep understanding of these patterns as they define the structure of web applications and what programming languages are therefore required. 

Web applications are simply a client-server program with some form of GUI that runs in a web browser. Some examples of web applications are Google Docs, Slack, Twitter and Facebook.

Prior to web applications, dynamic web pages were limited by the standards upon which they were built. These web pages were built using HTML, CSS and JavaScript. while these standards provided dynamism to users, developers were limited as there was little to no support for UI development. As such, a library for JavaScript was developed in order to support UI development, and by extention, web applications. This library was named React.js.

>In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.<br/>- (En.wikipedia.org, 2018)

Using the above, web applications can then be understood to be built using architectual patterns, HTML5, CSS, JavaScript and React.
## Representation of a Web Application using MVC 
Component | Standard
---|---
Model | JavaScript
View | HTML5 & CSS
Controller | React
#

# <a name="REF"></a> REFERENCES
https://en.wikipedia.org/wiki/Architectural_pattern<br/>
https://en.wikipedia.org/wiki/JavaScript<br/>
https://en.wikipedia.org/wiki/Model–view–controller<br/>
https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel<br/>
https://en.wikipedia.org/wiki/React_(JavaScript_library)<br/>
https://en.wikipedia.org/wiki/Web_application<br/>
#