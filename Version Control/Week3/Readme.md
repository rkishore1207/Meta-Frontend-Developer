# Version Control
## Week 3
![SSH Key commands](https://github.com/rkishore1207/Meta-Frontend-Developer/assets/146698138/436fc887-91e7-459e-bc22-1b375a11cc40)
* `cat gitSSH.pub | clip` -> this command helps to copy the content inside the file.
* SSH -> Secure Shell;
* Any folder that starts with *dot(.)* those are all hidden files.
* Git WorkFlow,
    1. Modified
    2. Staged
    3. Committed
* If any changes or add or delete in the working directory that to be considered as **Modified** but those are *not tracked* by the remote.
* Then with `git add .` we would force them into **staging environment** and with `git commit` just **save** all the changes to the ***remote repository***.
* After adding our modified files, it will be going into Staging environment then by `git restore --stage <fileName>` this command we can retrive our files back before commit.