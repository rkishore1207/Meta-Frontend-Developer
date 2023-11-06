# Version Control
## Week 1
* Version control is a system that records all modifications and changes to files for tracking purpose.
* `Revision history` -> giving the history of code and we can able to **revert and roll back** to the older versions of the code.
* `Identity` -> it signifies that it should show **everyone's name and identity** for their contribution such as he is deleted, he is modified, etc,.
* `Collaboration` -> our team members also can add and modify feature to our team projects and we can utilize the **peer review** that is one can rise the **pull request** to all the peers and everyone needs to check whether that particular piece of code is valid or not and give **approval**.
* `Efficiency` -> Your development team is tasked to develop an app. Your project manager leads you to work in an Agile way of working where tasks are planned and executed in a two-week cycle. This is done to ensure Effieciency.
### Systems of Version Control and Tools
    1. SubVersion
    2. AWS code Commit
    3. Perforce
    4. Mercurial
    5. Git
* Generally version control systems are categorized into two domains,
1. Centralized
2. Distributed
* `Centralized` -> it have one **common server (Hub)** that can communicate with lot of **clients (local Machine)**.
* It has all the *code history* and the entire *code base* of that project, then once the code is changing we need to push it to the server where it has the complete code base.
* It's easy but slow and we need to always connect to the server.
* `Distributed` -> It is similar to Centralized version but if you pull the code from the repo to your local machine it would include **all the history** of the changes also.
* It is fast and easier than centralized and <u>doesn't need always connect to server</u>, until you want to see the latest history.
### History of GIT (Version Control System)
* At 1990, **Concurrent Version System (CVS)** was developed to monitor the l`ocal system's folder` structure but it sould track only the text files not the binary files such as Video,images and doesn't have server.
* Then **SubVersioN(SVN)** came into picture which resolves all the disadvantages of CVS and gave server also by the help of `BitKeeper`.
* Then license of bitkeeper were **revoked** then market planned to develop two projects for the distributed version system.
* By the result they developed **Mercurial** and everyone moves to Mercurial because we don't need to always connect to server.
* After that, 2007 **Git** was introduced and it is very advantage in order of every feature so everyone start to use GIT.
### Version Control WorkFlow
* GIT having two workflows are,
    1. How to be resolve conflicts
    2. It should be easy to make Peer review and getting approved
* **Continuous Integration** is for making to verify our development code's <u>test automatically and build</u> it into an artifact that is executable format for all platforms.
* And **Continuous Delivery** is just `packaging our artifact` and make is available for Continuous Deployment.
* In CD 1st it will validate from the **staging environment** that everything is packaged correctly and it will safely release it to the live environment that is **Production Environment**.
