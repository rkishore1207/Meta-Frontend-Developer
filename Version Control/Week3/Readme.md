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
------------
* `git branch <branchName>` just create new branch in the repo.
* `git checkout -B feature/lesson` -> create new feature branch and <u>copy everything in the main branch</u> to this branch and the pointer points to newly created branch immediately.
* The purpose of a pull request is to obtain a **peer review** of changes made to the branch. In other words, to validate that the *changes are correct*.
---------------
### TO connect remote repo with local by GITHUB CLI
* Run `gh auth login`, then Select `GitHub.com` -> `HTTPS` -> `Paste an Authentication token` -> with the required scopes.
* Clone the repo by `gh repo clone "<userName>/<repoName>"`.
* Enable email and userName by `git config user.email "rkishoreatr1207@gmail.com"` and `git config user.name "rkishore1207"`.
------------
* Before push always execute `git status` to check if any conflicts are there.
* `git log --merge` to identify who and which branch cause the conflict.
* If there is any conflicts `git diff` to know at where were conflicts occured.
* with the **<<<<>>>>** we can specify what does we want and avoid.
-------
* To check the current commit **Hash Id** just execute `.git/refs/heads/<branch Name>`.
* For every commit new hash id were created.
* <u>Head always point to the last commit.</u>
* `git diff <file1> <file2>` -> shows what are the files were changed in both the files.
* `HEAD` -> shows the last committed files
